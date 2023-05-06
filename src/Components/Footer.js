import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import {BsXLg} from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <Popover.Group className=" relative">
          <Popover>

    <div className="  text-white pb-4 pt-8  px-4 sm:px-[60px]">
      <div className=" xl:w-[60%] mx-auto">
        <div className="flex justify-end items-center"></div>
        <div className="flex justify-end items-center py-6  gap-4">
          <div className="bg-[#1DA1F2] rounded-md p-4">
            {" "}
            <BsTwitter></BsTwitter>
          </div>

          <div className="bg-[#1877F2] rounded-md p-4">
            <BsFacebook></BsFacebook>
          </div>

          <div className="bg-[#F00073] rounded-md p-4">
            {" "}
            <BsInstagram></BsInstagram>
          </div>
          <div className="sm:ml-[20px] xl:mr-[-150px]">
            <img className="py-4" src="./Bt.png" alt="" />
            <img src="./Sky.png" alt="" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#B5986D]"></div>
        <div className="flex items-center gap-6 mt-[20px] justify-center">
          <div className=" sm:pr-[50px]">
            <a
              className="dark:text-white font-semibold leading-3 text-3xl text-black"
              href=""
            >
              Logo
            </a>
          </div>

          <p className="  dark:text-white text-black"><Link href={"/"}> Home</Link></p>
          <p className="dark:text-white text-black"> <Link  href={"/Menu"}> Menu</Link></p>
          <p className="dark:text-white hidden md:block text-black"><Link href={"/#event"}>Events </Link></p>
          <p className="dark:text-white hidden md:block text-black">
            
           <Link  href={"/WineAndCoctail/WineAndCoctail"}> Wine & Coctailbar</Link>
          </p>
             <Popover.Button className="text-white bg-[#B5986D]   border-white border-[1.6px] px-10 sm:px-14 py-4 rounded-2xl font-bold bookNow focus:border-none btn-border-none  outline-none focus:outline-none border-none">
             Book Now
              
              </Popover.Button>
              <Popover.Panel className=" bg-black absolute py-10  top-[-200%] z-[10000] ">
                  <div className="relative">
                      
                  <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                  <BsXLg className="absolute right-10 top-10 text-white text-end text-[25px]"></BsXLg>
                      </Popover.Button>
                      <form className="w-full ">
                          <h2 className='text-white font-bold  text-center text-[40px] leading-[50px]'>Make a Reservation</h2>
                          

                          <div className="sm:w-[80%] mx-auto ">
                          <p className='text-white  text-center text-[18px] leading-[30px] '>Get in touch with restaurant</p>

                              <div className="flex px-6 py-10  items-center gap-20">
                                  <input type="text" className='w-full py-6 px-5 border-[1px] border-white bg-black' placeholder='First Name' name="" id="" />
                                  <input type="text" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Last Name' id="" />
  
                              </div>
                              <div className="px-6">
                              <input type="email" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Email' id="" />
                              <input type="tel" className='w-full my-10 py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Phone Number' id="" />

                              </div>
                              <div className="flex px-6   items-center gap-20">
                                  <input type="date" className='w-full py-6 px-5 border-[1px] border-white bg-black' placeholder='First Name' name="" id="" />
                                  <input type="time" className='w-full py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Last Name' id="" />
  
                              </div>
                              <div className="px-6 text-center">
                              <input type="number" className='w-full my-10 py-6 px-5 border-[1px] border-white bg-black'  name="" placeholder='Number of Persons' id="" />
                              <button className="text-white hover:bg-[#B5986D] border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
            Book Now
          
          
                  </button>
                              </div>


                          </div>
                      </form>

                 

                  </div>
                  
              </Popover.Panel>
          
        </div>
      </div>

        </div>
        </Popover>  

      </Popover.Group>

  );
};

export default Footer;
