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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        {/* =====================website layout==================== */}
        <Route path={path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={path.SHOP} element={<Shop />} />
        </Route>
        {/* ==========================DashBoard Layout==================== */}
        <Route path={path.DASHBOARD} element={<Protected><DashBoardLayout /></Protected>}>
          <Route index element={<h1>home page dashboard</h1>} />
          <Route path="add-product" element={<h1>add product page</h1>}/>
          <Route path="view-product" element={<h1>view product page</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
