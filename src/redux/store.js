import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice"

const store = configureStore({
  reducer: {
    product: ProductReducer
  },
});

export default store;
