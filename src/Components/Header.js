import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
           <img className="h-[40px]" src="./enish.png" alt="" />
          </a>
        </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
          <li className=" nav__item item">
            <a className=" nav__link            text-whitek	">Home</a>
          </li>
          <li className="nav__item">
            <a
              href="#platform"
              className="nav__link            text-whitek focus:text-[#738f2d]"
            >
              Menu
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link            text-whitek focus:text-[#738f2d]">
              About Restaurant
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link            text-whitek focus:text-[#738f2d]">
              Wine & Coctailbar
            </a>
          </li>
          
        </ul>
        <div className="flex justify-center px-6">
          {currentTheme === "dark" ? (
            <button className="" onClick={() => setTheme("light")}>
              <img className="w-[40px] h-[40px]" src="./moon.svg" alt="" />
            </button>
          ) : (
            <button className="" onClick={() => setTheme("dark")}>
              <img className="w-[40px] h-[40px]" src="./sun.svg" alt="" />
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
