import React, { useContext } from "react";
import "./cart.css";

import { StoredContext } from "../../context/StoreContext";
const Cart = () => {
  const { foodList, cartItem ,removFromCart,getTotalCArtAmount} = useContext(StoredContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p> Price</p>
          <p> Quantity</p>
          <p>Total</p>
          <p>remove </p>
        </div>
        <hr />
        {foodList.map((item, index) => {
          if (cartItem[item.id] > 0) {
            return (
              <div key={index} className="cart-items-title cart-item-item">
                <img
                  style={{ width: "5rem", height: "5rem" }}
                  src={item.image}
                  alt="item-image "
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item.id]}</p>
                <p>{item.price * cartItem[item.id]}</p>
                <button onClick={()=>removFromCart(item.id)} className="remove-from-cart">remove</button>
              </div>
            );
          }
        })}
      </div>
      <p>getTotalCArtAmount :{ getTotalCArtAmount() }</p>
    </div>
  );
};

export default Cart;
