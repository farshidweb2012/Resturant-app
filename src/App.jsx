import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Navbar from "./Component/navbar/Navbar";
import PlaceOrders from "./pages/placeorders/PlaceOrders";
import { Footer } from "./Component/footer/Footer";
import { LoginPopup } from "./Component/loginpupop/LoginPopup";
export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : ""}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/palceorder" element={<PlaceOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}
