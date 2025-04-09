import React from "react";
import ProductCard from "../components/card/ProductCard";
import { path } from "../routes/path";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BestDealSection = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <section className="py-10">
      <div className=" flex items-center border-b  justify-between px-2 w-full ">
        <h3 className="py-2">
          Grab The best Deal{" "}
          <strong className="text-[blue] border-b-2 py-2 border-b-blue-700">
            products
          </strong>{" "}
        </h3>
        <div>
          <Link to={path.SHOP}>
            {" "}
            <span className="cursor-pointer">View all ▶ </span>
          </Link>
        </div>
      </div>
      <div className="grid mt-4 grid-cols-5">
        {Array.isArray(products) && products.map((phone, phoneIdx) => (
          <div key={phoneIdx}>
            <ProductCard
              brand={phone.brand}
              title={phone.title}
              phoneImg={phone.thumbnail}
              price={phone.price}
              mrp={
                parseInt(phone.price) +
                parseInt((phone.price * phone?.discount) / 100)
              }
              save={(phone.price * phone?.discount) / 100}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDealSection;
