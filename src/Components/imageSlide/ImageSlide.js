import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


// import required modules
import { EffectCreative,Pagination } from "swiper";
const ImageSlide = () => {
  return (
      <div>
          

          <Swiper
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -300],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative,Pagination]}
        className="mySwiper"
      >
              <SwiperSlide>
              <div className="flex justify-between w-full gap-8 items-center">
        <div className="">
          <img className="w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Mangoma.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Shayo.png" alt="" />
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>   <div className="flex justify-between w-full gap-8 items-center">
        <div className="">
          <img className="w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Mangoma.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Shayo.png" alt="" />
        </div>
      </div></SwiperSlide>
        <SwiperSlide>   <div className="flex justify-between w-full gap-8 items-center">
        <div className="">
          <img className="w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Mangoma.png" alt="" />
        </div>
        <div className="">
          <img className="w-full" src="./Shayo.png" alt="" />
        </div>
      </div></SwiperSlide>
       
      </Swiper>

        

    </div>
  )
}

export default ImageSlide