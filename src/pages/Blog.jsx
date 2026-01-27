// import { useState, useEffect, useRef } from "react";
// import LeftSide from "../components/Blog/LeftSide";
// import RightSide from "../components/Blog/RightSide";
// import axios from "axios";
// import { markdownToBlogSections } from "../hooks/markdownToBlogSections";
// import { calculateCategoryPercentages } from "../hooks/SumCategories";
// import ProfileLoadingScreen from "../components/ProfileLoadingScreen";
// export default function Blog() {
//   const [image, setImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [contentIndex, setContentIndex] = useState(0);
//   const [blogSections, setBlogSections] = useState([]);
//   const [categoryPercentages, setCategoryPercentages] = useState({});
//   const [sessionid,setSessionid] = useState("");
//   const [SessionData,setSessionData] = useState([]);
//   const hasFetched = useRef(false);

//   const sessionProfile = JSON.parse(
//     localStorage.getItem("selectedProfile")    
//   );

  
//   useEffect(() => {
//     if (!sessionProfile || hasFetched.current) return;
//     hasFetched.current = true;

//     async function fetchSessionPercentage() {
//       try {
//         const res = await axios.post(
//           "/lifepage/n/api/questiondetails",
//           { id: sessionProfile.profileid },
//           { headers: { "Content-Type": "application/json" } }
//         );

//         if (res.data?.success === 1) {
//           const questions = res.data.data[0].array_to_json;
//           const sessionIdFromApi = questions?.[0]?.sessionid || "";
//           setSessionData(questions);
//           setSessionid(sessionIdFromApi);
//           const categoryTotals = calculateCategoryPercentages(questions);

//           setCategoryPercentages(categoryTotals);
//         }
//       } catch (err) {
//         console.error(
//           "QUESTION API FAILED ❌",
//           err.response?.data || err
//         );
//       }
//     }



//     async function fetchSessionContent() {
//       try {
//         const res = await axios.post(
//           "/lifepage/n/api/checksession",
//           {
//             id: sessionProfile.profileid,
//           },
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         if (res.data?.success === 1) {
//           const markdown = res.data.data[0].content;

//           const sections = markdownToBlogSections(markdown);
//           setBlogSections(sections);
//         }
//       } catch (err) {
//         console.error(
//           "API FAILED ❌",
//           err.response?.data || err
//         );
//       }
//     }
//     fetchSessionPercentage();
//     fetchSessionContent();
//   }, [sessionProfile]);

//   /* ---------------- PROGRESS ---------------- */
//   const totalSteps = blogSections.reduce(
//     (sum, section) => sum + section.content.length,
//     0
//   );

//   const completedSteps =
//     currentIndex === 0 && contentIndex === 0
//       ? 0
//       : blogSections
//         .slice(0, currentIndex)
//         .reduce((sum, s) => sum + s.content.length, 0) +
//       contentIndex +
//       1;

//   const progress =
//     totalSteps === 0 ? 0 : completedSteps / totalSteps;

//   const blurValue = Math.max(0, 20 - progress * 20);

//   /* ---------------- LOADING STATE ---------------- */
//   if (!blogSections.length) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-sm text-gray-500">
//         <ProfileLoadingScreen count={3} />
//       </div>
//     );
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       <div
//         className="
//           max-w-7xl mx-auto
//           px-6 py-16
//           grid grid-cols-1
//           lg:grid-cols-[460px_1fr]
//           gap-16
//         "
//       >
//         {/* LEFT */}
//         <div className="lg:sticky lg:top-28 h-fit relative z-0">
//           <LeftSide
//             image={image}
//             setImage={setImage}
//             blurValue={blurValue}
//             weights={categoryPercentages}
//           />
//         </div>

//         {/* RIGHT */}
//         <div className="relative z-10">
//           <RightSide
//             blogSections={blogSections}
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//             contentIndex={contentIndex}
//             setContentIndex={setContentIndex}
//             progress={progress}
//             sessionid={sessionid}
//             questions = {SessionData}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";
import LeftSide from "../components/Blog/LeftSide";
import RightSide from "../components/Blog/RightSide";
import axios from "axios";
import { markdownToBlogSections } from "../hooks/markdownToBlogSections";
import { calculateCategoryPercentages } from "../hooks/SumCategories";
import ProfileLoadingScreen from "../components/ProfileLoadingScreen";

export default function Blog() {
  /* ---------------- STATE ---------------- */
  const [image, setImage] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const [blogSections, setBlogSections] = useState([]);
  const [categoryPercentages, setCategoryPercentages] = useState({});

  const [sessionid, setSessionid] = useState("");
  const [sessionData, setSessionData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasFetched = useRef(false);

  const sessionProfile = JSON.parse(
    localStorage.getItem("selectedProfile")
  );

  /* ---------------- DATA FETCH ---------------- */
  useEffect(() => {
    if (!sessionProfile || hasFetched.current) return;
    hasFetched.current = true;

    async function fetchAll() {
      try {
        setLoading(true);

        /* -------- QUESTIONS / WEIGHTS -------- */
        const questionRes = await axios.post(
          "/n/api/questiondetails",
          { id: sessionProfile.profileid },
          { headers: { "Content-Type": "application/json" } }
        );

        if (questionRes.data?.success === 1) {
          const questions = questionRes.data.data[0].array_to_json || [];
          const sessionIdFromApi = questions?.[0]?.sessionid || "";

          setSessionData(questions);
          setSessionid(sessionIdFromApi);

          const categoryTotals =
            calculateCategoryPercentages(questions);
          setCategoryPercentages(categoryTotals);
        }

        /* -------- SESSION CONTENT -------- */
        const contentRes = await axios.post(
          "/n/api/checksession",
          { id: sessionProfile.profileid },
          { headers: { "Content-Type": "application/json" } }
        );

        if (contentRes.data?.success === 1) {
          const markdown = contentRes.data.data[0].content || "";
          const sections = markdownToBlogSections(markdown);
          setBlogSections(sections);
        }
      } catch (err) {
        console.error("BLOG LOAD FAILED ❌", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, [sessionProfile]);

  /* ---------------- PROGRESS ---------------- */
  const totalSteps = blogSections.reduce(
    (sum, section) => sum + section.content.length,
    0
  );

  const completedSteps =
    currentIndex === 0 && contentIndex === 0
      ? 0
      : blogSections
          .slice(0, currentIndex)
          .reduce((sum, s) => sum + s.content.length, 0) +
        contentIndex +
        1;

  const progress =
    totalSteps === 0 ? 0 : completedSteps / totalSteps;

  /* ---------------- JOURNEY STATE ---------------- */
  const isCompleted =
    blogSections.length > 0 &&
    currentIndex === blogSections.length - 1 &&
    contentIndex ===
      blogSections[currentIndex]?.content.length - 1;

  const journeyPhase = isCompleted
    ? "complete"
    : progress < 0.2
    ? "intro"
    : progress < 0.7
    ? "analysis"
    : "insight";

  /* ---------------- VISUAL FEEDBACK ---------------- */
  const blurValue = Math.max(0, 20 - progress * 20);

  /* ---------------- LOADING / ERROR ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ProfileLoadingScreen count={3} />
      </div>
    );
  }

  if (error || !blogSections.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-500">
        Unable to load your career journey. Please refresh.
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-16
          grid grid-cols-1
          lg:grid-cols-[460px_1fr]
          gap-16
        "
      >
        {/* LEFT SIDE — PROFILE FORMATION */}
        <div className="lg:sticky lg:top-28 h-fit relative z-0">
          <LeftSide
            image={image}
            setImage={setImage}
            blurValue={blurValue}
            weights={categoryPercentages}
          />
        </div>

        {/* RIGHT SIDE — JOURNEY CONTENT */}
        <div className="relative z-10">
          <RightSide
            blogSections={blogSections}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            contentIndex={contentIndex}
            setContentIndex={setContentIndex}
            progress={progress}
            journeyPhase={journeyPhase}
            isCompleted={isCompleted}
            sessionid={sessionid}
            questions={sessionData}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}
