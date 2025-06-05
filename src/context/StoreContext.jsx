import { createContext, useEffect, useState } from "react";
import { foodList } from "../Shop_Asset/Productlist";

export const StoredContext = createContext(null);

const StoredContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemid) => {
    if (!cartItem[itemid]) {
      setCartItem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const removFromCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const getTotalCArtAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = foodList.find((product) => product.id === item);
        totalAmount += itemInfo?.price * cartItem[item];
      }
    }
     console.log(totalAmount)
    return totalAmount;
   
  };
  const contextValue = {
    foodList,
    cartItem,
    setCartItem,
    addToCart,
    removFromCart,
    getTotalCArtAmount,
  };
  return (
    <StoredContext.Provider value={contextValue}>
      {props.children}
    </StoredContext.Provider>
  );
};
export default StoredContextProvider;

/////
