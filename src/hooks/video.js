// utils/video.js
export function videoPosToSeconds(pos) {
  if (!pos && pos !== 0) return 0;

  const [min, sec] = pos.toString().split(".");
  return Number(min) * 60 + Number(sec || 0);
}
