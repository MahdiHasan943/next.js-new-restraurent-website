import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSwiper } from "swiper/react";
import "swiper/css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns ml-[30px] w-[160px]  h-[300px] relative">
      <button className="" onClick={() => swiper.slidePrev()}>
        <BsArrowLeftShort className="text-5xl dark:text-white text-black">
          {" "}
        </BsArrowLeftShort>
      </button>
      <button
        className=" absolute top-[60px] left-0"
        onClick={() => swiper.slideNext()}
      >
        <BsArrowRightShort className="text-5xl dark:text-white text-black"></BsArrowRightShort>
      </button>
    </div>
  );
};
