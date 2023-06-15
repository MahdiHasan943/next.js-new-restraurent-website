import Slider from "react-slick";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const WineSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'progressive',

    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,  
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),

   
    
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],

  };

  const arrowRef = useRef(null);

  return (
    <Slider ref={arrowRef} {...settings}>
      {/* {sliderProject} */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className=" mx-auto w-full  sm:w-[340px] h-[350px]"
              src="../Bootle-Beer.jpg"
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
      </div>
      {/* 2 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className=" mx-auto  sm:w-[340px] h-[350px]"
              src="../coctailslideImage.png"
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
      </div>

      {/* 3 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[340px] h-[350px]"
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
      </div>
      {/* 4 */}
      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto sm:w-[340px] h-[350px]"
              src="../Soft-Drinks.jpg"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Soft Drink</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/Softdrinks"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>
      {/* 5 */}

      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto  sm:w-[340px] h-[350px]"
              src="../Draft-Beer.jpg"
              alt=""
            />
          </div>
          <p className="text-[24px] text-center text-[#B5986D]">Draft Beers</p>
          <div className="flex justify-center">
            <Link
              href={"/WineAndCoctail/DraftBeers"}
              className="text-center text-[20px] mx-auto dark:text-white text-black"
            >
              View menu
            </Link>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="project h-[600px]  flex justify-center mt-[100px]       ">
        <div className="">
          <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
            <img
              className="mx-auto w-full sm:w-[340px] h-[350px]"
              src="../bottleNew.jpg"
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
      </div>
    </Slider>
  );
};

export default WineSlider;
