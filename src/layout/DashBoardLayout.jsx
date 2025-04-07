import React from "react";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashBoardLayout = () => {
  return (
    <>
      <DashboardNavBar />
      <section className="w-screen h-[90vh] flex ">
        <div className="w-[18%] h-full"><DashboardSidebar /></div>
        <main  className="min-h-[80vh] border-2 rounded-xl mx-auto w-[68vw]">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default DashBoardLayout;
