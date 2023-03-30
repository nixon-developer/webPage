import React, { useState } from "react";

function List({ navList, filterItems }) {
  const [active, setActive] = useState(0);

  return (
    <div className="portfolio__list">
      {navList.map((category, index) => {
        return (
          <button
            className={`${
              active === index ? "active-work" : ""
            } portfolio__list-item text-cs`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default List;
