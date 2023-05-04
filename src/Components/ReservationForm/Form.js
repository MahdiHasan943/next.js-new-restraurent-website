import React from 'react'
import { Popover } from "@headlessui/react";
import {BsXLg} from "react-icons/bs";
const Form = () => {
  return (
     
    <Popover.Group className=" relative">
             <Popover>
             <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

              <button className="text-white hover:bg-[#B5986D] mt-[90px]  border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
            Book Now
          
          
                  </button>
              </Popover.Button>
              <Popover.Panel className="absolute rounded-lg shadow-lg form bg-black h-[90vh]  top-[-300%] sm:top-[-240%]  w-[90vw] sm:w-[80vw]  z-[10000] ">
                  <div className="relative">
                      
                  <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                  <BsXLg className="absolute right-10 top-10 text-white text-end text-[25px]"></BsXLg>
                      </Popover.Button>
                      <form className="w-full ">
                          <h2 className='text-white font-bold  text-center text-[40px] leading-[50px] sm:text-[66px] sm:leading-[86px]'>Make a Reservation</h2>
                          

                          <div className="sm:w-[80%] mx-auto ">
                          <p className='text-white  text-center text-[18px] leading-[30px] '>Get in touch with restaurant</p>

                              <div className="flex px-4 py-10  items-center gap-20">
                                  <input type="text" className='w-full py-6 px-5 border-[1px] border-white bg-black' placeholder='First Name' name="" id="" />
                                  <input type="text" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Last Name' id="" />
  
                              </div>
                              <div className="px-4">
                              <input type="email" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Email' id="" />
                              <input type="tel" className='w-full my-10 py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Phone Number' id="" />

                              </div>
                              <div className="flex px-4   items-center gap-20">
                                  <input type="date" className='w-full py-6 px-5 border-[1px] border-white bg-black' placeholder='First Name' name="" id="" />
                                  <input type="time" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Last Name' id="" />
  
                              </div>
                              <div className="px-4 text-center">
                              <input type="number" className='w-full my-10 py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Number of Persons' id="" />
                              <button className="text-white hover:bg-[#B5986D] border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
            Book Now
          
          
                  </button>
                              </div>


                          </div>
                      </form>

                 

                  </div>
                  
              </Popover.Panel>
          </Popover>  
         
     
          </Popover.Group>
  )
}

export default Form