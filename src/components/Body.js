import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  
const [newData,setNewData]=useState(data );

    return (
      <div className="body">
        <div className="search">Search</div>
        <button className="btn btn-lg filter-btn "
        onClick={()=>{
          const filteredData =newData.filter((res) => res.info.avgRating > 4)
          setNewData(filteredData);
           // console.log(filteredData);
        } 
        }>Top Rated Restaurant</button>
        <div className="rest-container">
          {
          newData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;