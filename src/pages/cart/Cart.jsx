import React, { useContext } from "react";
import { StoredContext } from "../../context/StoreContext";
const Cart = () => {
  const { foodList, cartItem, removFromCart } = useContext(StoredContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p> Price</p>
          <p> Quantity</p>
          <p>Total</p>
        </div>
        <hr/>
        {foodList.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(<div className="cart-items-title cart-item-item">

            </div>)
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
