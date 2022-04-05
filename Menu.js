import React from "react";
import "./App.css";
import Category from "./Category";
function Menu({ items, deletItems }) {
  return (
    <div className="MenuItms">
      {items.map((menus, i) => {
        const { id, title, img, desc, category, price } = menus;
        return (
          <div key={i} className="section_items">
            <img src={img} alt={title} className="photo" />
            <h1>Category :- {category}</h1>
            <h2>{title}</h2>
            <h2>Price:-${price}</h2>
            <h3>{desc}</h3>
            <button className="deletBtn" onClick={() => deletItems(id)}>
              Not interested
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
