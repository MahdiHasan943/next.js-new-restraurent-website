import Link from "next/link";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../styles/Home.module.css";
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
    <div className="  heroBg flex  h-[120vh] justify-start items-center">
      <div className="py-[50px] px-4 sm:px-0 sm:pl-[50px] lg:pl-[100px] xl:pl-[150px]">
        <p className="MainHeroText text-[22px]  leading-[32px]  sm:text-[25px]  sm:leading-[36px]   lg:leading-[48px] lg:text-[32px] ">
          Voted one of the most popular spots in central <br /> Leicester thanks to
          classic British pub food alongside <br /> other international favourites, a
          buzzing atmosphere, <br /> well-stocked bar and regular events.
        </p>
        <button className="text-white mt-[50px]  border-white border-[1.6px] px-8 py-4 rounded-2xl font-bold bookNow">Book Now</button>
      </div>
      </div>
      {/* 2 */}

      <div className="">
        <h2 className="text-[red]">


          Hello world
        </h2>
      </div>
    
    </>
  );
}
