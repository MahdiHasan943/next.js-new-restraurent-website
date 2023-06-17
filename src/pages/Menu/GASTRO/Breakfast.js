import React from "react";
import style from "../../../styles/Menu.module.css";

const Breakfast = () => {
  return (
    <>
      <div className={`${style.gBreak} h-[550px]`}>
        <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
            GASTRO MENU
          </h1>
        </div>
      </div>

      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
          Vegetarian Breakfast
          </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  English Breakfast
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Two free-range eggs, pork sausages, bacon, beans, mushroom,
                grill tomato, toast + any choice of hot drinks
              </p>
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Veggie Breakfast
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
                Two free-range eggs, beans, hash brown, mushroom, grill tomato
                and toast drink-f any choice of hot drink
              </p>
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Scrambled Egg on Toast
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Scrambled egg, toast - (Opt) smoked salmon or bacon for £1.00
              </p>
            </div>

            {/* 4 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Sandwiched (opt)
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Tuna, blt, cheese 8c tomato, egg
              </p>
            </div>
            {/* 5 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Toast with Jam/Butter
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
