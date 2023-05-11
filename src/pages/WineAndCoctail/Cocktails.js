import React from 'react'
import Reservation from '@/Components/Reservation'

const Cocktails = () => {
  return (
    <div className=''>

    <div className='h-[550px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full' style={{ backgroundImage: `url("../wineList.png")` }} >
    <div className=" flex justify-center h-full items-center">
<h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>Wine & Cocktail List</h1>
</div>
     </div>

     <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
                    <div className="">
                      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
                      Cocktails
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Passion Blend
                            </p>
                            <p className="MDPText text-[#B5986D]">£44</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                          Lime, fresh passion, vodka, Wray Nephew, bourbon
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Margarita
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]">£59</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          <p className="MDSPText dark:text-[#ffffffb3] text-black">
                          Lime juice, tequila, triple sec, mixer
                          </p>
                        </div>
                        {/* 3 */}
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Maitai
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Lime, rum, pineapple juice, orange juice, amaretto
                          </p>
                        </div>

                        {/* 4 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Manhattan
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Whisky, brandy, angostura bitter on top
                          </p>
            </div>
            
            {/* 5 */}
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Sex on the Beach
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Vodka, Archaers, Peach, Orange Juice, Cranberry Juice
                          </p>
            </div>
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Espresso Martini
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Vodka, Espresso, Kahlua
                          </p>
            </div>
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Cosmopolitan
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Lime juice, vodka, triple sec, cranberry juice
                          </p>
            </div>
            
            {/* 67 */}
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Classic Mojito
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Mint, fresh lime, Bacardi, soda water
                          </p>
                        </div>

                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Woo-Woo
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Vodka, Archers, Cranberry Juice, Slice of Lime
                          </p>
            </div>
            



            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Honey Bee
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          JD Honey, Vodka, Lemonade
                          </p>
            </div>
            


            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Classic Pimms
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Slice Orange, cucumber, slice lime, mint, Pimm's, lemonade
                          </p>
                        </div>
                      
            



                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Passion Cocoanut
                            </p>
                            <p className="MDPText text-[#B5986D]">£44</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Malibu, vodka, blue Curacao, milk
                          </p>
            </div>
            
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Blue Lagoon
                            </p>
                            <p className="MDPText text-[#B5986D]">£44</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Blue Curacao, archers, lime, top with soda water
                          </p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

    
         

</div>
  )
}

export default Cocktails