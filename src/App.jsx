import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Shop } from "./routes/elementPath";
import "aos/dist/aos.css";
import AOS from "aos";
import { path } from "./routes/path";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import DashBoardLayout from "./layout/DashBoardLayout";
import Protected from "./routes/Protected";
import AddProductPage from "./pages/adminPages/AddProductPage";
import { useDispatch } from "react-redux";
import { getProductAsync } from "./redux/product/productSlice";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductTable from "./components/dashboardComponents/ProductTable";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    dispatch(getProductAsync());
  }, [dispatch]);
  return (
    <>
      <Routes>
        {/* =====================website layout==================== */}
        <Route path={path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={path.SHOP} element={<Shop />} />
          <Route path={path.PRODUCTDETAIL} element={<ProductDetailPage/>} />
        </Route>
        {/* ==========================DashBoard Layout==================== */}
        <Route
          path={path.DASHBOARD}
          element={
            <Protected>
              <DashBoardLayout />
            </Protected>
          }
        >
          <Route index element={<h1>home page dashboard</h1>} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="view-product" element={<ProductTable/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
