import React from "react";
import OtpInputBox from "./OtpInputBox";

const OtpInput = () => {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <OtpInputBox key={index} index={index}/>
      ))}
    </div>
  );
};

export default OtpInput;
