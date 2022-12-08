import React from "react";
import { useSelector } from "react-redux";
import { selectOTP } from "./store/StoreSlice/AuthSlice";

const App = () => {
  // const otp = useSelector(selectOTP);
  // console.log(otp);

  return (
    <div className="flex items-center justify-center ">
      <p>Hello</p>
    </div>
  );
};

export default App;
