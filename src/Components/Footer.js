import React, { useState } from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import Form from "./ReservationForm/Form";

const Footer = () => {
  //   const [formState, setFormState] = useState({});
  //   const changeHandler = (event) => {
  //     setFormState({ ...formState, [event.target.name]: event.target.value });

  //   }
  // console.log(formState);

  //   const submitHandler = (event) => {
  //     event.preventDefault();
  //     const config =  {

  //       SecureToken : "7c52ddb5-ba37-4e00-94eb-6ca794530de4",
  //       To:"mahdihasan038@gmail.com",
  //       From : formState.email,
  //       Subject : "This is the subject contact form",
  //       Body : `${formState.name} connect to your email`

  //     }
  //     if (window.Email) {
  //       window.Email.send(config).then(()=>alert('email send successfully'))
  //     }

  //   }

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
              <div className="lg:ml-[100px]">
                <img className="py-4" src="/../BT.png" alt="" />
                <img className="my-8" src="/../Sky.png" alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-3xl py-4 font-bold ">Opening hours:</p>
            <p>
              Monday 7:00 — 0:00 <br className="hidden sm:block" />
              Tuesday 7:00 — 0:00 <br className="hidden sm:block" />
              Wednesday 7:00 — 0:00
              <br className="hidden sm:block" />
              Thursday 7:00 — 4:00
              <br className="hidden sm:block" />
              Friday 7:00 — 4:00
              <br className="hidden sm:block" />
              Saturday 9:00 — 4:00
              <br className="hidden sm:block" />
              Sunday 12:00 — 23:00
              <br className="hidden sm:block" />
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <Popover.Group className=" relative">
       
          <div className="  text-white pb-4 pt-8  px-4 sm:px-[60px]">
            <div className="lg:flex mt-[-300px] justify-center">
              <img className="sm:h-[642px]" src="/../map.png" alt="" />
              <img
                className="lg:mt-[200px] lg:ml-[-180px] h-[330px]"
                src="/../newBox.png"
                alt=""
              />
            </div>

            <div className="w-full   xl:w-[75%] border py-20 px-4 lg:px-10 mt-8 rounded-xl border-[#0B1517] mx-auto">
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
                  <p className="dark:text-white text-black">
                    {" "}
                    <Link href={"/Menu"}> Menu</Link>
                  </p>
                  <p className="dark:text-white  text-black">
                    <Link href={"/#event"}>Events </Link>
                  </p>
                  <p className="dark:text-white  text-black">
                    <Link href={"/WineAndCoctail/WineAndCoctail"}>
                      {" "}
                      Wine <span className="hidden sm:block">& Coctailbar</span>
                    </Link>
                  </p>
                  <p className="dark:text-white  text-black">
                    <Link href={"/#Contact"}>Contact </Link>
                  </p>
                </div>
              </div>
              <div className="mx-atuo text-center sm:flex sm:justify-end">
              
               
                <Form></Form>
               
                
                <Popover> <Popover.Button className="dark:text-white text-black mx-4 my-10 sm:my-0 dark:hover:bg-[#B5986D]  hover:bg-[black] hover:text-white  border-[#B5986D]  dark:border-white border-[1.6px] px-10 sm:px-14 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">
                  Reserve Seating
                </Popover.Button>
                <Popover.Panel className=" bg-black absolute py-10 left-0 sm:left-[20%] top-[15%]  md:top-[30%] lg:left-[30%] 2xl:left-[40%]  lg:top-[-10%] z-[10000] ">
                  <div className="relative">
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                      <BsXLg className="absolute right-10 top-10 text-white text-end text-[25px]"></BsXLg>
                    </Popover.Button>
                    <form className="w-full ">
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
                            name="name"
                            // value={formState.name||''}
                            id=""
                            // onChange={changeHandler}
                          />
                          <input
                            type="text"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="name"
                            placeholder="Last Name"
                            id=""
                          />
                        </div>
                        <div className="px-6">
                          <input
                            type="email"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name="email"
                            placeholder="Email"
                            id=""
                          />
                          <input
                            type="tel"
                            className="w-full my-10 py-6 px-5 border-[1px] border-white bg-black"
                            name=""
                            placeholder="Phone Number"
                            id=""
                          />
                        </div>
                        <div className="flex px-6   items-center gap-20">
                          <input
                            type="date"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            placeholder="First Name"
                            name=""
                            id=""
                          />
                          <input
                            type="time"
                            className="w-full py-6 px-5 border-[1px] border-white bg-black"
                            name=""
                            placeholder="Last Name"
                            id=""
                          />
                        </div>
                        <div className="px-6 text-center">
                          <input
                            type="number"
                            className="w-full my-10 py-6 px-5 border-[1px] border-white bg-black"
                            name=""
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
                </Popover.Panel></Popover>
              </div>
            </div>
          </div>
     
      </Popover.Group>
    </section>
  );
};

export default Footer;
