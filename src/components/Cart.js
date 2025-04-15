import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex items-center text-center p-4 m-4 ">
        <div className="w-4/12 m-auto">
          <span className="text-2xl font-bold">Cart</span>
          <button
            className="bottom-2 left-1/2 m-4  bg-black text-white rounded-lg px-4 py-2 text-sm shadow-md hover:bg-gray-800"
            onClick={handleClearCart}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="text-center w-6/12 m-auto">
        {cartItems.length === 0 && <h1>Cart is empty, please add items</h1>}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
