import React from "react";

import style from "../../../styles/Menu.module.css";
import Link from "next/link";
import Reservation from "@/Components/Reservation";

const Menu = () => {
  return (
    <>
      <div className={`${style.MmenuBg} dark:opacity-[0.9] h-[550px]`}>
        <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
            CONTINENTAL MENU
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-[85%] 2xl:w-[70%] py-20 mx-auto">
        <h2 className="text-[#B5986D] px-8  py-16 font-bold sm:pl-[40px] 2xl:pl-[100px] text-[50px] leading-[80px] ">
          Menu
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 mx-auto ">
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CL.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Lunch
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Launch"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CB.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Breakfast
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Breakfast"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CG.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Grilled Fish
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/GrilledFish"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CM.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Grilled Meat
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/GrilledMeat"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 5 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CD.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Dessert
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Dessert"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 6 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CF.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Coffee & Tea
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Coffee"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 7 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CS.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Suya
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Suya"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
          {/* 8 */}
          <div className="px-10 ">
            <div className="px-8 py-12  sm:w-[450px] mx-auto    sm:py-20   sm:px-2 border border-[#B5986D]">
              <img
                className="w-full mx-auto     h-[460px]  sm:h-[514px] "
                src="../CSi.jpg"
                alt=""
              />
            </div>
            <p className="text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]">
              Sides
            </p>
            <div className="text-center">
              <Link
                href="/Menu/CONTINENTAL/Sides"
                className="dark:text-white py-4 px-8 text-black text-[20px] font-semibold"
              >
                View menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* reservation */}
      <Reservation></Reservation>
    </>
  );
};

export default Menu;
