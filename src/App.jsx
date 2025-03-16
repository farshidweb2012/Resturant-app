import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Navbar from "./Component/navbar/Navbar";
import PlaceOrders from "./pages/placeorders/PlaceOrders";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/palceorder" element={<PlaceOrders /> } />
      </Routes>
    </div>
  );
}


