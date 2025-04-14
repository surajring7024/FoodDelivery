import { useContext } from "react";
import { CARD_IMAGE_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import UserContext from "./UserContext";
const RestaurantCard = (props) => {
  const { resdata } = props;

  //use of optional chaining
  const { name, cuisines, avgRating, sla, costForTwo } = resdata?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card m-4 p-4 w-[300px] bg-grey-100 rounded-lg hover:bg-gray-200 transition-all">
      <div className="image-container">
        <img
          src={CARD_IMAGE_URL + resdata.info.cloudinaryImageId}
          className="W-auto h-auto rounded-lg"
        ></img>
      </div>
      <div className="">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr></hr>
        <h4 className="">{cuisines.join()}</h4>
        <h4>
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="">{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withPromotedData = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white">Chinese</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
