import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import ProfileLoadingScreen from "../components/ProfileLoadingScreen";

const aiProfile = {
  profileid: "ai-advisor",
  name: "AI Career Advisor",
  title: "AI Mentor",
  des: "Instant guidance · Personalized insights",
  pl: "Available 24/7",
  from: Date.now() / 1000,
  to: Date.now() / 1000,
  thumb: "ai.jpg",
  isAI: true,
};

export default function Advisors() {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "Career";

  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);

  /* ---------------- API CALL ---------------- */
  useEffect(() => {
    async function fetchSessions() {
      try {
        setLoading(true);

        const res = await axios.post(
          "/n/api/SearchByName",   // 👈 YOUR BACKEND API
          { name: searchTerm },
          { headers: { "Content-Type": "application/json" } }
        );

        if (res.data.success === 1) {
          setSessions(res.data.data);
        } else {
          setSessions([]);
        }
      } catch (err) {
        console.error("API FAILED ❌", err);
        setSessions([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSessions();
  }, [searchTerm]);

  /* ---------------- UI ---------------- */
  return (
    <div className="max-w-4xl bg-white/70 rounded-3xl p-10 text-center">
      {loading ? (
        <>
          <h3 className="text-xl font-extrabold">
            Searching experts for{" "}
            <span className="text-brand uppercase">{searchTerm}...</span>
          </h3>
          <ProfileLoadingScreen count={3} />
        </>
      ) : (
        <>
          <h3 className="text-xl font-extrabold mb-4">
            Learn About{" "}
            <span className="uppercase text-brand">{searchTerm}</span> From:
          </h3>

          <div className="flex flex-col gap-4 mt-6">
            {/* AI CARD */}
            <ProfileCard profile={aiProfile} />

            {/* API RESULTS */}
            {sessions.length > 0 ? (
              sessions.map((item) => (
                <ProfileCard
                  key={item.sessionid}
                  profile={{
                    profilename:item.session_name,
                    profileid: item.sessionid,
                    name: item.topic,
                    title: item.designation,
                    des: item.topic,
                    pl: item.place,
                    from: item.from_ts,
                    to: item.to_ts,
                    thumb: item.thumbfile,
                    isAI: false,
                  }}
                />
              ))
            ) : (
              <p className="text-sm text-gray-500 mt-6">
                No careers found for "{searchTerm}"
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
