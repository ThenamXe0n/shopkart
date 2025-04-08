import React, { useState } from "react";
import Breadcrumbs from "../components/ui-mini/Breadcrumbs";
import FilterSideBar from "../components/FilterSideBar";
import ProductCard from "../components/card/ProductCard";
import { useSelector } from "react-redux";

const ShopPage = () => {
  const products = useSelector((state) => state.product.products);
  const extractedbrand = [...new Set(products.map((item) => item.brand))];
  console.log("brand", extractedbrand);
  const [filter, setFilter] = useState(extractedbrand);
  return (
    <section>
      <Breadcrumbs navPaths={["mens", "clothing", "topwear", "shirt"]} />
      <div className="grid grid-cols-6 items-center justify-between py-5 border-t-2 border-b-2">
        <h3 className="col-span-1 font-bold">Filter</h3>
        <h3 className="col-span-3 font-bold">103 Product Found</h3>
        <div className="flex col-span-2 items-center gap-x-2">
          <div className="border border-gray-500 rounded-md px-2 py-1">
            <label>Show : </label>
            <select className="outline-none">
              <option value="10">10</option>
            </select>
          </div>
          <div className="border border-gray-500 rounded-md px-2 py-1">
            <select className="outline-none">
              <option value="high to low">high to low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <aside className="col-span-1 w-full border-2">
          <FilterSideBar
            filter={filter}
            setFilter={setFilter}
            brands={extractedbrand}
          />
        </aside>
        <div id="product-section" className="col-span-5  w-full border-2">
          <div className="w-11/12 mx-auto gap-x-3 gap-y-5 m-5 grid grid-cols-4">
            {products
              .filter((item) => filter.includes(item.brand))
              .map((phone, phoneIdx) => (
                <div key={phoneIdx}>
                  <ProductCard
                    brand={phone.brand}
                    title={phone.title}
                    phoneImg={phone.thumbnail}
                    price={phone.price}
                    mrp={parseInt(phone.price)+parseInt((phone.price * phone?.discount) / 100)}
                    save={(phone.price * phone?.discount) / 100}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
