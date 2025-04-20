import { useContext } from "react";
import { StoredContext } from "../../context/StoreContext";
import "./fooddisplay.css";

import FoodItem from "../fooditem/FoodItem";

const Fooddisplay = ({ category }) => {
  const { foodList } = useContext(StoredContext);

  return (
    <div className="food-display">
      <h2>top dishes near you</h2>
      <div className="food-displaylist">
        {foodList.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              category={item.catagory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
