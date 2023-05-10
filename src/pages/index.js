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
          <h1 className="PassionHero mt-4 text-[65px] leading-[66px] sm:text-[101px] sm:leading-[95%]">PASSION <br />

            BLEND</h1>
          <p className="where my-4">Where The World comes to DANCE & dine</p>
          {/* <Form></Form> */}
        </div>
      </div>
      {/* 2 */}
      <div className="py-[80px] sm:h-[600px] mt-[-170px] bg-[#0B1517] md:w-[75%] md:px-[100px] mx-auto  px-6  ">
      <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px]  text-white py-4 ">
            About Us
          </h1>
        <div className="md:flex gap-8 items-start">
          <div className="md:w-[50%] w-full mx-auto">
          
          <p className="AboutP  text-white ">
          Serving classic British pub food alongside other international favourites. Starters, sides, main, steaks, dessert and lots more. 

We also have wine, Shots & Liqueurs, Passion Blend, Pina Colada, Margarita, Maitai, Manhattan, Sex On The Beach, Vodka, Cosmopolitan,Classic Mojito, Woo – Woo, Passion Coconut, Blue Lagoon, Spirits, Soft Drinks & Juice, Glass Juice, Bottled Beers and lots more...
            </p>
         </div>

          <div className="md:w-[50%] w-full mx-auto">
            
            <p className="AboutP  text-white ">
              Serving classic British pub food alongside other international
              favourites. Starters, sides, main, steaks, dessert and lots more.{" "}
              <br className="hidden sm:block" />
              We also have wine, Shots & Liqueurs, Passion Blend, Pina Colada,
              Margarita, Maitai, Manhattan, Sex On The Beach, Vodka,{" "}
              <br className="hidden sm:block" />
              Cosmopolitan,Classic Mojito, Woo – Woo, Passion Coconut, Blue
              Lagoon, Spirits, Soft Drinks & Juice, Glass Juice, Bottled Beers
              and <br className="hidden sm:block" />
              lots more...
            </p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <PhotoProvider>
        <div className="lg:flex gap-8">
          <div className="">
            <PhotoView src="./HomePageDrinksBg.png">
              <img
                className="sm:h-[762px]  mx-auto w-full lg:w-[836px] "
                src="./HomePageDrinksBg.png"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="px-4 py-20 mx-auto">
            <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px] dark:text-white text-black">
              Happy Hours
            </h1>
            <p className=" dark:text-white text-[28px] sm:text-[36px] text-[#4D4D4D] my-8">
              Drinks & Cocktails
            </p>
            <p className="AboutP dark:text-white text-[#4d4d4d] my-8">
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

      <HomePageMenu></HomePageMenu>

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
