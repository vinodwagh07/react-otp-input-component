import React, { useRef } from "react";
import OtpInputBox from "./OtpInputBox";

const OtpInput = () => {
  const inputRefs = useRef([]);
  return (
    <div className="flex gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <OtpInputBox key={index} index={index} inputRefs={inputRefs}/>
      ))}
    </div>
  );
};

export default OtpInput;
