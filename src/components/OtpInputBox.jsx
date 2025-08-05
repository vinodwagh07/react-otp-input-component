import React from "react";

const OtpInputBox = ({ index, inputRefs }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div>
      <input
        aria-label={`Digit ${index + 1} of 6`}
        type="text"
        inputMode="numeric"
        maxLength="1"
        autoFocus={index === 0}
        ref={(el) => (inputRefs.current[index] = el)}
        className="font-inter rounded-2xl bg-blue-500 w-[50px] h-[60px] text-white font-bold text-center outline-none text-2xl"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
};

export default OtpInputBox;
