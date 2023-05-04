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
    <nav className="overflow-hidden  shadow-none w-[100vw] mt-[30px] mb-[-150px]  py-8 px-6 lg:px-12 nav">
      <div className="flex w-full shadow-none justify-between md:justify-around ">
        <div className="flex items-center">
          <a
            href="#"
            className="lg:ml-[80px]            text-whitek shadow-none nav__brand"
          >
            <img className="h-[40px]" src="../enish.png" alt="" />
          </a>
        </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
          <li className=" nav__item item">
            <Link
              className={`${
                router.pathname === "/" ? "text-[#b1935e]" : ""
              } nav__link text-white	`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`${
                router.pathname === "/Menu/Menu" ? "text-[#b1935e]" : ""
              } nav__link text-white	`}
              href={"/Menu/Menu"}
            >
              Menu
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`${
                router.pathname === "/Events/Events" ? "text-[#b1935e]" : ""
              } nav__link text-white	`}
              href={"/Events/Events"}
            >
              Events
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className={`${
                router.pathname === "/WineAndCoctail/WineAndCoctail"
                  ? "text-[#b1935e]"
                  : ""
              } nav__link text-white	`}
              href={"/WineAndCoctail/WineAndCoctail"}
            >
              Wine & Cocktails
            </Link>
          </li>
          <li className=" nav__item item">
            <Link
              className={`${
                router.pathname === "/Contact/Contact" ? "text-[#b1935e]" : ""
              } nav__link text-white	`}
              href={"/Contact/Contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center px-6">
          {currentTheme === "dark" ? (
            <button className="" onClick={() => setTheme("light")}>
              <img className="w-[40px] h-[40px]" src="../moon.svg" alt="" />
            </button>
          ) : (
            <button className="" onClick={() => setTheme("dark")}>
              <img className="w-[40px] h-[40px]" src="../sun.svg" alt="" />
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
