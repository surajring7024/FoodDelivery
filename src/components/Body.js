import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setrestaurantData] = useState([]);
  const [filteredRest, setfilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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

  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search-input"
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
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filteredData = restaurantData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRest(filteredData);
          }}
        >
          search
        </button>

        <button
          className="filter-btn "
          onClick={() => {
            const filteredData = restaurantData.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantData(filteredData);
            // console.log(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
