import { createContext, useState } from "react";
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

  console.log(cartItem);

  const removFromCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const contextValue = {
    foodList,
    cartItem,
    setCartItem,
    addToCart,
    removFromCart,
  };
  return (
    <StoredContext.Provider value={contextValue}>
      {props.children}
    </StoredContext.Provider>
  );
};
export default StoredContextProvider;

/////
