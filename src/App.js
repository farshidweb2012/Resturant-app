import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/home/Cart";
import Navbar from "./Component/navbar/Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
