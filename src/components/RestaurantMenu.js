import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantaMenu from "../utils/useRestaurantaMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showItem, setShowItem] = useState(null);

  const resInfo = useRestaurantaMenu(resId);

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const categories = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

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
      </div>
      <div className="w-1/2 ">
        {categories.map((category, index) => (
          <MenuCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            {/* stae lifting up*/}
            showItem={index === showItem ? true : false}
            setShowItem={() => setShowItem(index)}
          ></MenuCategory>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
