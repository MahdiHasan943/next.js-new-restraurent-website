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
import { EffectCreative, Navigation, Pagination } from "swiper";

import { PhotoProvider, PhotoView } from "react-photo-view";

const ImageSlide = () => {

  const SlidesImages = [
    {
      "id": "1",
      "imgL": "./FoxhutBar.png",
      "imgM": "./Mangoma.png",
      "imgR":"./Shayo.png"
    }
    ,
    {
      "id": "2",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage5.png",
      "imgR":"./Shayo.png"
    }
    ,
    {
      "id": "3",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage3.png",
      "imgR":"./Shayo.png"
    }

    ,
    {
      "id": "4",
      "imgL": "./FoxhutBar.png",
      "imgM": "./OurEventImage1.png",
      "imgR":"./Shayo.png"
    }
    

,
  {
    "id": "5",
    "imgL": "./FoxhutBar.png",
    "imgM": "./eventImage2.png",
    "imgR":"./Shayo.png"
    },
    {
      "id": "6",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage4.png",
      "imgR":"./Shayo.png"
    },
    {
      "id": "7",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage11.png",
      "imgR":"./Shayo.png"
    },
    {
      "id": "8",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage7.png",
      "imgR":"./Shayo.png"
    },
    {
      "id": "9",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage6.png",
      "imgR":"./Shayo.png"
    },
    {
      "id": "10",
      "imgL": "./FoxhutBar.png",
      "imgM": "./eventImage12.png",
      "imgR":"./Shayo.png"
    }


  ]
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
        navigation={{ clickable: true }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          SlidesImages.map(slidesImage=> <SwiperSlide>
             <PhotoProvider>
            <div className="flex justify-between w-full      gap-4   sm:gap-8 items-center">
              <div className="">
              <PhotoView src="./OurEventImage1.png">  
                  <img
                  className="min-h-[252px] md:h-[800px]  h-[450px] w-full"
                  src={slidesImage?.imgL}
                  alt=""
                /></PhotoView>
              </div>
              <div className="">
              <PhotoView src={slidesImage?.imgM}>  
                  <img
                  className="min-h-[252px] md:h-[800px]  h-[450px] w-full"
                  src={slidesImage?.imgM}
                  alt=""
                /></PhotoView>
              </div>
              <div className="">
              <PhotoView src="./newsayoSlide.png">  
                  <img
                  className="min-h-[252px] md:h-[800px]  h-[450px] w-full"
                  src={slidesImage?.imgR}
                  alt=""
                /></PhotoView>
              </div>
            </div></PhotoProvider>
          </SwiperSlide>)
       }  
      </Swiper>
    </div>
  );
};

export default ImageSlide;
