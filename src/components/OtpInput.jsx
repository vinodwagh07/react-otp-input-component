import React, { useRef, useState } from "react";
import OtpInputBox from "./OtpInputBox";

const OtpInput = ({ length }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(length).fill(""));
  const isOtpComplete = otp.every((digit) => digit !== "");
  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };

  const handleChangeValue = (val, index) => {
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
  };
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex gap-4">
      {Array.from({ length: length }).map((_, index) => (
        <OtpInputBox
          key={index}
          index={index}
          inputRefs={inputRefs}
          length={length}
          value={otp[index]}
          onChangeValue={handleChangeValue}
        />
      ))}
    </div>
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isOtpComplete}
        className={`w-[320px] h-[50px] text-lg mt-4 px-6 py-2 rounded-lg font-bold ${
          isOtpComplete
            ? "bg-cyan-500 text-white cursor-pointer"
            : "bg-blue-500 text-gray-200 cursor-not-allowed"
        }`}
      >
        Verify
      </button>
    </div>
  );
};

export default OtpInput;
