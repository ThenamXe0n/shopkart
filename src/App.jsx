import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Shop } from "./routes/elementPath";
import "aos/dist/aos.css";
import AOS from "aos";
import { path } from "./routes/path";
import Layout from "./layout/Layout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={path.SHOP} element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
