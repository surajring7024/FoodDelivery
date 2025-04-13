import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utils/constants";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantaMenu from "../utils/useRestaurantaMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantaMenu(resId);

  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const { itemCards } = cards[2].card?.card;

  return (
    <div className="flex flex-col items-center space-y-6 py-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-600">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <hr className="w-1/3 border-gray-300" />

      <div className="text-center">
        <h2 className="text-xl font-semibold">Menu</h2>
        <h3 className="text-md text-gray-700">{cards[1].card.card.title}</h3>
      </div>

      <hr className="w-1/3 border-gray-300" />

      <div>
        <ul className="space-y-2">
          {itemCards.map((menuCard) => (
            <li
              key={menuCard?.card?.info?.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg border border-gray-200"
            >
              <span className="font-medium text-gray-800">
                {" "}
                {menuCard?.card?.info?.name}
              </span>
              <span className="text-gray-600 font-semibold">
                ₹
                {menuCard?.card?.info?.price / 100 ||
                  menuCard?.card?.info?.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
