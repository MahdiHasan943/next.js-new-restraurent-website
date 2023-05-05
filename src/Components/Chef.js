import React from "react";
import { BsStar } from "react-icons/bs";

const Chef = () => {
  return (
    <>
      <div className="md:flex py-20 px-4 sm:px-20  justify-center  gap-10">
        <div className="py-20 px-20 rounded-xl flex items-center md:w-[736px] h-[790px] bg-[#B5986D]">
          <div className="mx-auto">
          <img className=" mx-auto h-[544px]" src="./Chef.png" alt="" />
          <h3 className="dark:text-white pt-4 text-center text-black text-5xl font-bold">
            Michael Lin
          </h3>
         </div>
        </div>
        <div className="md:w-[50%] px-4 my-20 md:my-0 ">
          <h3 className="dark:text-white text-black text-[40px]   sm:text-[60px] md:leading-[80px] font-bold">
            Our <br className="hidden sm:block" />
            MasterChef
          </h3>
          <p className="dark:text-white py-4 text-black lg:leading-[40px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br className="hidden sm:block" /> Sed eu feugiat massa, et
            condimentum nunc. Praesent <br className="hidden sm:block" />{" "}
            consectetur lorem in efficitur dictum. Vestibulum ante{" "}
            <br className="hidden sm:block" /> ipsum primis in faucibus orci
            luctus et ultrices posuere <br className="hidden sm:block" />{" "}
            cubilia curae; Sed lobortis egestas cursus. Vestibulum{" "}
            <br className="hidden sm:block" /> faucibus molestie est, ac
            efficitur ex ullamcorper a.
          </p>
          <div className="w-[200px] h-[1.2px] ml-[100px] dark:bg-white bg-black"></div>

          <div className="">
            <p className="py-6 dark:text-white pt-4  text-black text-5xl font-bold">
              Awards
            </p>

            <div className="flex items-center gap-6">
              <p className="py-10 dark:text-white  text-black text-3xl font-semibold">
                Michelin Stars:{" "}
              </p>

              <BsStar className="dark:text-white text-[24px]  text-black "></BsStar>
              <BsStar className="dark:text-white text-[24px]  text-black "></BsStar>
              <BsStar className="dark:text-white text-[24px]  text-black "></BsStar>
              <BsStar className="dark:text-white text-[24px]  text-black "></BsStar>
            </div>
          </div>
        </div>
      </div>

      <div id="event" className="flex px-6 py-24 w-full justify-center  items-center">
        <div className="w-full md:w-[50%]">
          <h3 className="dark:text-white text-black text-[40px] pb-10   sm:text-[60px] md:leading-[80px] font-bold">
            Our Event Gallery
          </h3>
          <p className="dark:text-white font-semibold py-4 text-black ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat <br className="hidden sm:block" /> massa, et condimentum nunc. Praesent consectetur lorem in
            efficitur <br className="hidden sm:block" /> dictum. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices <br className="hidden sm:block" /> posuere cubilia curae; Sed lobortis egestas
            cursus. Vestibulum faucibus <br className="hidden sm:block" /> molestie est, ac efficitur ex
            ullamcorper a.
          </p>
        </div>
      </div>
    </>
  );
};

export default Chef;
