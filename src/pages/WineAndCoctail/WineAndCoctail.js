import React, { useRef, useState } from "react";
import style from "../../styles/WineAndCoctail.module.css";
import Reservation from "@/Components/Reservation";
import WineSlide from "@/Components/imageSlide/WineSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";
const WineAndCoctail = () => {



  return (
    <>
      <div className={`${style.MwineBg} dark:opacity-[0.8] h-[550px]`}>
        <div className=" flex justify-center h-full  items-center">
          <h1 className="text-white text-center text-[45px]  sm:text-[90px] sm:leading-[100px]">
            Wine & Cocktail Bar
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-[85%] 2xl:w-[70%] py-20 mx-auto">
        <h2 className="text-[#B5986D] px-8  py-16 font-bold sm:pl-[40px] 2xl:pl-[100px] text-[50px] leading-[80px] ">
          Wine & Cocktail bar
        </h2>
        <div className="w-full md:flex gap-20 md:w-[85%] mx-auto ">
          <div className="w-full md:w-[50%]">
            <img
              className="w-full ml-4 md:ml-0   md:w-[450px] h-[600px]"
              src="../wineCoctailBar.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-[50%] flex px-6 py-6 md:py-0 justify-center  mx-auto items-center">
            <p className=" dark:text-white mx-auto  text-[32px] text-black">
              « Wine, when it is truly <br className="hidden md:block" /> wine,
              reveals the light <br className="hidden md:block" /> of matter to
              arouse <br className="hidden md:block" /> that of man. It comes{" "}
              <br className="hidden md:block" /> reveal our light part{" "}
              <br className="hidden md:block" /> and that is the real{" "}
              <br className="hidden md:block" /> drunkenness. »
            </p>
          </div>


          
        </div>
      </div>

      <div className=" py-16">

        <h3 className="text-center  text-[32px] leading-[40px] dark:text-white text-black">Choose your drink</h3>
        <img className="mx-auto my-20" src="../underline.png" alt="" />




        <div className="w-full  shadow-md">
        <WineSlide></WineSlide>

          
       </div>

      </div>

      {/* reservation */}
      <Reservation></Reservation>
    </>
  );
};

export default WineAndCoctail;
