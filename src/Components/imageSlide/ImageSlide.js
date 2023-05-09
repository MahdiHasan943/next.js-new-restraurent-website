import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectCreative,Navigation,Pagination } from "swiper";
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
        navigation={ {clickable: true,}}
        modules={[EffectCreative,Pagination,Navigation]}
        className="mySwiper"
      >
              <SwiperSlide>
              <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px] md:h-[554px]  h-[310px] w-full" src="./Mangoma.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px]  w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage5.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
      </div></SwiperSlide>
      <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage3.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        

        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./OurEventImage1.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        

        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage2.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        

        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage4.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        

        
        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage11.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        
          
        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage6.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
            
        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage7.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
        </div></SwiperSlide>
        
        <SwiperSlide>   <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
        <div className="">
          <img className="min-h-[252px]  md:h-[554px]  h-[310px] w-full" src="./FoxhutBar.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] lg:w-[900px]  md:h-[554px]  h-[310px] w-full" src="./eventImage12.png" alt="" />
        </div>
        <div className="">
          <img className="min-h-[252px] md:h-[554px]  h-[310px] w-full" src="./Shayo.png" alt="" />
        </div>
      </div></SwiperSlide>
       
      </Swiper>

        

    </div>
  )
}

export default ImageSlide