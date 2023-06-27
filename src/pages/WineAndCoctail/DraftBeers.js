import React from "react";
const DraftBeers = () => {
  return (
    <div className="">
      <div
        className="h-[550px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full"
        style={{ backgroundImage: `url("../HeinekeN.png")` }}
      >
        <div className=" flex justify-center h-full items-center">
          {/* <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
            Wine & Cocktail List
          </h1> */}
        </div>
      </div>

      <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
            Draft Beers
          </p>

          <div className="xl:w-[960px] mx-auto">
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">IPA Lagunitas</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Fosters</p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 3 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Guest Ale</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Heineken</p>
                <p className="MDPText  py-4 text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>

            {/* 4 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Strongbow</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Kronenburg
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>

            {/* 5 */}
            <div className="">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">Guinness</p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
            {/* 2 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Carling
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftBeers;
