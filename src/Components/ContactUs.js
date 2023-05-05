import React from "react";
import { BsGeoAlt } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="pt-[100px]">
      <div className="w-full md:w-[60%] mx-auto md:flex  justify-center  md:gap-8">
        <div className="">
          {" "}
          <img className="w-full h-full" src="./conTact.png" alt="" />
        </div>
        <div className="px-6 mx-auto">
          <h3 className="dark:text-white text-black text-[40px]   sm:text-[60px] md:leading-[80px] font-bold">
            Contact Us
          </h3>
          <div className="flex items-center gap-6">
            <BsGeoAlt className="dark:text-white text-[24px]  text-black "></BsGeoAlt>
            <p className=" dark:text-white py-4 text-black">
              Hind & PB Lounge - 49 London Road, Centre{" "}
              <br className="hidden sm:block" />
              Leicester LE2 0PD
            </p>
          </div>

          <div className="">
            <p className="dark:text-white py-4 font-bold text-[24px]  text-black ">
              Open :
            </p>
            <p className="dark:text-white  text-black ">
              Monday 7:00 — 0:00 <br className="hidden sm:block" /> Tuesday 7:00
              — 0:00 <br className="hidden sm:block" />
              Wednesday 7:00 — 0:00 <br className="hidden sm:block" />
              Thursday 7:00 — 4:00 <br className="hidden sm:block" /> Friday
              7:00 — 4:00 <br className="hidden sm:block" />
              Saturday 9:00 — 4:00 <br className="hidden sm:block" /> Sunday
              12:00 — 23:00
            </p>
            <h3 className="dark:text-white py-4 text-black text-[30px]    font-bold">
              01162545892 or 07424546256{" "}
            </h3>

            <button className="hover:bg-[#B5986D] border rounded-lg dark:border-white border-[#B5986D] py-6 px-14  hover:text-white dark:text-white text-black">
              {" "}
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
