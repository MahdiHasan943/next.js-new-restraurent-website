import React from "react";
const Cocktails = () => {
  return (
    <div className="">
      <div
        className="h-[750px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full"
        style={{ backgroundImage: `url("../spirit.jpg")` }}
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
            Cocktails
          </p>

          <div className="xl:w-[960px] mx-auto">
           
           
           
         
            {/* 5 */}
            {/* <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                Sex in the Garden
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Vodka, Archaers, Peach, Orange Juice, Cranberry Juice
              </p>
            </div> */}
           
           
            {/* 67 */}
            <div className="py-20">
              <div className="flex justify-between px-2">
                <p className="MDPText dark:text-white text-black ">
                  Classic Mojito
                </p>
                <p className="MDPText text-[#B5986D]"></p>
              </div>
              <img className="py-2 w-full" src="../MDLine.png" alt="" />

              <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                Mint, fresh lime, Bacardi, soda water
              </p>
            </div>

         

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
