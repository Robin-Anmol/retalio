import React, { useState, useEffect } from "react";
import Search from "./Search";
import Image from "../assets/img/house-banner.png";
import Typewriter from "typewriter-effect";
const Banner = () => {
  const messages = [
    "Corporate Retreat",
    "Film & TV Shoot",
    "Personal Celebration",
  ];

  const messages2 = [
    "Upstart your Next",
    "Kickstart your Next",
    "Jumpstart your next",
  ];

  const [index, setIndex] = useState(0);
  //   const image = images[index];
  const message = messages[index];

  useEffect(() => {
    setTimeout(() => {
      setIndex((prev) => (prev < 2 ? prev + 1 : 0));
    }, 4000);
  }, [index]);
  return (
    <section className="h-full max-h-[640px] my-12 xl:mb-24">
      <div className="flex flex-col  lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <div className="w-full flex flex-col   ">
            <span className=" px-4 lg:px-0 lg:w-[75%] text-4xl lg:text-5xl text-start lg:text-start  font-bold leading-none  mb-6">
              {messages2[index]}
            </span>
            <div className="  px-4 lg:px-0 lg:w-[75%] text-3xl lg:text-4xl text-start lg:text-start  font-semibold leading-none  mb-6 text-primary-500">
              <Typewriter
                options={{
                  strings: message,
                  autoStart: true,
                  delay: 100,
                }}
              />
            </div>
            <span className=" px-4 lg:px-0 lg:w-[75%] text-4xl lg:text-5xl text-start lg:text-start  font-semibold leading-none  mb-6">
              with Retalio
            </span>
          </div>
          <p className="max-w-[480px] text-xl text-start px-4 lg:px-0 lg:text-2xl mb-8">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
        </div>
        <div className="  w-[80%] mx-auto lg:w-auto lg:items-center mb-9 lg:m-auto  h-[90%] lg:flex justify-center ">
          <img src={Image} alt="" className="self-center" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
