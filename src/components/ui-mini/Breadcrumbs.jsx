import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const Breadcrumbs = ({ navPaths }) => {
  return (
    <div className="bg-[#008dcb] text-white min-h-14 py-10 w-full flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl text-black">MENS</h2>
      <div className="flex items-center gap-x-1">
        {Array.isArray(navPaths) &&
          navPaths.map((navItem, idx) => (
            <div key={idx} className="flex items-center gap-x-1 uppercase">
              <p>{navItem}</p>{" "}
              {navPaths.length - 1 !== idx && (
                <FaGreaterThan color="white" size={8} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
