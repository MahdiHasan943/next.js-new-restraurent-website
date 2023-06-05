import React from "react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const HomePageMenu = () => {
  const menuCards = [
    {
      id: "1",
      title: "Grilled Fish",

      p1Title: "Grilled Tilapia",
      p1Text:
        "serve with African spiced fish sauce,  salad, and plantain or potato wedges ",
      p1Price: "",

      p2Title: " Super Grilled Tilapia",
      p2Text:
        " Served with African spiced Fish sauce,        salad and plantain or pota ",
      p2Price: " ",

      p3Title: "  Cod Fish",
      p3Text:
        " Beer battered fish with Chips, pea and        homemade tartar sauce",
      p3Price: " ",

      p4Title: "",
      p4Text: " ",
      p4Price: " ",
    },
    {
      id: "2",
      title: "Breakfast",

      p1Title: "Full English",
      p1Text:
        "Two Pork sausages, bacon tomato beans, mushrooms and eggs served with a side of toast",
      p1Price: "",

      p2Title: " Vegetarian Breakfast",
      p2Text:
        " Eggs, mushrooms, tomato, fresh made hash brown and beans served with a side of toast. ",
      p2Price: " ",

      p3Title: "  Eggs and Toast",
      p3Text: " Served with your choice of fried, scrambled or poached.",
      p3Price: " ",

      p4Title: "All Day Full English",
      p4Text:
        " pork sausages, bacon, tomato, beans, mushrooms and eggs served with a side of toast.",
      p4Price: " ",
    },
    {
      id: "3",
      title: "Lunch",

      p1Title: "Club Sandwich",
      p1Text: "Chicken, bacon lettuce and tomato with mayo",
      p1Price: "",

      p2Title: "BLT",
      p2Text: " Chicken, bacon lettuce and tomato with mayo ",
      p2Price: " ",

      p3Title: " Tuna Melt",
      p3Text:
        " Grilled bacon with lettuce and tomato in a thick cut Sandwich with mayo",
      p3Price: " ",

      p4Title: "Wraps",
      p4Text: " Roasted vegetable wrap dressed in basil Chicken wrap",
      p4Price: " ",

      p5Title: "Sandwiches",
      p5Text:
        "Sausage and onion or Bacon sandwich. All served with a choice homemade hand cut chips",
      p5Price: " ",
    },
    {
      id: "4",
      title: "Grilled Meat",

      p1Title: "Grilled Steak",
      p1Text: "Served with bbq sauce, salad, and homemade hand cut chips",
      p1Price: "",

      p2Title: " Grilled Peri Peri Chicken",
      p2Text: " Served with peri-peri sauce, homemade hand cut Chips or Salad",
      p2Price: " ",

      p3Title: "  Grilled Pork Ribs",
      p3Text: " Served with bbq sauce, and Salad",
      p3Price: " ",

      p4Title: "Grilled Lamb Ribs",
      p4Text: " Served with bbq sauce, and Salad",
      p4Price: " ",

      p5Title: "Grilled Homemade Beef Burger",
      p5Text:
        " Served in toasted brioche burn with lettuce, mayonnaise, tomato, onion and side hand cut chips",
      p5Price: " ",

      p6Title: "Grilled Chicken Burger",
      p6Text: "  Served in burn with lettuce mayonnaise, tomato .",
      p6Price: " ",
    },
    {
      id: "5",
      title: "Mains",

      p1Title: "Spicy Chicken wings",
      p1Text:
        "Served with smoky/chilli mayo and French fries (GF) Homemade pie of the Day. Our freshly made amazing pies served with creamy mash potatoes, steamed veg and homemade gravy.",
      p1Price: "",

      p2Title: "Traditional Fish and Chips",
      p2Text: "Served with tartar sauce and buttery mushy peas ",
      p2Price: " ",

      p3Title: "  Beef Burger",
      p3Text:
        " Homemade beef patty served in grilled brioche bun with fresh leaf, tomatoes ,mayo, ketchup and French fries PB Beef Burger",
      p3Price: " ",

      p4Title: "Chicken burger",
      p4Text:
        " Marinated chicken breast served in brioche bun, Fresh leaf, tomatoes, mayo, ketchup and french fries",
      p4Price: " ",

      p5Title: "Veggie Burger",
      p5Text: "  Served with hand cut Chips",
      p5Price: " ",
    },
    {
      id: "6",
      title: "Suya",

      p1Title: "Small Beef Suya ",
      p1Text: "Served with onion, tomato and spiced suya pepper.",
      p1Price: "",

      p2Title: "Large Beef Suya ",
      p2Text: "Served with onion, tomato and spiced suya pepper. ",
      p2Price: " ",

      p3Title: "  Chicken Suya ",
      p3Text: " Served with onion, tomato and spiced suya pepper",
      p3Price: " ",

      p4Title: "Beef Jolof Rice",
      p4Text: "  Served with plantain, assorted meat and salad",
      p4Price: " ",

      p5Title: "Chicken Jolof Rice",
      p5Text: "  Served with Rice and Chicken (Students)",
      p5Price: " ",
    },
    {
      id: "7",
      title: "Sides",

      p1Title: "Chips and Dips",
      p1Text: "French fries with choice of dips (VG) (G) ",
      p1Price: "",

      p2Title: " Sweet Potato Fries  ",
      p2Text: " Rosemary, garlic, Dijon mustard, herbs, pistachios",
      p2Price: " ",

      p3Title: "  Hand cut Chips      ",
      p3Text: "Rubbed with rosemary, lemon and served with",
      p3Price: " ",

      p4Title: "Caesar Salad      ",
      p4Text:
        " Iceberg lettuce, cherry tomatoes, parmesan dressing with crouton and crispy bacon",
      p4Price: " ",

      p5Title: "Baked Camembert",
      p5Text: " Served with garlic bread sticks and caramelise",
      p5Price: " ",

      p6Title: "Garlic Bread Sticks",
      p6Text: "  Freshly made extra crunchy sticks with choice of dips",
      p6Price: " ",
    },
    {
      id: "8",
      title: "Dessert",

      p1Title: "Homemade Crumble",
      p1Text:
        "Chef fresh seasonal fruits crunchy crumble, serve with warm custard or ice cream",
      p1Price: "",

      p2Title: " Chef Flavour Cheesecake of the Day",
      p2Text: " Selection of ice creams with homemade shortbread cookies",
      p2Price: " ",

      p3Title: "  Baileys Bread and Butter Pudding",
      p3Text: "Served with vanilla ice cream",
      p3Price: " ",

      p4Title: "Sticky Toffee Pudding",
      p4Text:
        "  Homemade sticky toffee with toffee sauce and vanilla ice creams",
      p4Price: " ",

      p5Title: "Apple Tart",
      p5Text: " Amazing Apple tart served with cinnamon ice creams and cream",
      p5Price: " ",
    },
  ];
  return (
    <PhotoProvider>
      <div className="md:flex pt-20 md:pt-[100px]  pb-20 h-full overflow-hidden ">
        <div className="relative h-full  md:w-[30%]">
          <h1 className="text-[36px] lg:text-[60px] sm:text-[40px]   text-center   lg:text-end mr-4 dark:text-white text-black font-bold">
            Our Menu
          </h1>
          <div className=" sm:w-auto  md:mr-[-300px] h-[1000px] sm:h-[900px]    lg:mr-[-200px]">
            <Swiper
              className="relative"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={100}
              slidesPerView="auto"
            >
              {menuCards.map((menuCard) => (
                <SwiperSlide key={menuCard.id} className=" mt-[50px]">
                  <SwiperNavButtons></SwiperNavButtons>

                  <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                    <h4 className="text-center menuCardTitle dark:text-white mt-5 mb-20 text-4xl sm:text-[40px] text-black">
                      {menuCard?.title}
                    </h4>
                    <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard?.p1Title}
                        </p>
                        <p className="dark:text-white text-black py-5  text-[17px]">
                          {menuCard?.p1Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p1Price}
                      </p>
                    </div>
                    {/* 2 */}
                    <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard?.p2Title}
                        </p>
                        <p className="dark:text-white text-black  py-4 text-[17px]">
                          {menuCard?.p2Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p2Price}
                      </p>
                    </div>
                    {/* 3 */}
                    <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard.p3Title}
                        </p>
                        <p className="dark:text-white text-black  text-[17px]">
                          {menuCard?.p3Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p3Price}
                      </p>
                    </div>
                    {/* 4 */}
                    <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard?.p4Title}
                        </p>
                        <p className="dark:text-white text-black  text-[17px]">
                          {menuCard?.p4Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p4Price}
                      </p>
                    </div>
                    {/* 5 */}
                    <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard?.p5Title}
                        </p>
                        <p className="dark:text-white text-black  text-[17px]">
                          {menuCard?.p5Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p5Price}
                      </p>
                    </div>
                    {/* 6 */}
                    <div className="flex mt-10 sm:px-10  items-center justify-between">
                      <div className="">
                        <p className="dark:text-white text-black font-bold text-[20px]">
                          {menuCard?.p6Title}
                        </p>
                        <p className="dark:text-white text-black  text-[17px]">
                          {menuCard?.p6Text}
                        </p>
                      </div>
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        {menuCard?.p6Price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full   md:w-[70%] h-[100%]">
          <PhotoView src="./HomePageMenu.png">
            <img
              className=" w-[969px] sm:h-[821px]"
              src="./HomePageMenu.png"
              alt=""
            />
          </PhotoView>
        </div>
      </div>
    </PhotoProvider>
  );
};
export default HomePageMenu;
