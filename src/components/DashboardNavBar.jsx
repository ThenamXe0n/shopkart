import React from "react";
import { FaUserAlt } from "react-icons/fa";

const DashboardNavBar = () => {
  return (
    <header className="w-screen flex items-center justify-between px-10 min-h-16 bg-black text-white">
      <div>Dashboard</div>
      <div><div><FaUserAlt size={24}/></div></div>
    </header>
  );
};

export default DashboardNavBar;
