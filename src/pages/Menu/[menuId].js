import Reservation from "@/Components/Reservation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const menuDetails = () => {
  const router = useRouter();

  const menuId = router.query.menuId;
  const menuCards = [
    {
      id: "1",
      name: "Soup Meals",
      image: "../Msoup.png",
      bg: "../SoupMHero.png",
    },
    {
      id: "2",
      name: "Breakfast",
      image: "../Breakfast.png",
      bg: "../BMHero.png",
    },
    {
      id: "3",
      name: "Grill",
      image: "../Grill.png",
      bg: "../MGrill.png",
    },
    {
      id: "4",
      name: "Rice Meal",
      image: "../RiceMeal.png",
      bg: "../MRiceMeal.png",
    },
    {
      id: "5",
      name: "Dessert",
      image: "../Dessert.png",
      bg: "../MDessert.png",
    },
    {
      id: "6",
      name: "Starterts",
      image: "../Starterts.png",
      bg: "../MStarters.png",
    },
    {
      id: "7",
      name: "Small Choap",
      image: "../SmallChoap.png",
      bg: "../MRiceMeal.png",
    },
    {
      id: "8",
      name: "Salad",
      image: "../Salad.png",
      bg: "../MSalad.png",
    },
  ];
  const filtered = menuCards.filter((card) => {
    return card.id === menuId;
  });
  const [loading, setLoading] = useState();

  return (
    <div className="">
      {loading ? (
        <h1>..lading</h1>
      ) : (
        <>
          <div className=" w-full ">
            <div className="">
              {filtered.map((card) => (
                <div className="" key={card.id}>
                  <div
                    className="h-[550px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full"
                    style={{ backgroundImage: `url(${card.bg})` }}
                  >
                    <div className=" flex justify-center h-full items-center">
                      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
                        MENU
                      </h1>
                    </div>
                  </div>

                  <div className=" py-20  flex items-center px-6   sm:pl-[50px] lg:pl-[100px] xl:pl-[170px]">
                    <div className="">
                      <p className="mealDetailsText pb-[100px] underline-offset-[20px]">
                        {card.name}
                      </p>

                      <div className="xl:w-[960px] mx-auto">
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                              Sable fish with Saffron Ristto
                            </p>
                            <p className="MDPText text-[#B5986D]">£44</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          <p className="MDPText dark:text-white text-black ">
                            {" "}
                            Ristto
                          </p>
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                            Baked with basil, saffron, lemon juice, white wine,
                            onion, garlic and tomato, served with white
                            asparagus
                          </p>
                        </div>
                        {/* 2 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                              Roasted Rack of Lamb
                            </p>
                            <p className="MDPText  py-4 text-[#B5986D]">£59</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                          <p className="MDSPText dark:text-[#ffffffb3] text-black">
                            Rosemary, garlic, Dijon mustard, herbs, pistachios
                          </p>
                        </div>
                        {/* 3 */}
                        <div className="">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Cornish Game Hen
                            </p>
                            <p className="MDPText text-[#B5986D]">£67</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                         
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Rubbed with rosemary, lemon and served with porcini mushroom risotto
                          </p>
                        </div>

                        {/* 4 */}
                        <div className="py-20">
                          <div className="flex justify-between px-2">
                            <p className="MDPText dark:text-white text-black ">
                            Veal Porterhouse Chop
                            </p>
                            <p className="MDPText text-[#B5986D]">£54</p>
                          </div>
                          <img
                            className="py-2 w-full"
                            src="../MDLine.png"
                            alt=""
                          />
                        
                          <p className="MDSPText py-4 dark:text-[#ffffffb3] text-black">
                          Milk fed center cut from the loin, rubbed with rosemary, lemon juicce, extra virgin olive oil
                          </p>
                        </div>

                      
                       
                      </div>
                    </div>
                  </div>

                  <Reservation></Reservation>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default menuDetails;
