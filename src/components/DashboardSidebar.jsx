import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const DashboardSidebar = () => {
  const dashboardNav = [
    { title: "add Product", icon: <FaPlus />, href: "add-product" },
    { title: "view Product", icon: <FaEye />, href: "view-product" },
  ];
  return (
    <aside className="w-full h-full bg-cyan-600 p-2">
      <nav>
        {dashboardNav.map((item, idx) => (
          <Link
            to={item.href}
            key={idx}
            className="bg-cyan-900 p-2 rounded-xl text-white flex items-center gap-x-2 my-2"
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </nav>
      <div>
        <button className="p-2 bg-red-600 text-white rounded-xl ">
          logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
