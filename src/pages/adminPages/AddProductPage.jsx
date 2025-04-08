import React from "react";
import AddProductForm from "../../components/dashboardComponents/AddProductForm";
import { BiPlusCircle } from "react-icons/bi";

const AddProductPage = () => {
  return (
    <section className="h-full w-full">
      <h1 className="text-xl font-bold bg-cyan-600 p-2 text-white flex items-center ">
        <BiPlusCircle size={24} />
        Add Products
      </h1>
      <AddProductForm />
    </section>
  );
};

export default AddProductPage;
