import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Shop } from "./routes/elementPath";

import { path } from "./routes/path";
import Layout from "./layout/Layout";

function App() {
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
