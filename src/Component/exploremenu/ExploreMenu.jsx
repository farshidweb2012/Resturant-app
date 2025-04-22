import React from "react";
import "./exploremenu.css";

import { menu_list } from "../../Shop_Asset/menu-list";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore" id="explore-menu">
      <h1 className="explore-title">Explore Our menu</h1>
      <div className="explore-container">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
            className="explore-box"
          >
            <img
              className={category === item.name ? "active" : ""}
              alt={item.name}
              src={item.image}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
