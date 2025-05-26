import React, { useState } from "react";
import "./navbar.css";

import logo from "../../Shop_Asset/logo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
    <Link to='/'>  <img className="nav-logo" src={logo} alt="logo" /></Link>
      <ul className="nav-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home{" "}
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-downlaod"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-search-login">
        <FontAwesomeIcon className="nav-search" icon={faSearch} />

       <Link to='/cart'> <FontAwesomeIcon className="nav-cart" icon={faCartShopping} /></Link>
        <button onClick={() => setShowLogin(true)} className="nav-btn">
          signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
