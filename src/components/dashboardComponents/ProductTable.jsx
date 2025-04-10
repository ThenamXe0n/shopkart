// import { useState } from "react"
// import { Edit, Trash2, Plus, Search } from "lucide-react"
import { BiPlusCircle, BiSearchAlt, BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AddProductForm from "./AddProductForm";
import { useState } from "react";
import { deleteProductAsync } from "../../redux/product/productSlice";

export default function ProductTable() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector((state) => state.product.products);

  // Function to handle product deletion
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProductAsync(id));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0891b2] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="text-cyan-100">Manage your product inventory</p>
        </div>
      </div>

      {/* Search and Add Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0891b2] focus:border-[#0891b2] block w-full pl-10 p-2.5"
              placeholder="Search products"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#0891b2] hover:bg-[#0891b2]/90 text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <BiPlusCircle className="h-5 w-5" />
            Add New Product
          </button>
        </div>

        {/* Product List */}
        <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-16 w-16 relative">
                          <img
                            src={product.thumbnail || "/placeholder.svg"}
                            alt={product.name}
                            className="object-contain rounded-md"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {product.brand}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">
                      ₹{Number.parseInt(product.price).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {Number.parseInt(product.stock) > 50 ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {product.stock} in stock
                        </span>
                      ) : Number.parseInt(product.stock) > 10 ? (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {product.stock} in stock
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {product.stock} in stock
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {product.discount !== "0" ? (
                        <span className="bg-[#0891b2]/10 text-[#0891b2] text-xs font-medium px-2.5 py-0.5 rounded">
                          {product.discount}% off
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">
                          No discount
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          className="p-2 text-gray-500 hover:text-[#0891b2] hover:bg-[#0891b2]/10 rounded-full transition-colors"
                          title="Edit product"
                        >
                          <FaEdit className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete product"
                          onClick={() => handleDelete(product.id)}
                        >
                          <BiTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No products found</p>
              <button className="mt-4 inline-flex items-center gap-2 bg-[#0891b2] hover:bg-[#0891b2]/90 text-white font-medium rounded-lg text-sm px-5 py-2.5">
                <BiPlusCircle className="h-5 w-5" />
                Add New Product
              </button>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal close={() => setIsModalOpen(false)}>
          <AddProductForm />
        </Modal>
      )}
    </div>
  );
}

const Modal = ({ children, close }) => {
  return (
    <div className="h-screen fixed top-0 left-0 flex flex-col items-center justify-center w-screen bg-[#0000004b]">
      <div className="bg-white max-h-[80vh] p-5 border border-gray-600 shadow-md rounded-md max-w-[70vw]">
        <div className="flex w-full justify-end">
          <button
            onClick={close}
            className="p-1 bg-red-600 rounded-xl text-white font-semibold my-2"
          >
            close
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
