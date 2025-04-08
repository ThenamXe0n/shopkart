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
