import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Tabbtn = ({ btnName }) => {
  return (
    <button className=" bg-[#f3f8fa] text-[#212121] hover:bg-[#008ECC] cursor-pointer hover:text-white py-2 px-5 rounded-full   flex items-center gap-2">
      <p className="Tabbtn text-base font-semibold  ">{btnName}</p>
      <p id="icon">
        <IoIosArrowDown  size={"18px"}  />{" "}
      </p>
    </button>
  );
};

export default Tabbtn;
