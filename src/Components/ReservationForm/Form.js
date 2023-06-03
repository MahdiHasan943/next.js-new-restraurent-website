import React from "react";
import { Popover } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
const Form = () => {
  return (
    <>
      <Popover>
        <Popover.Button className="dark:text-white text-black text-[15px] sm:text-[20px]   sm:my-0 dark:hover:bg-[#B5986D]  hover:bg-[black] hover:text-white  border-[#B5986D]  dark:border-white border-[1.6px] px-12 sm:px-20 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">
          Order Online
        </Popover.Button>
        <Popover.Panel className="absolute top-[20%] sm:top-[-20%] left-0 h-[100%] w-[100%] mx-auto rounded-lg shadow-lg form   z-[10000]  ">
          <div className="relative w-full sm:w-[60%] mx-auto">
            <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
              <BsXLg className="absolute right-10 top-10 text-white text-end text-[25px]"></BsXLg>
            </Popover.Button>

            <img
              className="min-h-[500px] w-full h-[100%]"
              src="/../orderOnline.png"
              alt=""
            />
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default Form;
