import React from "react";
import { path } from "../routes/path";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopElectronicsBrandsCard from "../components/card/TopElectronicsBrandsCard";

const TopElectronicSection = () => {
  let electronicCategory = [
    "smarphone",
    "washing machine",
    "cooler",
    "speakers",
    "laptop",
    "tv",
    "television",
    "fan",
    "electronics",
  ];
  const electronicProduct = useSelector(
    (state) => state.product.products
  ).filter((prod) => electronicCategory.includes(prod.category.toLowerCase()));
  return (
    <section className="py-10">
      <div className=" flex items-center border-b  justify-between px-2 w-full ">
        <h3 className="py-2">
          Top Electronic
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
        {Array.isArray(electronicProduct) &&
          electronicProduct.map((phone, phoneIdx) => (
            <div key={phoneIdx}>
              <TopElectronicsBrandsCard
                brand={phone.brand}
                title={phone.title}
                mobileImg={phone.thumbnail}
                offer={"up to 20 % off"}
                pcolor={"darkblue"}
                scolor={"lightblue"}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default TopElectronicSection;
