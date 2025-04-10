import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({id,title,productImg,price,mrp,save,brand}) => {
  return (
   <Link to={`/product/${id}`}> <div className="h-64 w-52 relative border border-gray-200  rounded-xl overflow-hidden hover:border-2 hover:border-[#008ECC] hover:shadow-lg hover:shadow-slate-400 hover:scale-105" >
      <div className="bg-[#008ECC] size-10 rounded-bl-xl text-sm text-white flex flex-col items-center justify-center  -space-y-1 absolute right-0">
        <p>56%</p>
        <p>OFF</p>
      </div>
      <div className="w-full h-[60%] bg-gray-100 flex justify-center items-center">
        <div className=" w-[50%] h-[80%] ">
          <img className="w-full h-full object-contain" src={productImg} alt={`product/${id}`} />
        </div>
      </div>
      <div className="p-2 text-sm">
        <div className="text-black p-1 border-b border-b-gray-300">
          <h2 onClick={(e)=>e.target.classList.toggle("line-clamp-1")} className="font-semibold line-clamp-1">{title}</h2>
          <h2 className="font-bold ">
            Rs{price}
            <span className="pl-2 text-gray-300 font-light line-through">
              Rs{mrp}
            </span>
            <h2>{brand}</h2>
          </h2>
        </div>
        <h2 className="text-green-600 p-1">Save-Rs{save}</h2>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
