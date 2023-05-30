import React from 'react'
import style from '../../../styles/Menu.module.css'

const Coffee = () => {
  return (
    <><div className={`${style.coffe} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      CONTINENTAL MENU
      </h1>
    </div>
    </div>
      

      
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
      Coffee & Tea
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Tea
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
            Espresso
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
            Capuccino
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
            Latte
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
            Mocca
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
            Americano          </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Add vanilla or coconut Favours as extra          </p>
         
            </div> 
            {/* 7 */}
           

      
       
      </div>
    </div>
  </div>
      </>
  )
}

export default Coffee