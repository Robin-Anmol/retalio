import React from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image404Page from "../../assets/404page.svg";
import { CustomButton } from "../../components";

const index = () => {
  return (
    <div>
      <section>
        <div class="bg-gray-100 text-white">
          <div class="flex h-screen">
            <div class="m-auto text-center">
              <div className="">
                <img src={Image404Page} alt="dd" />
              </div>
              <p class=" md:text-base text-black text-xl font-md  p-2 mb-4">
                The stuff you were looking for doesn't exist
              </p>
              <Link to="/">
                <CustomButton
                  StartIcon={<BsArrowLeft />}
                  className={`bg-secondary-500 hover:bg-secondary-600 `}
                  BtnText="Go back to home"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
