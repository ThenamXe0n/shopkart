import React from "react";
import Breadcrumbs from "../components/ui-mini/Breadcrumbs";

const ShopPage = () => {
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
        <aside className="col-span-1 h-screen w-full border-2"></aside>
        <div id="product-section" className="col-span-5 h-screen w-full border-2"></div>
      </div>
    </section>
  );
};

export default ShopPage;
