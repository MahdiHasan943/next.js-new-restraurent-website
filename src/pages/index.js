import Link from "next/link";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../styles/Home.module.css";
import HomePageMenu from "@/Components/HomePageMenu";
import Chef from "@/Components/Chef";
import Reservation from "@/Components/Reservation";
import ContactUs from "@/Components/ContactUs";
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
      <div className="  heroBg flex h-[130vh] sm:h-[110vh] justify-start items-center">
        <div className="py-[50px] px-4 sm:px-0 sm:pl-[50px] lg:pl-[100px] xl:pl-[150px]">
          <p className="MainHeroText text-[22px]  leading-[32px]  sm:text-[25px]  sm:leading-[36px]   lg:leading-[48px] lg:text-[32px] ">
            Voted one of the most popular spots in central <br /> Leicester
            thanks to classic British pub food alongside <br /> other
            international favourites, a buzzing atmosphere, <br /> well-stocked
            bar and regular events.
          </p>
          <button className="text-white hover:bg-[#B5986D] mt-[90px]  border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
            Book Now
          </button>
        </div>
      </div>
      {/* 2 */}
      <div className="py-[80px]  px-4  sm:px-0 sm:pl-[50px] lg:pl-[100px] xl:pl-[150px]">
        <h1 className="AboutUs dark:text-white text-black">About Us</h1>

        <div className="">
          <p className="AboutP dark:text-white text-[#4d4d4d]">
            <br className="hidden sm:block" />
            Right opposite Leicester’s main train station, Hind & PB Lounge is a
            gastro pub fit for breakfast, lunch and dinner. On London{" "}
            <br className="hidden sm:block" />
            Road, it’s one of the most popular spots in central Leicester thanks
            to classic British pub food alongside other international{" "}
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
            favourites. Starters, sides, main, steaks, dessert and lots more.             <br className="hidden sm:block" />
  We
            also have wine, Shots & Liqueurs, Passion Blend, Pina Colada,
            Margarita, Maitai, Manhattan, Sex On The Beach, Vodka,            <br className="hidden sm:block" />

            Cosmopolitan,Classic Mojito, Woo – Woo, Passion Coconut, Blue
            Lagoon, Spirits, Soft Drinks & Juice, Glass Juice, Bottled Beers and             <br className="hidden sm:block" />

            lots more...
          </p>
        </div>
      </div>

      {/* 3 */}
      <img className="w-full" src="./HomePageDrinksBg.png" alt="" />

      <HomePageMenu></HomePageMenu>

      <Chef></Chef>
      {/* 4 */}
      <div className="flex justify-between w-full gap-8 items-center">
        <div className="">
        <img className="w-full" src="./FoxhutBar.png" alt="" />

        </div>
        <div className="">
        <img className="w-full" src="./Mangoma.png" alt="" />

        </div>
        <div className="">
        <img className="w-full" src="./Shayo.png" alt="" />

        </div>
        </div>
      {/* 5 */}

      <Reservation></Reservation>
      {/* 6 */}
      <ContactUs></ContactUs>

      
    </>
  );
}
