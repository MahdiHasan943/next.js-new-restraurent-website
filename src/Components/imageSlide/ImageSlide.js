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
const elementSize = 500;



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
                  <PhotoView 
              
                    width={elementSize}
                    height={elementSize}
                    render={({ scale, attrs }) => {
                      const width = attrs.style.width;
                      const offset = (width - elementSize) / elementSize;
                      const childScale = scale === 1 ? scale + offset : 1 + offset;
              
                      return (
                        <div  {...attrs}>
                          <div className="  h-[100vh]" style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>
                            <img className="w-full" src="./OurEventImage1.png" alt="" />
                            <div className="mt-20 flex justify-center sm:mt-[50px]">
                            <a href="https://www.eventbrite.co.uk/o/passion-blend-amp-hindbar-18035984270"  className="text-white  text-[15px] sm:text-[20px]   sm:my-0 hover:bg-[#B5986D]    border-[#B5986D]  dark:border-white border-[1.6px] px-12 sm:px-20 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">Book Event</a>

                            </div>
                          </div>
                        </div>
                      );
                    }}
                  >  
                  <img
                  className="min-h-[252px] md:h-[800px]  h-[450px] w-full"
                  src={slidesImage?.imgL}
                  alt=""
                /></PhotoView>
              </div>
              <div className="">
                  <PhotoView 
                  
                  
                  width={elementSize}
                  height={elementSize}
                  render={({ scale, attrs }) => {
                    const width = attrs.style.width;
                    const offset = (width - elementSize) / elementSize;
                    const childScale = scale === 1 ? scale + offset : 1 + offset;
            
                    return (
                      <div  {...attrs}>
                        <div className="  h-[100vh]" style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>
                          <img className=" sm:min-h-[500px] w-full" src={slidesImage?.imgM} alt="" />
                          <div className="mt-20 flex justify-center sm:mt-[50px]">
                          <a  href="https://www.eventbrite.co.uk/o/passion-blend-amp-hindbar-18035984270" className="text-white  text-[15px] sm:text-[20px]   sm:my-0 hover:bg-[#B5986D]    border-[#B5986D]  dark:border-white border-[1.6px] px-12 sm:px-20 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">Book Event</a>

                          </div>
                        </div>
                      </div>
                    );
                  }}
                  >  
                  <img
                  className="min-h-[252px] md:h-[800px]  h-[450px] w-full"
                  src={slidesImage?.imgM}
                  alt=""
                /></PhotoView>
              </div>
              <div className="">
                  <PhotoView 
                  
                  
                  width={elementSize}
                  height={elementSize}
                  render={({ scale, attrs }) => {
                    const width = attrs.style.width;
                    const offset = (width - elementSize) / elementSize;
                    const childScale = scale === 1 ? scale + offset : 1 + offset;
            
                    return (
                      <div  {...attrs}>
                        <div className=" mt-[-50px] h-[100vh]" style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>
                          <img className="w-full" src="./Shayo.png" alt="" />
                          <div className="mt-20 flex justify-center sm:mt-[50px]">
                          <a href="https://www.eventbrite.co.uk/o/passion-blend-amp-hindbar-18035984270" className="text-white  text-[15px] sm:text-[20px]   sm:my-0 hover:bg-[#B5986D]    border-[#B5986D]  dark:border-white border-[1.6px] px-12 sm:px-20 py-7 rounded-2xl font-bold bookNow  outline-none focus:outline-none ">Book Event</a>

                          </div>
                        </div>
                      </div>
                    );
                  }}
                  >  
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
