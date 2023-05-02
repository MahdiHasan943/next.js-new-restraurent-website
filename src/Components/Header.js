import React, { useState, useEffect } from 'react';
// import sun from '../public/sun.svg'
// import moon from '../public/moon.svg'

import { useTheme } from 'next-themes';
function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  
  // const menu = (
  //   <React.Fragment>
     
  //   </React.Fragment>
  // );

  return (
    <nav className="overflow-hidden shadow-none w-[1000px]  py-12 px-6 lg:px-12 nav">
      
      <div className="flex w-full shadow-none justify-between md:justify-around ">
        <div className="">
        <a href="#" className="lg:ml-[80px] dark:text-[white] text-black shadow-none nav__brand">
        ClearTouch Design
      </a>
      </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
        <li className=" nav__item item">
        <a 
          className=" nav__link 	">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#platform" className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          Locations
        </a>
      </li>
      <li className="nav__item">
        <a  className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          What's On
        </a>
      </li>
      <li className="nav__item">
        <a  className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          Order
        </a>
      </li>
      <li className="nav__item">
        <a  className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          Book a Table
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          Enish Yacht Experience
        </a>
      </li>
      <li className="nav__item">
        <a  className="nav__link dark:text-[white] text-black focus:text-[#738f2d]">
          More
        </a>
      </li>
        </ul>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >     
              Sun
             
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
              >
                DArk
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
