import React from 'react'
import style from '../../../styles/Menu.module.css'

const GrilledMeat = () => {
  return (
  <> <div className={`${style.means} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      CONTINENTAL MENU
      </h1>
    </div>
    </div>
    
    
    
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
      Grilled Meat
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Steak
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with  bbq sauce, salad, and homemade hand cut chips
          </p>
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Peri Peri Chicken
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          <p className="MDSPText dark:text-[#ffffffb3] text-black">
          Served with peri-peri sauce, homemade hand cut Chips or Salad
          </p>
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Pork Ribs
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with bbq sauce, and Salad
          </p>
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Lamb Ribs
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with bbq sauce, and Salad
          </p>
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Homemade Beef Burger
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served in toasted brioche burn with lettuce, mayonnaise, tomato, onion and side hand cut chips
          </p>
         
            </div> 
            
            {/* 6 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Grilled Chicken Burger            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served in burn with lettuce, mayonnaise, tomato, onion and side hand cut hand cut chips
          </p>
         
            </div> 
            {/* 7 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Mixed Grill
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served with hand cut Chips          </p>
         
        </div> 

      
       
      </div>
    </div>
  </div>
    </>
  )
}

export default GrilledMeat