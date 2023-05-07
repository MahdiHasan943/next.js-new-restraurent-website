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
       
           <div className="Top fixed  top-[90%] sm:top-[95%] z-50 ml-[10px] sm:ml-[0px]  sm:right-[30px]     top-btn pb-5 pt-6 px-5 rounded-full " onClick={goToBtn}>
          <FaArrowUp className="hover:rotate-[180deg] animate-bounce transition delay-350 text-white" />
        </div>
       
      )}
   </>
  );
};


  

export default GoToTop;