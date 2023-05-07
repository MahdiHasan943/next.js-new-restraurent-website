import React from 'react'
import Reservation from '@/Components/Reservation'

const Wines = () => {
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
                      Wines
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                              Sable fish with Saffron Ristto
                            </p>
                            <p className="MDPText text-[#B5986D]">£44</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          <p className="MDPText dark:text-white text-black ">
                            {" "}
                            Ristto
                          </p>
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                            Baked with basil, saffron, lemon juice, white wine,
                            onion, garlic and tomato, served with white
                            asparagus
                          </p>
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                              Roasted Rack of Lamb
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]">£59</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
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
                            Cornish Game Hen
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Rubbed with rosemary, lemon and served with porcini mushroom risotto
                          </p>
                        </div>

                        {/* 4 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Veal Porterhouse Chop
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Milk fed center cut from the loin, rubbed with rosemary, lemon juicce, extra virgin olive oil
                          </p>
                        </div>

                      
                       
                      </div>
                    </div>
                  </div>

  

    <Reservation></Reservation>
    
         

</div>
  )
}

export default Wines