import React from "react";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] overflow-scroll px-40 pt-[12rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
