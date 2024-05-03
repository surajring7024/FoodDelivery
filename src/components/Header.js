import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
let [btnName,setBtnName] = useState("Login")

    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} className="images" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="btn-login" onClick={()=>{
              btnName==="Login" 
              ?setBtnName("Logout")
              :setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;