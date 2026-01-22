// import { useState, useMemo, useRef,useEffect } from "react";
// import { MdClose, MdPictureAsPdf } from "react-icons/md";
// import { usePdfExport } from "../hooks/usePdfExport"; 
// import axios from "axios";

// const TABS = [
//   "What Is",
//   "Education",
//   "Skills",
//   "Positives",
//   "Challenges",
//   "A Day Of",
// ];

// export default function DreamIndexModal({
//   open,
//   onClose,
//   sessionData = [],
//   image, 
//   generatedFor = "Career Analysis",
// }) {
//   /* ---------------- PDF EXPORT ---------------- */
//   const reportRef = useRef(null);
//   const { exportPdf } = usePdfExport();
//   const [exporting, setExporting] = useState(false);

//   /* ---------------- STATE ---------------- */
//   const [activeTab, setActiveTab] = useState(TABS[0]);
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [value, setValue] = useState(5);
//   const [dreamResult, setDreamResult] = useState(null);
//   const [calculating, setCalculating] = useState(false);
//   const apiCalledRef = useRef(false);

//   useEffect(() => {
//     if (!open) {
//       setActiveTab(TABS[0]);
//       setQuestionIndex(0);
//       setAnswers({});
//       setValue(5);
//       setDreamResult(null);
//       setCalculating(false);
//       apiCalledRef.current = false;
//     }
//   }, [open]);


//   /* ---------------- GROUP QUESTIONS ---------------- */
//   const groupedData = useMemo(() => {
//     const obj = {};
//     TABS.forEach((t) => (obj[t] = []));
//     sessionData.forEach((q) => {
//       if (obj[q.que_category]) {
//         obj[q.que_category].push(q);
//       }
//     });
//     return obj;
//   }, [sessionData]);
//   // console.log("session data", sessionData);
//   /* ---------------- DERIVED ---------------- */
//   const questions = groupedData[activeTab] || [];
//   const currentQuestion = questions[questionIndex];

//   const totalQuestions = sessionData.length;
//   const answeredCount = Object.keys(answers).length;

//   const progressPercent =
//     totalQuestions === 0
//       ? 0
//       : Math.round((answeredCount / totalQuestions) * 100);

//   const isComplete =
//     totalQuestions > 0 && answeredCount === totalQuestions;

  

//   /* ---------------- HANDLERS ---------------- */
//   const handleNext = () => {
//     if (!currentQuestion) return;

//     setAnswers((prev) => ({
//       ...prev,
//       [currentQuestion.questionid]: value,
//     }));

//     if (questionIndex < questions.length - 1) {
//       setQuestionIndex((i) => i + 1);
//       setValue(5);
//       return;
//     }

//     let nextTabIndex = TABS.indexOf(activeTab) + 1;
//     while (nextTabIndex < TABS.length) {
//       const nextTab = TABS[nextTabIndex];
//       if (groupedData[nextTab]?.length) {
//         setActiveTab(nextTab);
//         setQuestionIndex(0);
//         setValue(5);
//         return;
//       }
//       nextTabIndex++;
//     }
//   };

//   const handlePrevious = () => {
//     if (questionIndex > 0) {
//       const prevQuestion = questions[questionIndex - 1];
//       setQuestionIndex((i) => i - 1);
//       setValue(answers[prevQuestion.questionid] ?? 5);
//     }
//   };

//   const handleGenerateReport = async () => {
//     if (!reportRef.current) return;

//     setExporting(true);

//     await exportPdf({
//       ref: reportRef,
//       fileName: "Dream-Index-Career-Report",
//       watermarkText: "lifepage.in",
//       generatedFor,
//     });

//     setExporting(false);
//   };

//   const callDreamIndexApi = async () => {
//     const payload = {
//       maxScore: 10,
//       questions: sessionData.map((q) => ({
//         category: q.que_category,
//         weight: Number(q.percentage),               // ← USE DB PERCENTAGE
//         value: Number(answers[q.questionid] || 0),  // slider value
//       })),
//     };

//     try {
//       setCalculating(true);

//       const res = await axios.post("/lifepage/n/api/DreamIndex", payload, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (res.data?.success !== 1) {
//         throw new Error("Dream Index calculation failed");
//       }

//       setDreamResult(res.data.data);
//     } catch (err) {
//       console.error("DreamIndex API error:", err);
//     } finally {
//       setCalculating(false);
//     }
//   };

//   useEffect(() => {
//     if (isComplete && !apiCalledRef.current) {
//       apiCalledRef.current = true;
//       callDreamIndexApi();
//     }
//   }, [isComplete]);

//   if (!open) return null;
//   /* ---------------- UI ---------------- */
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative w-full max-w-4xl rounded-3xl bg-gradient-to-b from-[#0b2d4a] to-[#071f33] p-10 text-white shadow-2xl">
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
//         >
//           <MdClose size={20} />
//         </button>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {TABS.map((tab) => (
//             <div
//               key={tab}
//               className={`px-5 py-2 rounded-xl text-sm font-semibold ${
//                 tab === activeTab
//                   ? "bg-orange-500 text-white"
//                   : "bg-white/10 text-white/60"
//               }`}
//             >
//               {tab}
//             </div>
//           ))}
//         </div>

//         {/* Progress */}
//         <div className="flex items-center justify-between mb-10">
//           <span className="text-sm text-white/80">
//             {answeredCount} / {totalQuestions}
//           </span>

//           <div className="flex items-center gap-4 w-1/2">
//             <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-orange-500 transition-all"
//                 style={{ width: `${progressPercent}%` }}
//               />
//             </div>
//             <span className="text-orange-400 font-semibold text-sm">
//               {progressPercent}% Complete
//             </span>
//           </div>
//         </div>

//         {/* QUESTIONS */}
//         {!isComplete && (
//           <>
//             <h2 className="text-3xl font-extrabold text-center mb-12">
//               {currentQuestion && (() => {
//                 const prefixMap = {
//                   "What Is": "How much do you like ",
//                   "Education": "How much did you like to study ",
//                   "Skills": "How much did you like to develop ",
//                   "Positives": "How much did you like ",
//                   "Challenges": "Are you prepared to face ",
//                   "A Day Of": "How much did you like a day in ",
//                 };

//                 const prefix = prefixMap[activeTab] || "";
//                 return `${prefix}${currentQuestion.question}`;
//               })()}
//             </h2>

//             <input
//               type="range"
//               min={1}
//               max={10}
//               value={value}
//               onChange={(e) => setValue(Number(e.target.value))}
//               className="w-full accent-orange-500 mb-6"
//             />

//             <div className="flex justify-between text-xs text-white/60 mt-2">
//               {[...Array(10)].map((_, i) => (
//                 <span key={i}>{i + 1}</span>
//               ))}
//             </div>

//             <div className="text-right text-orange-400 text-3xl font-extrabold mb-10">
//               {value}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={handlePrevious}
//                 className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30"
//               >
//                 Previous
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="px-10 py-3 rounded-xl bg-orange-500 hover:bg-orange-600"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {/* COMPLETION + REPORT */}
//         {isComplete && (
//           <div className="text-center py-16">
//             <h2 className="text-4xl font-extrabold mb-6">
//               Your Dream Index Report Is Ready
//             </h2>

//             <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
//               Download your personalized career report with insights,
//               scores, and recommendations. Your photo will appear
//               on the final report if provided.
//             </p>
//             {calculating && (
//               <p className="text-white/60 text-sm mb-6">
//                 Calculating your career success…
//               </p>
//             )}

//             {/* API RESULT */}
//             {dreamResult && !calculating &&(
//               <div className="mb-10 text-center">

//                 <p className="text-sm uppercase tracking-wider text-white/60">
//                   Career Success Probability
//                 </p>

//                 <p className="text-6xl font-extrabold text-orange-400 mt-2">
//                   {dreamResult.overall_percentage}%
//                 </p>

//                 <p className="text-white/70 mt-2">
//                   Match with this career based on your responses
//                 </p>

//                 {/* Category Breakdown */}
//                 <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
//                   {Object.entries(dreamResult.breakdown).map(([category, value]) => (
//                     <div
//                       key={category}
//                       className="bg-white/10 rounded-xl p-4"
//                     >
//                       <p className="text-xs text-white/60">
//                         {category}
//                       </p>
//                       <p className="text-xl font-bold text-orange-300">
//                         {value}%
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             )}

//             <button
//               onClick={handleGenerateReport}
//               disabled={exporting}
//               className={`inline-flex items-center gap-3 px-12 py-4 rounded-xl font-semibold text-lg ${
//                 exporting
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-orange-500 hover:bg-orange-600"
//               }`}
//             >
//               <MdPictureAsPdf size={22} />
//               {exporting ? "Preparing PDF…" : "Generate PDF Report"}
//             </button>

//             {/* PDF CONTENT (HIDDEN FROM USER, VISIBLE TO PDF) */}
//             <div className="absolute left-[-9999px] top-0">
//               <div
//                 ref={reportRef}
//                 className="relative p-14 text-gray-900 w-[900px]"
//                 style={{
//                   background: "rgba(255,255,255,0.92)",
//                   borderRadius: "28px",
//                 }}
//               >
//                 {/* HEADER */}
//                 <div className="flex items-center justify-between mb-14">
//                   <div>
//                     <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight">
//                       Dream Index Career Report
//                     </h1>
//                     <p className="text-lg text-gray-600 mt-2">
//                       Personalized career suitability analysis
//                     </p>
//                   </div>

//                   {image && (
//                     <img
//                       src={image}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
//                     />
//                   )}
//                 </div>

//                 {/* HERO SCORE */}
//                 {dreamResult && (
//                   <div
//                     className="mb-16 p-10 rounded-3xl"
//                     style={{
//                       background: "linear-gradient(135deg,#eef2ff,#ffffff)",
//                       border: "1px solid #e0e7ff",
//                     }}
//                   >
//                     <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
//                       Executive Summary
//                     </p>

//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-7xl font-extrabold text-indigo-700">
//                           {dreamResult.overall_percentage}%
//                         </p>
//                         <p className="text-gray-600 mt-2 text-lg">
//                           Career Success Probability
//                         </p>
//                       </div>

//                       <div className="px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
//                         Strong Career Match
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mt-6 max-w-2xl">
//                       This score represents how closely your interests, skills,
//                       and preferences align with the demands of this career path.
//                     </p>
//                   </div>
//                 )}

//                 {/* CATEGORY BREAKDOWN */}
//                 {dreamResult && (
//                   <div className="mb-16">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-8">
//                       Category Breakdown
//                     </h2>

//                     <div className="grid grid-cols-3 gap-6">
//                       {Object.entries(dreamResult.breakdown).map(([cat, val]) => (
//                         <div
//                           key={cat}
//                           className="p-6 rounded-2xl bg-white shadow-sm border"
//                         >
//                           <p className="text-sm text-gray-500 mb-2">{cat}</p>
//                           <p className="text-3xl font-extrabold text-indigo-600">
//                             {val}%
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* DETAILED RESPONSES */}
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-10">
//                     Detailed Responses
//                   </h2>

//                   {Object.entries(groupedData).map(([category, qs]) =>
//                     qs.length > 0 ? (
//                       <div key={category} className="mb-12">
//                         <h3 className="text-xl font-semibold text-indigo-700 mb-4">
//                           {category}
//                         </h3>

//                         <div className="space-y-3">
//                           {qs.map((q) => (
//                             <div
//                               key={q.questionid}
//                               className="flex justify-between items-center bg-white px-6 py-4 rounded-xl border"
//                             >
//                               <span className="text-gray-700">
//                                 {q.question}
//                               </span>
//                               <span className="font-semibold text-indigo-600">
//                                 {answers[q.questionid]}/10
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ) : null
//                   )}
//                 </div>
//               </div>


//             </div>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




















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
      .post("/lifepage/n/api/DreamIndex", {
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
