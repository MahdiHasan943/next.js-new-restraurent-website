import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className=" shadow-none w-[100vw] mt-[20px] mb-[-170px]  py-8 px-6 lg:px-12 nav">
      <div className="flex w-full shadow-none   justify-between md:justify-around ">
        <div className="flex overflow-hidden  items-center">
          <a
            href="#"
            className="lg:ml-[80px]  text-white shadow-none nav__brand PB"
          >
            PASSION BLEND BAR
            {/* <img className="h-[100px] w-[100px]" src="../mainLogo.png"   alt="" /> */}
          </a>
        </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
        <a
            href="#"
            className="border border-white py-10 px-8 rounded-xl MAINLOGO text-white shadow-none nav__brand PB"
          >
            PASSION BLEND BAR
            {/* <img className="h-[100px] w-[100px]" src="../mainLogo.png"   alt="" /> */}
          </a>

          <Link
            className={`${
              router.pathname === "/"
                ? "text-[#b1935e]  nav__link"
                : "nav__link  text-white	"
            } `}
            href={"/"}
            onClick={navToggle}
          >
            <li className=" nav__item item">Home</li>
          </Link>

          <li className="nav__item menu hover:text-[#b1935e]">
            Menu
            <ul className=" subMenu">
              <Link
                className={`${
                  router.pathname === "/Menu/GASTRO"
                    ? "text-[#b1935e]  nav__link"
                    : "nav__link  text-white	"
                } `}
                href={"/Menu/GASTRO"}
                onClick={navToggle}
              >
                <li
                  className="text-center itmeD  nav__item "
                  onClick={navToggle}
                >
                  GASTRO
                </li>
              </Link>

              <Link
                className={`${
                  router.pathname === "/Menu/CONTINENTAL"
                    ? "text-[#b1935e]  nav__link"
                    : "nav__link  text-white	"
                } `}
                href={"/Menu/CONTINENTAL"}
                onClick={navToggle}
              >
                <li className="text-center nav__item itmeD">CONTINENTAL</li>
              </Link>
            </ul>
          </li>
          {/* </Link> */}

          <Link
            className={`${
              router.pathname === "/#event"
                ? "text-[#b1935e] nav__link"
                : "nav__link text-white"
            } 	`}
            href={"/#event"}
            onClick={navToggle}
          >
            {" "}
            <li className="nav__item">Events </li>
          </Link>

          <Link
            className={`${
              router.pathname === "/WineAndCoctail/WineAndCoctail"
                ? "text-[#b1935e] nav__link"
                : "nav__link text-white	"
            } `}
            href={"/WineAndCoctail/WineAndCoctail"}
            onClick={navToggle}
          >
            <li className="nav__item">Wine & Cocktails </li>
          </Link>

          <Link
            className={`${
              router.pathname === "/Contact/Contact"
                ? "text-[#b1935e] nav__link"
                : "nav__link text-white"
            } 	`}
            href={"/Contact/Contact"}
            onClick={navToggle}
          >
            {" "}
            <li className=" nav__item ">Contact </li>
          </Link>
        </ul>
        <div className="flex justify-center px-6">
          {currentTheme === "dark" ? (
            <button className="" onClick={() => setTheme("light")}>
            
              <img
               
                className="origin-center hover:opacity-[0.8] delay-300 sm:hover:rotate-[-100deg] 	 w-[40px] h-[40px]"
                src="/../moon.svg"
                alt=""
              />
            </button>
          ) : (
            <button className="" onClick={() => setTheme("dark")}>
              <img
                className=" sm:hover:motion-safe:animate-spin delay-300  text-[fd6c15] bg-[fd6c15] w-[40px] h-[40px]"
                  src="/../sun.svg"
                 
                alt=""
              />
            </button>
          )}
        </div>
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
