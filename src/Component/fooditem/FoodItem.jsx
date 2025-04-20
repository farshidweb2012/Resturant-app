import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fooditem.css";

import { useContext } from "react";
import { StoredContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, image, category }) => {
  const { cartItem, addToCart, removFromCart } = useContext(StoredContext);

  console.log(cartItem[id]);
  console.log(cartItem[name]);

  return (
    <div className="fooditem">
      <div className="foodtem-image-container">
        <img className="fooditem-image" src={image} alt={name} />
      </div>

      {!cartItem[id] ? (
        <FontAwesomeIcon
          onClick={() => addToCart(id)}
          icon={faPlus}
          className="first-icon"
        />
      ) : (
        <div className="item-counter-icon-afterClick">
          <FontAwesomeIcon
            className="mines-icon"
            onClick={() => removFromCart(id)}
            icon={faSubtract}
          />
          <p style={{ fontSize: "1.5rem" }}>{cartItem[id]}</p>
          <FontAwesomeIcon
            className="plus-icon"
            onClick={() => addToCart(id)}
            icon={faPlus}
          />
        </div>
      )}

      <div className="fooditem-info">
        <div className="fooditem-info">
          <h3 className="fooditem-info-name">{name}</h3>
        </div>
        <h3 className="fooditem-info-price">${price}</h3>
      </div>
    </div>
  );
};

export default FoodItem;
