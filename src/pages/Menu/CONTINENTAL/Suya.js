import React from 'react'
import style from '../../../styles/Menu.module.css'

const Suya = () => {
  return (
    <><div className={`${style.saya} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      CONTINENTAL MENU
      </h1>
    </div>
    </div>
    

        
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
     Suya
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Small Beef Suya
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with onion, tomato and spiced suya pepper.
          </p>
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Large Beef Suya
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          <p className="MDSPText dark:text-[#ffffffb3] text-black">
          Served with onion, tomato and spiced suya pepper.
          </p>
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Chicken Suya
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with onion, tomato and spiced suya pepper
          </p>
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Beef Jolof Rice 
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with plantain, assorted meat and salad
          </p>
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Chicken Jolof Rice 
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served with Rice and Chicken (Students)
          </p>
         
            </div> 
            
           
           

      
       
      </div>
    </div>
  </div>
      </>
  )
}

export default Suya