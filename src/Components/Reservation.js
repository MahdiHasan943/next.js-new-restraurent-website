import React from "react";

const Reservation = () => {
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
          <div className="grid px-4 grid-cols-1  gm:grid-cols-2 sm:w-[80%] mx-auto py-20 sm:grid-cols-3 gap-8 lg:grid-cols-5  items-center">
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-20 "
              placeholder="Name"
              type="text"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-20 "
              placeholder="Phone Number"
              type="number"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-20 "
              placeholder="Number of people"
              type="number"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-20 "
              placeholder="Date"
              type="date"
            />
            <input
              className="border-b-[2px] border-white border-t-none border-l-none border-r-none   bg-inherit   py-8 px-20 "
              placeholder="Time"
              type="time"
            />
          </div>

          <div className="text-center py-8">
            <button className="hover:bg-[#B5986D] border rounded-lg font-bold text-3xl dark:border-white border-[#B5986D] py-6 px-14   text-white ">
              {" "}
              Book Reservation{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
