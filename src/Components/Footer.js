import React, { useState ,useRef} from "react";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import Form from "./ReservationForm/Form";
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';




const Footer = () => {
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61ya5o4",
      "template_rk5020a",
        form.current,
        "ZerahYNpS_PwWoB6n"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');

        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <section>
      <div className="fbg  gap-20 px-6 h-[670px]">
        <div className="sm:w-[50%] lg:pt-[150px] lg:flex items-center justify-between mx-auto  ">
          <div className="">
            <div className="flex  items-center justify-between py-6  gap-4">
              <div className="bg-[#1DA1F2] rounded-md p-4">
                {" "}
                <a href="https://twitter.com/passion_blend?lang=en">
                  <BsTwitter></BsTwitter>
                </a>
              </div>

              <div className="bg-[#1877F2] rounded-md p-4">
                <a href="https://www.facebook.com/passionblendbarleicester/">
                  <BsFacebook></BsFacebook>
                </a>
              </div>

              <div className="bg-[#F00073] rounded-md p-4">
                {" "}
                <a href="https://www.instagram.com/passionblendbar/?hl=en">
                  <BsInstagram></BsInstagram>
                </a>
              </div>
              <div className="lg:ml-[60px] xl:ml-[80px] 2xl:ml-[100px]">
                <img className="py-4" src="/../BT.png" alt="" />
                <img className="my-8" src="/../Sky.png" alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-5xl text-center py-4 font-bold ">Opening hours:</p>
            <div className="text-3xl sm:text-1xl xl:text-3xl">
              <div className="flex items-center gap-6 justify-center ">
                <div className="">
                  <p>        Monday </p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>  Friday  </p>
                  <p> Saturday</p>
                  <p>Sunday </p>


                
                </div>

                <div className="">

                  <p>10:00 — 23:00</p>
                  <p>10:00 — 23:00</p>
                  <p>10:00 — 23:00</p>
                  <p>10:00 — 04:00</p>
                  <p>10:00 — 04:00</p>
                  <p>10:00 — 04:00</p>
                  <p> 12:00 — 23:00</p>
                  
                </div>
              </div>

          
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <Popover.Group className=" relative">
        <div className="  text-white pb-4 pt-8  px-4 sm:px-[60px]">
          <div className="lg:flex mt-[-300px] justify-center">
            {/* <img className="sm:h-[642px]" src="/../map.png" alt="" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.6417318358876!2d-1.1274621230775388!3d52.63031812805569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877612323e18b85%3A0x443b8bc93e58d7ee!2sPassion%20Blend%20%26%20HindBar!5e0!3m2!1sen!2suk!4v1684181706068!5m2!1sen!2suk"
              className="w-full h-[450px]  sm:w-[628px] sm:h-[570px] "
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <img
              className="lg:mt-[100px] lg:ml-[-180px] h-[330px]"
              src="/../box.png"
              alt=""
            />
          </div>

          <div className="w-full   xl:w-[75%] border pb-10 pt-20 px-4 lg:px-10 mt-8 rounded-xl border-[#0B1517] mx-auto">
            <div className=" lg:flex items-center gap-6 mt-[20px] justify-center">
              <div className=" ">
                <a
                  className="dark:text-white font-semibold text-[50px] sm:text-[72px]  footerLogo  text-black"
                  href=""
                >
                  PASSION <br />
                  BLEND BAR
                </a>
              </div>

              <div className="my-8 lg:my-0 flex gap-2 sm:gap-20 justify-between">
                <p className="  dark:text-white text-black">
                  <Link href={"/"}> Home</Link>
                </p>

                <div className=" relative parent  dark:text-white text-black ">
                  Menu
                  <div className="absolute child">
                    <Link className="hover:text-[#b1935e]" href={"/Menu/GASTRO"}> GASTRO </Link>
                    <Link className="hover:text-[#b1935e]" href={"/Menu/CONTINENTAL"}>CONTINENTAL </Link>
                  </div>
                </div>
               

                <p className="dark:text-white  text-black">
                  <Link href={"/#event"}>Events </Link>
                </p>
                <p className="dark:text-white  text-black">
                  <Link href={"/WineAndCoctail/WineAndCoctail"}>
                   
                    Wine <span className="hidden  sm:inline">& Coctailbar</span>
                  </Link>
                </p>
                <p className="dark:text-white  text-black">
                  <Link href={"/Contact/Contact"}>Contact </Link>
                </p>
              </div>
            </div>
            <div className="mx-atuo text-center gap-2 sm:g	+44 20 1162 546 892ap-6 flex justify-center sm:justify-end">
              <a target="_blank" href="https://wa.me/+4407466970736"  className="dark:text-white text-black text-[15px] sm:text-[20px]   sm:my-0 dark:hover:bg-[#B5986D]  hover:bg-[black] hover:text-white  border-[#B5986D]  dark:border-white border-[1.6px] px-12 sm:px-20 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">
              Order Online
              </a>
            

              <Popover>
                {" "}
                <Popover.Button className="dark:text-white font-bold text-black  sm:my-0 dark:hover:bg-[#B5986D]  hover:bg-[black] hover:text-white  border-[#B5986D]  dark:border-white border-[1.6px]   text-[15px] sm:text-[20px]  px-8 sm:px-14 py-7 rounded-2xl bookNow  outline-none focus:outline-none ">
                  Reserve Seating
                </Popover.Button>
                <Popover.Panel className=" dark:bg-[#0b1517] bg-black absolute py-10 left-0 sm:left-[20%] top-[15%]  md:top-[30%] lg:left-[30%] 2xl:left-[40%]  lg:top-[-10%] z-[10000] ">
                  <div className="relative">
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                      <BsXLg className="absolute right-10 top-10 text-white text-end text-[25px]"></BsXLg>
                    </Popover.Button>
                    <form ref={form} onSubmit={sendEmail} action="" className="w-full ">
                      <h2 className="text-white font-bold  text-center text-[40px] leading-[50px]">
                        Make a Reservation
                      </h2>

                      <div className="sm:w-[80%] mx-auto ">
                        <p className="text-white  text-center text-[18px] leading-[30px] ">
                          Get in touch with restaurant
                        </p>

                        <div className="flex px-6 py-10  items-center gap-20">
                          <input
                            type="text"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            placeholder="First Name"
                            name="user_name"

                            // value={formState.name||''}
                            id=""
                            // onChange={changeHandler}
                          />
                          <input
                            type="text"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="user_name"

                            placeholder="Last Name"
                            id=""
                          />
                        </div>
                        <div className="px-6">
                          <input
                            type="email"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="user_email"

                            placeholder="Email"
                            id=""
                          />
                          <input
                            type="tel"
                            className="w-full my-10 py-6 px-5 border-[1px] border-white bg-black"
                            name="phone"
                            placeholder="Phone Number"
                            id=""
                          />
                        </div>
                        <div className="flex px-6   items-center gap-20">
                          <input
                            type="date"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="date"
                            id=""
                          />
                          <input
                            type="time"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="time"
                            id=""
                          />
                        </div>
                        <div className="px-6 text-center">
                          <input
                            type="number"
                            className="w-full my-10 py-6 px-5 border-[1px] border-white bg-black"
                            name="people"
                            placeholder="Number of Persons"
                            id=""
                          />

                          <input
                            className="text-white hover:bg-[#B5986D] border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow"
                            type="submit"
                            value="Book Now"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>
        </div>
      </Popover.Group>
      <Toaster />

    </section>
  );
};

export default Footer;
