import React from "react";

const OtpInputBox = ({ index,length, inputRefs,value,onChangeValue }) => {
  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onChangeValue(value,index)
    if (value && index < length - 1) {
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
        type="text"
        value={value}
        inputMode="numeric"
        maxLength="1"
        autoFocus={index === 0}
        ref={(el) => (inputRefs.current[index] = el)}
        //className="font-inter rounded-2xl bg-blue-500 w-[50px] h-[60px] text-white font-bold text-center outline-none text-2xl"
        className="font-inter rounded-2xl bg-blue-500 w-[50px] h-[60px] 
           text-white font-bold text-center outline-none text-2xl
           focus:ring-2 focus:ring-cyan-300"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
};

export default OtpInputBox;
