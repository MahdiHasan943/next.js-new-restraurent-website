import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="  text-white pb-4 pt-8 px-[60px]">
      <div className=" xl:w-[60%] mx-auto">
        <div className="flex justify-end items-center"></div>
        <div className="flex justify-end items-center py-6  gap-4">
          <div className="bg-[#1DA1F2] rounded-md p-4">
            {" "}
            <BsTwitter></BsTwitter>
          </div>

          <div className="bg-[#1877F2] rounded-md p-4">
            <BsFacebook></BsFacebook>
          </div>

          <div className="bg-[#F00073] rounded-md p-4">
            {" "}
            <BsInstagram></BsInstagram>
          </div>
          <div className="sm:ml-[20px] xl:mr-[-150px]">
            <img className="py-4" src="./Bt.png" alt="" />
            <img src="./Sky.png" alt="" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#B5986D]"></div>
        <div className="flex items-center gap-6 mt-[20px] justify-center">
          <div className=" sm:pr-[50px]">
            <a
              className="dark:text-white font-semibold leading-3 text-3xl text-black"
              href=""
            >
              Logo
            </a>
          </div>

          <p className="  dark:text-white text-black">Home</p>
          <p className="dark:text-white text-black">Menu</p>
          <p className="dark:text-white hidden md:block text-black">Events</p>
          <p className="dark:text-white hidden md:block text-black">
            {" "}
            Wine & Coctailbar
          </p>

          <button className="text-white text-[15px] sm:text-[22px] sm:ml-[30px]  bg-[#B5986D] border-white border-[1.6px] px-8 py-4 rounded-2xl font-bold bookNow">
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Footer;
