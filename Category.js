import React from "react";

function Category({ category, filterItems }) {
  console.log(category);
  return (
    <div className="Btn">
      {category.map((cateegory, index) => {
        return (
          <button
            className="Btn1"
            key={index}
            onClick={() => filterItems(cateegory)}
          >
            {cateegory}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
