import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";
import Link from "next/link";
const WineSlide = () => {
  return (
    <>
      <div className=" hidden xl:block ">
        <Swiper
          className="w-full gap-4 py-20 mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Pagination]}
        >
          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className=" mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Bottled Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/BottledBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mr-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mr-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 6 */}

          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className=" mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Wines</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Wines"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mr-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mr-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* 2 */}

      <div className=" hidden sm:block xl:hidden">
        <Swiper
          className="w-full gap-4 py-20 mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Pagination]}
        >
          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className=" mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Bottled Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/BottledBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mr-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mr-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 6 */}

          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className=" mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Wines</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Wines"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mr-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mr-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" block sm:hidden ">
        <Swiper
          className="w-full gap-4 py-20 mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Pagination]}
        >
          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className="mx-auto w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Bottled Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/BottledBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mx-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 6 */}

          <SwiperSlide>
            <div className="pb-[100px] mx-10  mt-[50px]">
              <div className="border mb-5 py-10 h-full my-auto border-[#B5986D]">
                <img
                  className=" mx-auto w-[260px]  my-auto h-[330px]"
                  src="../leftD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Wines</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Wines"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}

          <SwiperSlide>
            <div className="pb-[100px] mx-10 mt-[50px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../coctail.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Cocktail</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Cocktails"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}

          <SwiperSlide>
            <div className="pb-[100px]">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[340px] h-[430px]"
                  src="../spirit.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">Spirits</p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Spirits"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10  ">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto sm:w-[260px]  my-auto h-[330px]"
                  src="../sortD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Soft Drink
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/Softdrinks"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}

          <SwiperSlide>
            <div className="pb-[100px] mt-[50px] mx-10">
              <div className="border mb-5 py-10 border-[#B5986D]">
                <img
                  className="mx-auto w-[260px]  my-auto h-[330px]"
                  src="../rightD.png"
                  alt=""
                />
              </div>
              <p className="text-[24px] text-center text-[#B5986D]">
                Draft Beers
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/WineAndCoctail/DraftBeers"}
                  className="text-center text-[20px] mx-auto dark:text-white text-black"
                >
                  View menu
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* 3 */}
    </>
  );
};

export default WineSlide;
