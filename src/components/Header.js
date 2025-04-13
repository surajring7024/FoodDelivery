import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="">
      <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 fond-[500] pr-2">
        <div className="logo-container">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={LOGO_URL} alt="Logo" className="w-35 mx-6 mt-2 mb-2" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">Online status {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
          </ul>
          <button
            className="flex w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
