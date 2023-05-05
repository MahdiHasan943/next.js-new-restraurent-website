import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination"


// import required modules
import { Zoom, Navigation, Pagination } from "swiper";
const  WineSlide = () => {
  return (
      <div>
          

          <Swiper className="flex w-full gap-4 py-20 mySwiper"
               style={{
                "--swiper-navigation-color": "#fff",
                   "--swiper-pagination-color": "#fff",
                   
              }}
              zoom={true}
              navigation={true}
              slidesPerView={5}
              
              pagination={{
                clickable: true,
              }}
              modules={[Zoom, Navigation, Pagination]}
      >
          
              
          <SwiperSlide>
                  <div className="pb-[100px] sm:mx-10  mt-[50px]">
                      <div className="border py-10 h-full my-auto border-[#B5986D]">
                      <img className=" mx-auto sm:w-[260px]  my-auto h-[330px]" src="../leftD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
{/* 2 */}

<SwiperSlide>
<div className="pb-[100px] sm:mr-10 mt-[50px]">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../coctail.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
{/* 3 */}

<SwiperSlide>
<div className="pb-[100px]">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[340px] h-[430px]" src="../spirit.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
              {/* 4 */}
              <SwiperSlide>
              <div className="pb-[100px] mt-[50px] sm:mx-10  ">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../sortD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
{/* 5 */}

<SwiperSlide>
<div className="pb-[100px] mt-[50px] mr-10">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../rightD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              





              {/* 6 */}
              <SwiperSlide>
                  <div className="pb-[100px] sm:mx-10  mt-[50px]">
                      <div className="border py-10 h-full my-auto border-[#B5986D]">
                      <img className=" mx-auto sm:w-[260px]  my-auto h-[330px]" src="../leftD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
{/* 2 */}

<SwiperSlide>
<div className="pb-[100px] sm:mr-10 mt-[50px]">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../coctail.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
{/* 3 */}

<SwiperSlide>
<div className="pb-[100px]">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[340px] h-[430px]" src="../spirit.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
              {/* 4 */}
              <SwiperSlide>
              <div className="pb-[100px] mt-[50px] sm:mx-10  ">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../sortD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              
{/* 5 */}

<SwiperSlide>
<div className="pb-[100px] mt-[50px] mr-10">
                      <div className="border py-10 border-[#B5986D]">
                      <img className="mx-auto sm:w-[260px]  my-auto h-[330px]" src="../rightD.png" alt="" />
                      </div>
                      <p className="text-[18px] text-center text-[#B5986D]">Spirits</p>
                                    
      </div>
              </SwiperSlide>
              

      </Swiper>

        

    </div>
  )
}

export default  WineSlide