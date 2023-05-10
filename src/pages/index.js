import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../styles/Home.module.css";
import HomePageMenu from "@/Components/HomePageMenu";
import Chef from "@/Components/Chef";
import Reservation from "@/Components/Reservation";
import ContactUs from "@/Components/ContactUs";
import Form from "@/Components/ReservationForm/Form";
import ImageSlide from "@/Components/imageSlide/ImageSlide";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {/* 1 */}
      <div className="overflow-hidden  heroBg flex h-[800px] justify-start items-center">
        <div className="py-[50px] px-4 sm:px-0 sm:pl-[80px] lg:pl-[150px] xl:pl-[250px]">
          <img className="w-[150px]" src="./welcome.png" alt="" />
          <h1 className="PassionHero mt-4 text-[65px] leading-[66px] sm:text-[101px] sm:leading-[95%]">
            PASSION <br />
            BLEND
          </h1>
          <p className="where my-4">Where The World comes to DANCE & dine</p>
          {/* <Form></Form> */}
        </div>
      </div>
      {/* 2 */}
      <div className="py-[80px] h-[900px] gm:h-[800px] sm:h-[764px] mt-[-170px] bg-[#0B1517] md:w-[75%] md:px-[100px] mx-auto  px-6  ">
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
      <div className="mt-[-150px]">
        <div className="">
          <img className="mx-auto " src="Tomato.png" alt="" />
        </div>
        <div className="mt-[-150px] TomatoBg">
          <div className="relative gm:flex justify-end">
            <div className="">
              <img
                className="ml-auto  h-[370px]"
                src="./bigPlate1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex  mt-[-50px] sm:mt-[-150px]">
          <div className="mx-auto sm:mx-0">
            <img className="h-[351px] mx-auto " src="./bigPlate2.png" alt="" />
          </div>
          <div className="hidden lg:block lg:w-[60%] ">
            {" "}
            <div className="">
              {" "}
              <img className="mx-auto h-[320px]" src="./plate3.png" alt="" />
            </div>
            <div className="lg:flex gap-[100px] mxauto justify-between">
              <img className="mx-auto h-[250px]" src="./plate4.png" alt="" />
              <img className="mx-auto h-[270px]" src="./plate5.png" alt="" />
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
              MODAY – FRIDAY <br className="hidden lg:block" /> 7AM – 12NOON: FULL ENGLISH BREAKFAST WITH FREE
              BOTTOMLESS COFFEE  <br className="hidden lg:block" /> 12NOON – 5PM: LUNCH DEALS  <br className="hidden lg:block" /> 5PM – 8PM: DINNER
            </p>
            <p className="dark:text-white text-[20px] sm:text-[24px] mt-5 sm:font-bold text-black ">
              OFFERS AND DISCOUNTS  <br className="hidden lg:block" /> # HAPPY HOUR: MONDAY – FRIDAY 5PM TO 8PM.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <HomePageMenu></HomePageMenu>

      <PhotoProvider>
        <div className="sm:flex justify-end items-center min-h-[460px] sm:h-[732px] HomeWineBg  gap-8">
          {/* <div className="">
            <PhotoView src="./HomePageDrinksBg.png">
              <img
                className="sm:h-[762px]  mx-auto w-full lg:w-[836px] "
                src="./HomePageDrinksBg.png"
                alt=""
              />
            </PhotoView>
          </div> */}
          <div className="px-4 sm:pr-10 py-20 ">
            <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px] text-white ">
              Happy Hours
            </h1>
            <p className=" text-white text-[28px] sm:text-[36px] my-8">
              Drinks & Cocktails
            </p>
            <p className="AboutP text-white  my-8">
              We offer a variety of great offers throughout the week
              <br className="hidden sm:block" />
              at Passion Blend Bar and to be the first to know, follow
              <br className="hidden sm:block" />
              us on Instagram to get our latest offerings.
            </p>
            <div className="">
              <button className="dark:text-white text-[#B5986D] hover:text-[white] border-[#B5986D] hover:bg-[#B5986D]   dark:border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </PhotoProvider>

      <Chef></Chef>
      {/* 4 */}
      <ImageSlide></ImageSlide>
      {/* 5 */}

      <Reservation></Reservation>
      {/* 6 */}
      <ContactUs></ContactUs>
    </>
  );
}
