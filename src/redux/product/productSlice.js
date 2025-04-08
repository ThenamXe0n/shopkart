import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductAPI, getProductAPI } from "./productApi";

const initialState = {
  loading: false,
  products: [],
  selectedProduct: null,
};

export const addProductAsync = createAsyncThunk(
  "product/addProduct",
  async (productDetail) => {
    const response = await addProductAPI(productDetail);
    return response;
  }
);
export const getProductAsync = createAsyncThunk(
  "product/getProduct",
  async () => {
    const response = await getProductAPI();
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products.unshift(action.payload);
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.products = action.payload;
      }),
});

export default productSlice.reducer;
