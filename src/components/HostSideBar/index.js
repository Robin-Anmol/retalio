import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { AiOutlineBank, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineFeaturedPlayList,
  MdOutlinePhotoSizeSelectActual,
  MdOutlineDoNotTouch,
  MdOutlinePriceChange,
  MdOutlineRateReview,
  MdOutlinePriceCheck,
  MdOutlineAccessTime,
  MdOutlineLocationCity,
} from "react-icons/md";
import { GrContactInfo, GrNotes } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { BsFileEarmarkRuled } from "react-icons/bs";
const index = () => {
  const SidebarLinks = [
    {
      text: "Details & Description",
      link: "/becomeahost/details",
      icon: <TbListDetails />,
    },
    {
      text: "Location",
      link: "/becomeahost/location",
      icon: <GoLocation />,
    },
    {
      text: "Amenities",
      link: "/becomeahost/amenities",
      icon: <AiOutlineHome />,
    },
    {
      text: "Photos",
      link: "/becomeahost/photos",
      icon: <MdOutlinePhotoSizeSelectActual />,
    },
    {
      text: "Features",
      link: "/becomeahost/feature",
      icon: <MdOutlineFeaturedPlayList />,
    },
    {
      text: "Do's & Don'ts",
      link: "/becomeahost/do",
      icon: <MdOutlineDoNotTouch />,
    },
    {
      text: "Pricing",
      link: "/becomeahost/pricing",
      icon: <MdOutlinePriceChange />,
    },
    {
      text: "Rules of the Host",
      link: "/becomeahost/rules",
      icon: <BsFileEarmarkRuled />,
    },
    {
      text: "Timings",
      link: "/becomeahost/timing",
      icon: <MdOutlineAccessTime />,
    },
    {
      text: "Contact Details",
      link: "/becomeahost/contact",
      icon: <GrContactInfo />,
    },
    {
      text: "GST Details",
      link: "/becomeahost/gst",
      icon: <MdOutlinePriceCheck />,
    },
    {
      text: "Bank Details",
      link: "/becomeahost/bank",
      icon: <AiOutlineBank />,
    },
    {
      text: "Review Application",
      link: "/becomeahost/review",
      icon: <MdOutlineRateReview />,
    },
    {
      text: "Terms & Conditions",
      link: "/becomeahost/termsandcondition",
      icon: <GrNotes />,
    },
  ];

  return (
    <div className="w-full flex flex-col  ">
      <div
        key={index}
        className={` w-full my-1  items-center  justify-center transition ease-in-out duration-200 flex px-3 py-3 gap-3.5 rounded-md shadow-lg mb-5 text-white  bg-black `}
      >
        <div className=" text-2xl  font-medium">
          <MdOutlineLocationCity />
        </div>
        <div className=" text-xl font-medium capitalize ">List your Space</div>
      </div>
      {SidebarLinks?.map((item, index) => {
        return (
          <NavLink
            to={`${item.link}`}
            key={index}
            className={({ isActive }) =>
              isActive
                ? `justify-start w-full my-1 items-center transition ease-in-out duration-200 flex px-3 py-3 gap-3.5 rounded-md shadow-lg text-white  bg-primary-500 `
                : ` hover:bg-slate-200  rounded-md    my-1 flex w-full px-3 py-3 transition ease-in-out justify-start duration-200   gap-3.5 items-center`
            }
          >
            <div className=" text-2xl font-medium">{item.icon}</div>
            <div className=" text-lg  font-medium">{item.text}</div>
            <div className="  lg:hidden   text-md font-medium">
              <HiOutlineChevronRight />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default index;
