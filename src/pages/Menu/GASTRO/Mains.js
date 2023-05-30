import React from 'react'
import style from '../../../styles/Menu.module.css'

const Mains = () => {
  return (
    <><div className={`${style.gmeans} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      GASTRO MENU
      </h1>
    </div>
    </div>
    
    <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
    <div className="">
      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
      Mains
      </p>

      <div className="xl:w-[960px] mx-auto">
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Spicy Chicken wings
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served with smoky/chilli mayo and French fries (GF) Homemade pie of the Day. Our freshly made amazing pies served with creamy mash potatoes, steamed veg and homemade gravy.
          </p>
        </div>
        {/* 2 */}
        <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Traditional Fish and Chips
            </p>
            <p className="MDPText  py-4 text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
          <p className="MDSPText dark:text-[#ffffffb3] text-black">
          Served with tartar sauce and buttery mushy peas
          </p>
        </div>
        {/* 3 */}
        <div className="">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Beef Burger
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
         
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          SHomemade beef patty served in grilled brioche bun with fresh leaf, tomatoes ,mayo, ketchup and French fries PB Beef Burger
          </p>
        </div>

        {/* 4 */}
       <div className="py-20">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Our homemade beef patty topped with melted Cheddar
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        
          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
          Served in grilled brioche bun, crispy bacon, fresh leaf, tomatoes, mayo, ketchup and french fries
          </p>
            </div> 
            {/* 5 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Chicken burger
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Marinated chicken breast served in brioche bun, Fresh leaf, tomatoes, mayo, ketchup and french fries
          </p>
         
            </div> 
            
            {/* 6 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            PB Chicken Burger
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Marinated chicken breast topped with melted cheddar served in brioche bun, bacon, fresh leaf, tomatoes mayo, ketchup and french fries
          </p>
         
            </div> 
            {/* 7 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Veggie Burger
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served with hand cut Chips
          </p>
         
            </div> 
            {/* 8 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Curry (opt) Chicken, Beef, Vegetable
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Served with steam rice, poppadom and naan bread
          </p>
         
            </div> 
            {/* 0 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Sausage and Mash
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Traditional sausages with creamy mash potatoes, homemade onion gravy. (gf)
          </p>
         
            </div> 
            {/* 10 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Piri-piri Chicken
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Marinated bone-in chicken breast, served with fresh leaf salad and french fries.(gf)
          </p>
         
            </div> 
            {/* 11 */}
            <div className="py-10">
          <div className="flex justify-between px-2">
            <p className="MDPText dark:text-white text-black ">
            Jacket Potato
            </p>
            <p className="MDPText text-[#B5986D]"></p>
          </div>
          <img
            className="py-2 w-full"
            src="../../MDLine.png"
            alt=""
          />
        <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
        Topped witch crunchy onion and cheese served with sour cream. (VG) (GF
          </p>
         
        </div> 

      
       
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Mains