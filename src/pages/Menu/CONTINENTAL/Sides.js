import React from 'react'
import style from '../../../styles/Menu.module.css'

const Sides = () => {
  return (
    <> <div className={`${style.sides} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      CONTINENTAL MENU
      </h1>
    </div>
    </div>
      

      
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
      Sides
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Hand cut chips and chips
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
        
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Ginger beer battered onion rings
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Seasonal vegetable
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Seasonal house salad
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
         
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Sweet potato fries
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
      
         
            </div> 
            
            {/* 6 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Lightly spiced chicken skewers           </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
         
            </div> 
            {/* 7 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled halloumi and sun-blushed tomato bites
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
       
         
        </div> 

      
       
      </div>
    </div>
  </div>
      </>
  )
}

export default Sides