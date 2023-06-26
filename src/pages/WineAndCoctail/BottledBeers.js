import React from 'react'
import Reservation from '@/Components/Reservation'

const BottledBeers = () => {
  return (
    <div className=''>

      <div className='h-[600px]  lg:h-[750px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full'
        style={{ backgroundImage: `url("../BB.jpg")` }} >
    <div className=" flex justify-center h-full items-center">
{/* <h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>Wine & Cocktail List</h1> */}
</div>
     </div>
     <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
                    <div className="">
                      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
                      Bottled Beers
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Birra Moretti
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Desperados
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                        </div>
                        {/* 3 */}
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Newcastle Brown
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          
            </div>
            {/* <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Zywiec
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                        </div> */}

                        {/* 4 */}
                        {/* <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Guinness 330ml SOL
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          
            </div> */}
            <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Red Stripe
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                          
                        </div>
            
            {/* 5 */}
            <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Lagunitas IPA
                            </p>
                            <p className="MDPText text-[#B5986D]"></p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          
                          
                        </div>                                   
                       
                      </div>
                    </div>
      </div>
   
         

</div>
  )
}

export default BottledBeers