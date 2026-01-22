import { useEffect, useRef } from "react";
import { videoPosToSeconds } from "../hooks/video";

export default function SessionVideoPlayer({
  videoUrl,
  currentQuestion,
  nextQuestion,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !currentQuestion) return;

    const video = videoRef.current;

    const start = videoPosToSeconds(currentQuestion.video_pos);
    const end = nextQuestion
      ? videoPosToSeconds(nextQuestion.video_pos)
      : null;

    video.currentTime = start;
    video.play().catch(() => {});

    const onTimeUpdate = () => {
      if (end && video.currentTime >= end) {
        video.pause();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [currentQuestion, nextQuestion]);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      controls
      preload="auto"
      playsInline
      className="w-full rounded-xl bg-black mb-6"
    />
  );
}
