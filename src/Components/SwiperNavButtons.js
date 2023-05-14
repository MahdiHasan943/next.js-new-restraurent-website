import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSwiper } from "swiper/react";
import "swiper/css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns   ml-[20px] sm:ml-0 h-[300px] ">
      <div className="xl:flex relative xl:justify-end">
        <button className="" onClick={() => swiper.slidePrev()}>
          <BsArrowLeftShort className="text-5xl dark:text-white text-black">
            {" "}
          </BsArrowLeftShort>
        </button>
        <button
          className=" absolute left-0 xl:left-auto  xl:right-0 top-[60px] "
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRightShort className="text-5xl dark:text-white text-black"></BsArrowRightShort>
        </button>
      </div>
    </div>
  );
};
