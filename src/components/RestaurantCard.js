import { CARD_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resdata } = props;
  
    //use of optional chaining
    const { name, cuisines, avgRating, sla } = resdata?.info;
    return (
      <div className="res-card">
        <div className="image-container">
          <img
            src={ CARD_IMAGE_URL
               +
              resdata.info.cloudinaryImageId
            }
            className="res-card-img"
          ></img>
        </div>
        <div className="">
          <h3>{name}</h3>
          <h4>{cuisines.join()}</h4>
          <h4>{avgRating}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;