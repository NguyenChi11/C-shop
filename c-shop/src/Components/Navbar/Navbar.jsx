import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../Assets/Data.js";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("navbar-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
      </div>
      <i
        onClick={dropdown_toggle}
        className="fa-solid fa-circle-chevron-down navbar-dropdown"
      ></i>
      <ul ref={menuRef} className="navbar-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("set");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/set">
            Set
          </Link>
          {menu === "set" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shirt");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shirt">
            Shirt
          </Link>
          {menu === "shirt" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/pants">
            Pants
          </Link>
          {menu === "pants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/accessories">
            {" "}
            Accessories
          </Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="navbar-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
