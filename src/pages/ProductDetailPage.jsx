import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { id } = useParams();
  console.log("id is", id);
  const selectedProduct = useSelector((state) => state.product.products).find(
    (prod) => prod.id === id
  );
  console.log(selectedProduct);
  return (
    <section className="p-2 flex items-center  justify-between h-[80vh] w-full ">
      <div className="w-[60%] h-full grid grid-cols-4 grid-rows-4 gap-3 ">
        <div
          id="selection-img-section"
          className="col-span-1 row-span-4 grid grid-rows-4 gap-y-3"
        >
          {selectedProduct?.images?.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`h-full w-full ${
                idx === selectedIdx &&
                "border-2 border-blue-500 p-2 rounded-xl overflow-hidden"
              } `}
            >
              <img
                className="h-full w-full object-cover"
                src={imgSrc}
                alt={`img-${idx}`}
              />
            </div>
          ))}
        </div>

        {/* ----------------main img---------------- */}
        <div className="w-full col-span-3 row-span-4 h-full ">
          {selectedProduct?.images && <img
            className="h-full"
            src={selectedProduct?.images[selectedIdx]}
            alt="waching"
          />}
        </div>
      </div>
      <div className="w-[38%] h-full p-4">
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-2xl">{selectedProduct?.name} </h1>
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <span>(review 500)</span> |{" "}
            <span className="text-green-600">stock</span>
          </div>
          <p>
           {selectedProduct?.description}
          </p>
        </div>
        <br />
        <hr className="h-1 bg-gray-300" />
        <br />
        <div className="flex gap-5">
          <div className="flex items-center border-2">
            <button className="border bg-red-600 text-white">-</button>
            <p className="text-2xl font-bold">1</p>
            <button className="border bg-red-400 text-white">+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
