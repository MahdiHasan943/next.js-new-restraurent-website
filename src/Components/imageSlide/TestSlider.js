import Slider from 'react-slick';
import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const TestSlider = () => {

    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : true,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode : false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode : false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode : false
            }
          }
        ]
      };


    const arrowRef = useRef(null);
   
  return (
      
           <Slider ref={arrowRef} {...settings}>
          {/* {sliderProject} */}
          <div className='project h-[600px]  flex justify-center mt-[100px]       '>
   
          <div className="">
              <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
                <img
                  className=" mx-auto w-full  sm:w-[340px] h-[350px]"
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
   
          </div>
          {/* 2 */}
          <div className='project h-[600px]  flex justify-center mt-[100px]       '>
   
   <div className="">
       <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
         <img
           className=" mx-auto  sm:w-[340px] h-[350px]"
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

          </div>
          
          {/* 3 */}
          <div className='project h-[600px]  flex justify-center mt-[100px]       '>
   
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
          <div className='project h-[600px]  flex justify-center mt-[100px]       '>
   
   <div className="">
       <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
       <img
                  className="mx-auto sm:w-[340px] h-[350px]"
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

          </div>
          {/* 5 */}

          <div className='project h-[600px]  flex justify-center mt-[100px]       '>
   
   <div className="">
       <div className="border  py-10 mx-auto   sm:w-[400px] h-[400px]  my-auto border-[#B5986D]">
       <img
                  className="mx-auto w-full sm:w-[340px] h-[350px]"
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

          </div>
          
         

          
          {/* <div className='project h-[600px]    mt-[100px]   py-10'>
    <img className='h-[400px]' src="https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png" alt="project" />
   
          </div>
          <div className='project h-[600px]   mt-[100px]    py-10'>
    <img className='h-[400px]' src="https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png" alt="project" />
   
          </div>
          <div className='project h-[600px]    mt-[100px]   py-10'>
    <img className='h-[400px]' src="https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png" alt="project" />
   
          </div>
          <div className='project h-[600px]   mt-[100px]    py-10'>
    <img className='h-[400px]' src="https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png" alt="project" />
   
      </div>
    
     
 */}

    </Slider>
  )
}

export default TestSlider