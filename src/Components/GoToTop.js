import React, { useEffect, useState } from "react";
import { FaArrowUp,FaAngleDown } from "react-icons/fa";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
  <>
      {isVisible && (
       
           <div className="Top fixed border dark:border-white border-black  top-[90%] sm:top-[90%] z-50 ml-[10px] sm:ml-[0px] right-[30px]  py-5 px-5   top-btn sm:py-8 sm:px-8 rounded-full " onClick={goToBtn}>
          <FaAngleDown  className="dark:text-white text-[20px] sm:text-[30px] delay-200 hover:rotate-180 text-black" />
        </div>
       
      )}
   </>
  );
};


  

export default GoToTop;