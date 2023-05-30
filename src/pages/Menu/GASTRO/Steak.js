import React from "react";
import style from "../../../styles/Menu.module.css";
const Steak = () => {
  return (
    <>
      <div className={`${style.gsteak} h-[550px]`}>
        <div className=" flex justify-center h-full items-center">
          <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
            GASTRO MENU
          </h1>
        </div>
      </div>

      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
            Steak
          </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Sirloin Steak
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Served with chunky chips, peppercorn sauce and fresh leaf salad
                (GF) suitable for halal
              </p>
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Passion blend steak (Pork tibon/Beef)
                </p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../../MDLine.png" alt="" />
              <p className="MDSPText dark:text-[#ffffffb3] text-black">
                Served with ba potatoes, peppercorn sauce, and fresh leaf <br />{" "}
                salad. Choose from peppercorn and mushroom sauce or <br />{" "}
                simply garlic butter topping
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steak;
