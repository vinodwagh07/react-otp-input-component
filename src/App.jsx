import Submit from "./components/Submit";
import "./App.css";
import OtpInput from "./components/OtpInput";

function App() {
  return (
    <>
      <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">
        <div className="text-white font-bold text-2xl font-poppins">
          Check Email For A Code
        </div>
        <div className="text-slate-500 mb-3 mt-8 font-poppins">
          Please enter the verification code sent to your email id
          mail@gmail.com
        </div>
        <OtpInput />
        <Submit />
      </div>
    </>
  );
}

export default App;
