import React from "react";

const OtpInputBox = ({index}) => {
  return (
    <div>
      <input 
      type="text"
      inputMode="numeric" 
      maxLength="1" 
      autoFocus={index===0}
      className="font-inter rounded-2xl bg-blue-500 w-[50px] h-[60px] text-white font-bold text-center outline-none text-2xl"
      />
    </div>
  );
};

export default OtpInputBox;
