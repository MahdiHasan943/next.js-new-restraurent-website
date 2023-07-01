import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


const Reservation = () => {
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
    <div className="pt-20 w-full ">
      <h2 className="dark:text-white text-center text-black text-[36px]  py-10  sm:text-[70px] md:leading-[90px] font-bold">
        Reservation
      </h2>

      <div className="ReservationBg ">
        <div className=" py-20 sm:px-20">
          <h4 className="text-white  text-center text-[26px]  pb-4 pt-8  sm:text-[40px] md:leading-[80px] font-bold">
            Welcome your visit
          </h4>
          <form  ref={form} onSubmit={sendEmail} action="">
          <div className="grid px-4 grid-cols-1  gm:grid-cols-2 sm:w-[80%] mx-auto py-20 sm:grid-cols-3 gap-8 lg:grid-cols-5  items-center">
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-2 2xl:px-4 "
                placeholder="Name"
                type="text"
                name="user_name"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit    py-8 px-2 2xl:px-4  "
              placeholder="Phone Number"
                type="number"
                name="phone"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-2 2xl:px-4 "
              placeholder="Number of people"
                type="number"
                name="people"
            />
            <input
              className=" border-b-[2px]  w-full border-white border-t-none border-l-none border-r-none   bg-inherit   py-8  px-2 2xl:px-4  "
              type="date"
              placeholder="Date "
                required
                name="date"
            />
            <input
              className="border-b-[2px] w-full  border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-2 2xl:px-4  "
              placeholder="Time"
              type="time"
                required
                name="time"
            />
          </div>

          <div className="text-center py-8">
              
              <input
                    type="submit"
                    value="Book Reservation"
                    className="hover:bg-[#B5986D] border rounded-lg font-bold text-3xl dark:border-white border-[#B5986D] py-6 px-14   text-white"

                  />
             
          </div>
          </form>
        </div>
      </div>
      <Toaster />

    </div>
  );
};

export default Reservation;
