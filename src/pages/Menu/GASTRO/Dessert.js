import React from 'react'
import style from '../../../styles/Menu.module.css'

const Dessert = () => {
  return (
   <>  <div className={`${style.gdessert} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      GASTRO MENU
      </h1>
    </div>
    </div>
      

      
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
       Dessert
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Homemade Crumble
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Chef fresh seasonal fruits crunchy crumble, serve with warm custard or ice cream
          </p>
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Chef Flavour Cheesecake of the Day
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          <p className="MDSPText dark:text-[#ffffffb3] text-black">
          Selection of ice creams with homemade shortbread cookies
          </p>
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Baileys Bread and Butter Pudding
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with vanilla ice cream
          </p>
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Sticky Toffee Pudding
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Homemade sticky toffee with toffee sauce and vanilla ice creams
          </p>
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Apple Tart
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Amazing Apple tart served with cinnamon ice creams and cream
          </p>
         
        </div> 

      
       
      </div>
    </div>
  </div>
    </> 
  )
}

export default Dessert