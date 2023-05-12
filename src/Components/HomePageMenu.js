import React from "react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const HomePageMenu = () => {
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
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 mb-20 text-4xl sm:text-[40px] text-black">
                    Grilled Fish
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Tilapia
                      </p>
                      <p className="dark:text-white text-black py-5  text-[17px]">
                        serve with African spiced fish sauce, <br /> salad, and
                        plantain or potato wedges
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Super Grilled Tilapia
                      </p>
                      <p className="dark:text-white text-black  py-4 text-[17px]">
                        Served with African spiced Fish sauce, <br /> salad and
                        plantain or pota
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      133$
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Cod Fish
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Beer battered fish with Chips, pea and <br /> homemade
                        tartar sauce
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Prawns
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with garnish or vegetable
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* 2 */}
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle  dark:text-white mt-5 mb-20 text-4xl sm:text-[40px] text-black">
                    Breakfast
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Full English
                      </p>
                      <p className="dark:text-white text-black py-5  text-[17px]">
                        Two Pork sausages, bacon tomato beans, <br /> mushrooms
                        and eggs served with a side of toast
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Vegetarian Breakfast
                      </p>
                      <p className="dark:text-white text-black  py-4 text-[17px]">
                        Eggs, mushrooms, tomato, fresh made hash brown and beans
                        served with a side of toast.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      133$
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Eggs and Toast
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with your choice of fried, scrambled or poached.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        All Day Full English
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        pork sausages, bacon, tomato, beans, <br /> mushrooms
                        and eggs served with a side of toast.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 3 */}

              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Lunch
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Club Sandwich
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Chicken, bacon lettuce and tomato with mayo
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        BLT
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Chicken, bacon lettuce and tomato with mayo
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      133$
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Tuna Melt
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Grilled bacon with lettuce and tomato <br /> in a thick
                        cut Sandwich with mayo
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Wraps
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Roasted vegetable wrap dressed in basil Chicken wrap
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Sandwiches
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Sausage and onion or Bacon sandwich. All served with a
                        choice homemade hand cut chips
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Grilled Meat
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Steak
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with bbq sauce, salad, and homemade hand cut
                        chips
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Peri Peri Chicken
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with peri-peri sauce, homemade hand cut Chips or
                        Salad
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      133$
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Pork Ribs
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with bbq sauce, and Salad
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Lamb Ribs
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with bbq sauce, and Salad
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Homemade Beef Burger
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served in toasted brioche burn with lettuce, mayonnaise,
                        tomato, onion and side hand cut chips
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>
                  {/* 6 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Grilled Chicken Burger
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served in burn with lettuce, mayonnaise, tomato, onion
                        and side hand cut hand cut chips
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Mains
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Spicy Chicken wings
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with smoky/chilli mayo and French fries (GF)
                        Homemade pie of the Day. Our freshly made amazing pies
                        served with creamy mash potatoes, steamed veg and
                        homemade gravy.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Traditional Fish and Chips
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with tartar sauce and buttery mushy peas
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 3 */}

                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Beef Burger
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Homemade beef patty served in grilled brioche bun with
                        fresh leaf, tomatoes ,mayo, ketchup and French fries PB
                        Beef Burger
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Chicken burger
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Marinated chicken breast served in brioche bun, Fresh
                        leaf, tomatoes, mayo, ketchup and french fries
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Veggie Burger{" "}
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with hand cut Chips
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      68$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Suya
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Small Beef Suya
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with onion, tomato and spiced suya pepper.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Large Beef Suya
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with onion, tomato and spiced suya pepper.
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 3 */}

                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Chicken Suya
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with onion, tomato and spiced suya pepper{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Beef Jolof Rice
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with plantain, assorted meat and salad{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Chicken Jolof Rice{" "}
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with Rice and Chicken (Students)
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      68$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Sides{" "}
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Chips and Dips
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        French fries with choice of dips (VG) (G)
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Sweet Potato Fries
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Rosemary, garlic, Dijon mustard, herbs, pistachios
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      133$
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Hand cut Chips
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Rubbed with rosemary, lemon and served with
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Caesar Salad
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Iceberg lettuce, cherry tomatoes, parmesan dressing with
                        crouton and crispy bacon
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Baked Camembert{" "}
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with garlic bread sticks and caramelise{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>
                  {/* 6 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Garlic Bread Sticks{" "}
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Freshly made extra crunchy sticks with choice of dips{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 8 */}

              <SwiperSlide className=" mt-[50px]">
                <SwiperNavButtons></SwiperNavButtons>

                <div className="absolute top-[100px] sm:top-0 overflow-hidden right-8 sm:right-0 w-[90%]  sm:w-[500px]  h-[790px] px-10 py-20 rounded-2xl bg-[#B5986D]">
                  <h4 className="text-center menuCardTitle dark:text-white mt-5 text-4xl text-black">
                    Dessert
                  </h4>
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Homemade Crumble
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Chef fresh seasonal fruits crunchy crumble, serve with
                        warm custard or ice cream{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      90$
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Chef Flavour Cheesecake of the Day
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Selection of ice creams with homemade shortbread cookies{" "}
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      299$
                    </p>
                  </div>
                  {/* 3 */}

                  {/* 4 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Baileys Bread and Butter Pudding
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Served with vanilla ice cream{" "}
                      </p>{" "}
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      310$
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Sticky Toffee Pudding
                      </p>
                      <p className="dark:text-white text-black  text-[17px]"></p>
                      Homemade sticky toffee with toffee sauce and vanilla ice
                      creams{" "}
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      230$
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="flex sm:px-10 mt-[20px] items-center justify-between">
                    <div className="">
                      <p className="dark:text-white text-black font-bold text-[20px]">
                        Apple Tart{" "}
                      </p>
                      <p className="dark:text-white text-black  text-[17px]">
                        Amazing Apple tart served with cinnamon ice creams and
                        cream
                      </p>
                    </div>
                    <p className="dark:text-white text-black font-bold text-[20px]">
                      68$
                    </p>
                  </div>
                </div>
              </SwiperSlide>
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
