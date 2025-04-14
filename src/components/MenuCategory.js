import React, { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, showItem, setShowItem }) => {
  const clickHandle = () => {
    setShowItem();
  };

  return (
    <div className="space-y-2 my-2 border border-gray-200 rounded-lg ">
      <div className="flex justify-between p-4 shadow  " onClick={clickHandle}>
        <span className="text-lg font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        {showItem ? <span>🔽</span> : <span>🔼</span>}
      </div>

      <div className="">
        {showItem && <ItemList items={data?.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default MenuCategory;
