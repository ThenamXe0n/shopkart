import React from "react";
import { smartPhone } from "../data/topSmartphonData";
import ProductCard from "../components/card/ProductCard";
import { path } from "../routes/path";
import { Link } from "react-router-dom";

const BestDealSection = () => {
  return (
    <section className="py-10">
      <div className=" flex items-center border-b  justify-between px-2 w-full ">
        <h3 className="py-2">
          Grab The best Deal{" "}
          <strong className="text-[blue] border-b-2 py-2 border-b-blue-700">
            Smartphone
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
        {smartPhone.map((phone, phoneIdx) => (
          <div key={phoneIdx}>
            <ProductCard
              title={phone.title}
              phoneImg={phone.phoneImg}
              price={phone.price}
              mrp={phone.mrp}
              save={phone.save}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDealSection;
