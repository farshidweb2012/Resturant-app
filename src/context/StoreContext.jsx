import { createContext } from "react";
import { foodList } from "../Shop_Asset/Productlist";

export const StoredContext = createContext(null);

const StoredContextProvider = (props) => {
  const contextValue = {
    foodList,
  };
  return (
    <StoredContext.Provider value={contextValue}>
      {props.children}
    </StoredContext.Provider>
  );
};
export default StoredContextProvider;


/////


