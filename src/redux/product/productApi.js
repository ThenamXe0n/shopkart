import { axiosInstance } from "../../services/axiosInstace";

export const addProductAPI = async (productDetail) => {
  try {
    const response = await axiosInstance.post("/products", productDetail);
    return response.data;
  } catch (error) {
    alert(error.message);
    return { status: false };
  }
};
export const getProductAPI = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    alert(error.message);
    return { status: false };
  }
};

export const deleteProductAPI = async (productId) => {
  try {
    const response = await axiosInstance.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return { status: false };
  }
};
