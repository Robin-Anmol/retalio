import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components";

const Home = () => {
  return (
    <div>
      {/* testing in mobile  */}
      <Link to={"/login"}>
        <CustomButton
          BtnText="Move to Login"
          className={" bg-black textt-white hover:bg-white hover:text-black"}
        />
      </Link>
    </div>
  );
};

export default Home;
