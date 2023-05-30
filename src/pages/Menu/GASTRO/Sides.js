import React from 'react'
import style from '../../../styles/Menu.module.css'

const Sides = () => {
  return (
   <> <div className={`${style.gside} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      GASTRO MENU
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
            Chips and Dips
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          French fries with choice of dips (VG) (G
          </p>
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Sweet Potato Fries
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          <p className="MDSPText dark:text-[#ffffffb3] text-black">
          Rosemary, garlic, Dijon mustard, herbs, pistachios
          </p>
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Hand cut Chips
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Rubbed with rosemary, lemon and served with 
          </p>
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Caesar Salad
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Milk fed center cut from the loin, rubbed with 
          </p>
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Baked Camembert
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Milk fed center cut from the loin, rubbed with 
          </p>
         
            </div> 
            
            {/* 6 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Garlic Bread Sticks
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Milk fed center cut from the loin, rubbed with 
          </p>
         
            </div> 
            {/* 7 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Onion Rings
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Our homemade onion rings served with choice of dips. (vg)
          </p>
         
        </div> 

      
       
      </div>
    </div>
  </div>
    
    
    </>
  )
}

export default Sides