import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/Data.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="navbar-logo" />
      <div className="navbar-avatar">
        <img src={assets.avatar} alt="" />
        {/* <i class="fa-solid fa-chevron-down"></i> */}
      </div>
    </div>
  );
};

export default Navbar;
