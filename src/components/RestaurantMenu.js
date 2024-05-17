import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    const data = fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);

    const jsonData = await data.json();
    // console.log(jsonData);
    setResInfo(jsonData);
  };

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  //console.log(cards);

  const { itemCards } = cards[2].card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",  ")}-{"Rs." + costForTwo / 100}
      </p>
      <h2>Manu</h2>
      <h3>{cards[1].card.card.title}</h3>
      <ul>
        {itemCards.map((menuCard) => (
          <li key={menuCard?.card?.info?.id}>
            {menuCard?.card?.info?.name}- RS.{menuCard?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
