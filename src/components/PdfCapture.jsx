import React, { forwardRef } from "react";
const PdfCapture = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

export default PdfCapture;
