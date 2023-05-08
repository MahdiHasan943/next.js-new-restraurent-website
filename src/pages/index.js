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
        <div className="py-[50px] px-4 sm:px-0 sm:pl-[50px] lg:pl-[120px] xl:pl-[200px]">
          <p className="MainHeroText mt-[20px]  text-[22px]  leading-[32px]  sm:text-[25px]  sm:leading-[36px]   lg:leading-[48px] lg:text-[32px] ">
            Voted one of the most popular spots in central <br /> Leicester
            thanks to classic British pub food alongside <br /> other
            international favourites, a buzzing atmosphere, <br /> well-stocked
            bar and regular events.
          </p>

          <Form></Form>
        </div>
      </div>
      {/* 2 */}
      <div className="py-[80px] sm:h-[600px] flex items-center px-6  sm:px-0 sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
        <div className="">
          <h1 className="AboutUs text-[36px] leading-[50px]  sm:text-[64px] sm:leading-[96px]  dark:text-white py-4 text-black">
            About Us
          </h1>

          <div className="">
            <p className="AboutP  dark:text-white text-[#4d4d4d]">
              <br className="hidden sm:block" />
              Right opposite Leicester’s main train station, Hind & PB Lounge is
              a gastro pub fit for breakfast, lunch and dinner. On London{" "}
              <br className="hidden sm:block" />
              Road, it’s one of the most popular spots in central Leicester
              thanks to classic British pub food alongside other international{" "}
              <br className="hidden sm:block" />
              favourites, a buzzing atmosphere, well-stocked bar and regular
              events. <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Whether you just want to take the edge off and relax with a coffee
              or go a bit crazy in the early hours, Hind & PB Lounge is fit for
              whatever.
            </p>
            <p className="AboutP dark:text-white text-[#4d4d4d] my-8">
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
