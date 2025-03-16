import React, { useState } from "react";
import "./navbar.css";

import logo from "../../Shop_Asset/logo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <ul className="nav-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home{" "}
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </li>
      </ul>
      <div className="navbar-search-login">
        <FontAwesomeIcon className="nav-search" icon={faSearch} />

        <FontAwesomeIcon className="nav-cart" icon={faCartFlatbed} />
        <button className="nav-btn">signin</button>
      </div>
    </div>
  );
};

export default Navbar;
