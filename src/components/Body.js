import RestaurantCard, { withPromotedData } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_DATA_API } from "../utils/constants";

const Body = () => {
  const [restaurantData, setrestaurantData] = useState([]);
  const [filteredRest, setfilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const PromotedRestaurant = withPromotedData(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(RES_DATA_API);

    const json = await apiData.json();

    setrestaurantData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantData.length === 0) {
    return <Shimmer></Shimmer>;
  }
  if (!onlineStatus) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you are offline!
      </h1>
    );
  }

  return (
    <div className="body">
      <div className="flex bg-gray-400">
        <div className="search m-2 p-4">
          <input
            className="searchbox border border-solid border-black bg-white"
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              //console.log(event.target.value);
              // const filteredData =restaurantData.filter(
              //   (res) => res.info.name.toLowerCase().includes(event.target.value.toLowerCase()))
              // setrestaurantData(filteredData);
            }}
          ></input>

          <button
            className="px-4 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              const filteredData = restaurantData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRest(filteredData);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-2 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg "
            onClick={() => {
              const filteredData = restaurantData.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRest(filteredData);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="filter-btn px-4 py-2 bg-gray-100 m-2 rounded-lg "
            onClick={() => {
              const filteredData = restaurantData.filter(
                (res) => res.info.avgRating > 0
              );
              setfilteredRest(filteredData);
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className="rest-container flex flex-wrap">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}
          >
            {restaurant.info.cuisines.includes("Chinese") ? (
              <PromotedRestaurant resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
