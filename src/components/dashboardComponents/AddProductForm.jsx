import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../../redux/product/productSlice";

const addFormFields = [
  {
    label: "Product name",
    id: "name",
    type: "text",
    placeholder: "enter product name",
  },
  {
    label: "Product price",
    id: "price",
    type: "text",
    placeholder: "enter product price",
  },
  {
    label: "brand",
    id: "brand",
    type: "datalist",
    list: "brandList",
    placeholder: "--select brand--",
    options: ["nike", "gshock", "addidas"],
  },
  {
    label: "category",
    id: "category",
    type: "datalist",
    list: "categoryList",
    placeholder: "--select category--",
    options: ["shoes", "clothing", "food", "electronics"],
  },
  {
    label: "thumbnail",
    id: "thumbnail",
    type: "text",
    placeholder: "enter product image url",
  },
  {
    label: "discount",
    id: "discount",
    type: "text",
    placeholder: "enter product discount %",
  },
  {
    label: "stock",
    id: "stock",
    type: "text",
    placeholder: "enter product stock %",
  },
  {
    label: "description",
    id: "description",
    type: "text",
    placeholder: "enter product description %",
  },
  {
    label: "size",
    id: "size",
    type: "select",
    placeholder: "--select size--",
    options: ["small", "medium", "large", "extralarge"],
  },
];

const AddProductForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  function handleAddProduct(data) {
    console.log(data);
    dispatch(addProductAsync(data));
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(handleAddProduct)}
      className="border p-5 grid grid-cols-3 gap-3"
    >
      {addFormFields.map((field, idx) => (
        <div key={idx} className="flex flex-col justify-start">
          <label className="capitalize text-xl font-medium" htmlFor={"name"}>
            {field.label}
          </label>
          {field.type === "text" && (
            <input
              {...register(field.id)}
              className="p-2 border border-cyan-400 outline-none"
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
            />
          )}
          {field.type === "select" && (
            <select
              {...register(field.id)}
              className="p-2 border border-cyan-400 outline-none"
            >
              <option>{field.placeholder}</option>
              {field?.options.map((opt, optIdx) => (
                <option key={optIdx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {field.type === "datalist" && (
            <div>
              <input
                {...register(field.id)}
                className="p-2 w-full border border-cyan-400 outline-none"
                type="text"
                list={field?.list}
                id={field.id}
                name={field.id}
              />
              <datalist id={field.list}>
                {field?.options.map((opt, optIdx) => (
                  <option key={optIdx} value={opt}>
                    {opt}
                  </option>
                ))}
              </datalist>
            </div>
          )}
        </div>
      ))}
      <button className="p-2 bg-black text-white rounded-md col-span-3">
        Add product
      </button>
    </form>
  );
};

export default AddProductForm;
