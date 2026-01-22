import React from "react";

export default function LineSeparator({
  color = "bg-base",
  thickness = "h-0.5",
  length = "w-full",
}) {
  return (
    <div
      className={`
        ${length}
        ${thickness}
        ${color}
        rounded-full
      `}
    />
  );
}
