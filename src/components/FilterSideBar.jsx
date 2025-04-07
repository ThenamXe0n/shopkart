import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const FilterSideBar = ({
  category = ["toy", "perfumes", "health", "gift", "kitchen", "sports"],
  brands = ["nike", "addidas", "puma", "redtap", "spark", "mi", "samsung"],
  setFilter,
  filter
}) => {
  function handleToggleSubMenu(e) {
    e.target.nextSibling.classList.toggle("hidden");
  }

  return (
    <div className="w-full p-2">
      {/* ---------------------category----------------- */}
      <div id="category-container " className="w-full my-2">
        {" "}
        <h3
          onClick={handleToggleSubMenu}
          className="px-3 py-[3px] flex items-center justify-between bg-gray-200"
        >
          Category <FaAngleDoubleDown />
        </h3>
        <div id="category-sub">
          {category.map((cateItem, cateIdx) => (
            <div
              id="category-sub"
              className="flex items-center justify-between pr-5"
              key={cateIdx}
            >
              {" "}
              <h4 className="capitalize translate-x-2"> - {cateItem}</h4>
              <input type="checkbox" id={cateItem} name={cateItem} />
            </div>
          ))}
        </div>{" "}
      </div>

      {/* ------------------------price------------------- */}
      <div id="price-container" className="w-full my-2">
        <h3
          onClick={handleToggleSubMenu}
          className="px-3 py-[3px] flex items-center justify-between bg-gray-200"
        >
          Price <FaAngleDoubleDown />
        </h3>
        <div id="price-sub" className="w-full ">
          <input className="w-full mt-3" type="range" min={50} max={10000} />
          <div className="w-full flex justify-between items-center">
            <p>Rs 50</p>
            <p>Rs 10000</p>
          </div>
        </div>
      </div>

      {/* --------------------------brands------------------ */}
      <div id="brand-container " className="w-full my-2">
        {" "}
        <h3
          onClick={handleToggleSubMenu}
          className="px-3 py-[3px] flex items-center justify-between bg-gray-200"
        >
          Brands <FaAngleDoubleDown />
        </h3>
        <div id="brand-sub">
          {brands.map((brandItem, brandIdx) => (
            <div
              className="flex items-center justify-between pr-5"
              key={brandIdx}
            >
              {" "}
              <h4 className="capitalize translate-x-2"> - {brandItem}</h4>
              <input
                onChange={(e) => {
                  e.target.checked
                    ? setFilter((prev) => [...prev, e.target.name])
                    : setFilter((prev) =>
                        prev.filter((item) => item != e.target.name)
                      );
                }}
                type="checkbox"
                checked={filter.includes(brandItem)}
                id={brandItem}
                name={brandItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
