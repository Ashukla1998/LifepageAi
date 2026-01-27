import { useState, useMemo, useRef, useEffect } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";
import { usePdfExport } from "../hooks/usePdfExport";

import TabsBar from "../components/DreamIndex/TabsBar";
import ProgressBar from "../components/DreamIndex/ProgressBar";
import QuestionStep from "../components/DreamIndex/QuestionStep";
import ResultSummary from "../components/DreamIndex/ResultSummary";
import PdfReport from "../components/DreamIndex/PdfReport";

const TABS = [
  "What Is",
  "Education",
  "Skills",
  "Positives",
  "Challenges",
  "A Day Of",
];

export default function DreamIndexModal({
  open,
  onClose,
  sessionData = [],
  image,
  generatedFor,
}) {
  const reportRef = useRef(null);
  const apiCalledRef = useRef(false);
  const { exportPdf } = usePdfExport();

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [value, setValue] = useState(5);
  const [dreamResult, setDreamResult] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const [exporting, setExporting] = useState(false);

  /* RESET WHEN MODAL CLOSES */
  useEffect(() => {
    if (!open) {
      setActiveTab(TABS[0]);
      setQuestionIndex(0);
      setAnswers({});
      setValue(5);
      setDreamResult(null);
      setCalculating(false);
      apiCalledRef.current = false;
    }
  }, [open]);

  /* GROUP QUESTIONS */
  const groupedData = useMemo(() => {
    const obj = {};
    TABS.forEach((t) => (obj[t] = []));
    sessionData.forEach((q) => obj[q.que_category]?.push(q));
    return obj;
  }, [sessionData]);

  const questions = groupedData[activeTab] || [];
  const currentQuestion = questions[questionIndex];

  const totalQuestions = sessionData.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = totalQuestions > 0 && answeredCount === totalQuestions;

  /* API */
  useEffect(() => {
    if (!isComplete || apiCalledRef.current) return;

    apiCalledRef.current = true;
    setCalculating(true);

    axios
      .post("/n/api/DreamIndex", {
        maxScore: 10,
        questions: sessionData.map((q) => ({
          category: q.que_category,
          weight: Number(q.percentage),
          value: Number(answers[q.questionid] || 0),
        })),
      })
      .then((res) => setDreamResult(res.data.data))
      .finally(() => setCalculating(false));
  }, [isComplete]);

  const handleNext = () => {
    setAnswers((p) => ({ ...p, [currentQuestion.questionid]: value }));

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
      setValue(5);
      return;
    }

    const nextTab = TABS[TABS.indexOf(activeTab) + 1];
    if (groupedData[nextTab]?.length) {
      setActiveTab(nextTab);
      setQuestionIndex(0);
      setValue(5);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      const prevQuestion = questions[questionIndex - 1];
      setQuestionIndex((i) => i - 1);
      setValue(answers[prevQuestion.questionid] ?? 5);
    }
  };


  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-4xl p-10 rounded-3xl bg-[#071f33] text-white">
        <button onClick={onClose} className="absolute top-5 right-5">
          <MdClose size={22} />
        </button>

        <TabsBar tabs={TABS} activeTab={activeTab} />

        <ProgressBar
          answered={answeredCount}
          total={totalQuestions}
        />

        {!isComplete && (
          <QuestionStep
            question={currentQuestion}
            value={value}
            setValue={setValue}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={questionIndex === 0 && activeTab === TABS[0]}
          />
        )}

        {isComplete && (
          <ResultSummary
            calculating={calculating}
            dreamResult={dreamResult}
            onExport={async () => {
              setExporting(true);
              await exportPdf({ ref: reportRef, generatedFor });
              setExporting(false);
            }}
            exporting={exporting}
          />
        )}

        {/* PDF ONLY */}
        <PdfReport
          reportRef={reportRef}
          image={image}
          dreamResult={dreamResult}
          groupedData={groupedData}
          answers={answers}
        />

      </div>
    </div>
  );
}
