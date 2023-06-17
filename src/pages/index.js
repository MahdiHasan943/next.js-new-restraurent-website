import Link from "next/link";
import "../styles/Home.module.css";
import HomePageMenu from "@/Components/HomePageMenu";
import Reservation from "@/Components/Reservation";
import ImageSlide from "@/Components/imageSlide/ImageSlide";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Home() {
  return (
    <>
      {/* 1 */}
      <div className="overflow-hidden  heroBg flex h-[780px] items-center justify-start  ">
        <div className="py-[50px] px-4 sm:px-0 sm:pl-[80px] lg:pl-[150px] xl:pl-[250px]">
          <img className="w-[150px]" src="./welcome.png" alt="" />
          <h1 className="PassionHero mt-4 text-[65px] leading-[66px] sm:text-[101px] sm:leading-[95%]">
            PASSION <br />
            BLEND BAR
          </h1>
          <p className="where my-4">Where The World comes to DANCE & dine</p>
        </div>
      </div>
      {/* 2 */}
      <div className="py-[80px] h-[900px] gm:h-[800px] sm:h-[764px] mt-[-170px] bg-[#0B1517] md:w-[70%] 2xl:w-[50%] md:px-[100px] mx-auto  px-6  ">
        <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px]  text-white py-4 ">
          About Us
        </h1>
        <div className="md:flex gap-8 items-start">
          <div className="md:w-[50%] w-full mx-auto">
            <p className="aboutnewP  text-white ">
              Right opposite Leicester’s main train{" "}
              <br className="hidden xl:block" /> station, Hind & PB Lounge is a
              gastro pub <br className="hidden xl:block" /> fit for breakfast,
              lunch and dinner. On <br className="hidden xl:block" /> London
              Road, it’s one of the most popular{" "}
              <br className="hidden xl:block" /> spots in central Leicester
              thanks to classic <br className="hidden xl:block" /> British pub
              food alongside other <br className="hidden xl:block" />{" "}
              international favourites, a buzzing{" "}
              <br className="hidden xl:block" /> atmosphere, well-stocked bar
              and <br className="hidden xl:block" /> regular events.{" "}
              <br className="hidden xl:block" />
            </p>
            <p className="aboutnewP mt-[20px]">
              {" "}
              Whether you just want to take the edge{" "}
              <br className="hidden xl:block" /> off and relax with a coffee or
              go a bit <br className="hidden xl:block" /> crazy in the early
              hours, Hind & PB Lounge <br className="hidden xl:block" /> is fit
              for whatever.
            </p>
          </div>

          <div className="aboutnewP md:w-[50%] w-full mx-auto">
            <p className="aboutnewP text-white ">
              Serving classic British pub food alongside{" "}
              <br className="hidden xl:block" /> other international favourites.
              Starters, <br className="hidden xl:block" /> sides, main, steaks,
              dessert and lots more. <br className="hidden xl:block" />
            </p>
            <p className="aboutnewP mt-[20px] text-white ">
              We also have wine, Shots & Liqueurs,{" "}
              <br className="hidden xl:block" /> Passion Blend, Pina Colada,
              Margarita, <br className="hidden xl:block" /> Maitai, Manhattan,
              Sex On The Beach, <br className="hidden xl:block" /> Vodka,
              Cosmopolitan,Classic Mojito, Woo{" "}
              <br className="hidden xl:block" /> – Woo, Passion Coconut, Blue
              Lagoon, <br className="hidden xl:block" /> Spirits, Soft Drinks &
              Juice, <br className="hidden xl:block" /> Glass Juice, Bottled
              Beers and lots more...
            </p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <PhotoProvider>
        <div className="mt-[-150px]">
          <div className="mx-auto">
            <div className="">
              <PhotoView src="Tomato.png">
                <img
                  className="sm:h-[638px] sm:w-[850px] mx-auto  "
                  src="Tomato.png"
                  alt=""
                />
              </PhotoView>{" "}
            </div>
          </div>
          <div className="mt-[-150px] TomatoBg">
            <div className="relative gm:flex justify-end">
              <div className="pt-10 sm:pt-0">
                <PhotoView src="./bigPlate1.png">
                  <img
                    className="mx-auto sm:ml-auto 2xl:mr-[300px] sm:w-[370px] mt-[160px]  sm:mt-[-50px] rounded-full  h-[370px]"
                    src="./bigPlate1.png"
                    alt=""
                  />
                </PhotoView>
              </div>
            </div>
          </div>

          <div className="lg:flex  mt-[160px] sm:mt-[-150px]">
            <div className="mx-auto sm:mx-0">
              <PhotoView className="rounded-full" src="./newplate2.png">
                <img
                  className=" lg:ml-[20px] rounded-full sm:mt-[-150px]  mb-4  mx-auto "
                  src="./newplate2.png"
                  alt=""
                />
              </PhotoView>
            </div>
            <div className=" lg:block w-full lg:w-[60%] ">
              <div className="">
                <PhotoView src="./plate3.png">
                  <img
                    className="mx-auto rounded-full  my-4 lg:my-0 h-[320px]"
                    src="./plate3.png"
                    alt=""
                  />
                </PhotoView>
              </div>
              <div className="lg:flex lg:gap-[100px] mx-auto lg:justify-between">
                <PhotoView src="./plate4.png">
                  <img
                    className="mx-auto rounded-full  my-4 lg:my-0 h-[250px]"
                    src="./plate4.png"
                    alt=""
                  />
                </PhotoView>
                <PhotoView src="./plate5.png">
                  <img
                    className="mx-auto rounded-full  my-4 lg:my-0 h-[270px]"
                    src="./plate5.png"
                    alt=""
                  />
                </PhotoView>
              </div>
            </div>
          </div>
          <div className="sm:flex mt-[50px] items-center gap-[100px]  lg:ml-[50px] 2xl:ml-[200px] px-6">
            <div className="">
              <h4 className="dark:text-white text-black text-[40px] sm:text-[50px] font-bold">
                Meal Deals
              </h4>
            </div>
            <div className="">
              <p className="dark:text-white text-[20px] mt-[20px] sm:mt-0 sm:text-[24px] sm:font-bold text-black ">
                MONDAY – FRIDAY <br className="hidden lg:block" /> 10AM –
                12NOON: FULL ENGLISH BREAKFAST
                <br className="hidden lg:block" /> 12NOON – 5PM: LUNCH DEALS
                <br className="hidden lg:block" /> 5PM – 8PM: DINNER
              </p>
              <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
                OFFERS AND DISCOUNTS <br className="hidden lg:block" /> # HAPPY
                HOUR: MONDAY – FRIDAY 5PM TO 8PM.
              </p>
              <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
                STUDENT DEALS AND DISCOUNTS. NHS DISCOUNT.
              </p>
            </div>
          </div>
        </div>
      </PhotoProvider>
      <HomePageMenu></HomePageMenu>

      <div className="sm:flex justify-end items-center min-h-[460px] sm:h-[732px] xl:h-[900px] HomeWineBg  gap-8">
        <div className="px-4 sm:pr-10 py-20 ">
          <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px] text-white ">
            Happy Hours
          </h1>
          <p className=" text-white text-[28px] sm:text-[36px] my-8">
            Drinks & Cocktails
          </p>
          <p className="AboutP text-white  my-8">
            We offer variety of deals throughout the week at Passion Blend
            <br className="hidden sm:block" />
            Bar.
            To be the first to know follow us on social media.
          
          </p>
          <div className="flex gap-4 sm:gap-10 justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/passionblendbarleicester"
            >
              <img src="./f.png" alt="" />
            </a>

            <a target="_blank" href="https://twitter.com/passion_blend?lang=en">
              <img src="./twitter.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/passionblendstudents/"
            >
              <img src="./instra.png" alt="" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@passionblendbar">
              <img src="./tiktok.png" alt="" />
            </a>
            <a target="" href="">
              <img src="./snap.png" alt="" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@passionblendbarchannel/videos">
              <img src="./youtube.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        id="event"
        className="flex px-6 py-24 w-full justify-center  items-center"
      >
        <div className="w-full md:w-[50%]">
          <h3 className="dark:text-white text-black text-[30px] pb-10   sm:text-[60px] md:leading-[80px] font-bold">
            Our Event Gallery
          </h3>
          <p className="dark:text-white font-semibold py-4 text-black ">
            Passion Blend Bar is very known for organising amazing events
            throughout the year and make sure to always check this section of
            our website for the very latest. If you missed our event an would
            like to see pictures taken, please click and get re-directed to out
            Instagram page for more Event information and images.
          </p>
        </div>
      </div>
      <ImageSlide></ImageSlide>
      <Reservation></Reservation>
    </>
  );
}
