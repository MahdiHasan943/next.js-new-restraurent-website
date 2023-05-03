import React from "react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";

const HomePageMenu = () => {
  return (
    <div className="md:flex pt-20 md:pt-[100px]  pb-20 h-full overflow-hidden ">
      <div className="relative h-full  md:w-[30%]">
        <h1 className="text-[60px] lg:text-[60px] md:text-[40px]  mt-[30px] text-center  leading-3 lg:text-end mr-4 dark:text-white text-black font-bold">
          Our Menu
        </h1>
        <div className="md:mr-[-400px] h-[800px] md:h-[900px]    lg:mr-[-500px]">
          <Swiper
            className="relative"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={100}
            slidesPerView="auto"
          >
            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                  Soup Meal
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>
            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Breakfast
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>


            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                From the Grill
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>

            
            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Rice Meal
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>

            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Dessert
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>

            
            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Starter
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>
            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Small Chops
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>

            <SwiperSlide className="  mt-[100px]">
              <SwiperNavButtons></SwiperNavButtons>

              <div className="absolute top-0 right-0 w-full  sm:w-[80%] px-10 py-20 rounded-2xl bg-[#B5986D]">
                <h4 className="text-center dark:text-white mt-5 text-4xl text-black">
                Salad
                </h4>
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Lorem ipsum dolor sit amet</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">90$</p>
                </div>
                {/* 2 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vivamus sodales augue vitae arcu</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">133$</p>
                </div>
                {/* 3 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Pellentesque semper semper</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">299$</p>
                </div>
                {/* 4 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Vestibulum est turpis</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">310$</p>
                </div>

                {/* 5 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Phasellus convallis maximus</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">230$</p>
                </div>
                {/* 6 */}
                <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                  <div className="">
                    <p className="dark:text-white text-black font-bold text-[20px]">Nullam elementum magna</p>
                    <p className="dark:text-white text-black  text-[17px]">Lorem ipsum dolor sit amet</p>
                  </div>
                  <p className="dark:text-white text-black font-bold text-[20px]">68$</p>
                </div>


                
              </div>
            </SwiperSlide>




          </Swiper>
        </div>
      </div>
      <div className="w-full bg-[green] md:w-[70%] h-[100%]">
        <img className="w-full  md:h-[900px]  h-[100%]" src="./HomePageMenu.png" alt="" />
      </div>
    </div>
  );
};

export default HomePageMenu;
