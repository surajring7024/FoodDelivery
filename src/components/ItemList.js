import React from "react";
import { CARD_IMAGE_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.Id}
          className="p-2 border-b-2 border-gray-200 text-left flex justify-between "
        >
          <div className="w-9/12 p-5">
            <span className="font-bold ">{item?.card?.info?.name} - </span>
            <span className="font-bold ">
              Rs-
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </span>
            <div className="mt-5">
              <p className="text-gray-500">{item?.card?.info?.description}</p>
            </div>
          </div>

          <div className="w-3/12 p-2">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <img
                src={CARD_IMAGE_URL + item?.card?.info?.imageId}
                className="object-cover w-full h-full rounded-lg"
                alt="Card"
              />
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-lg px-4 py-1 text-sm shadow-md hover:bg-gray-800">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
