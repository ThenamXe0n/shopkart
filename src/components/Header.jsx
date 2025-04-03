import React, { useRef, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import Tabbtn from "./Tabbtn";
import { dataitem } from "../data/Listdata";
import { Link } from "react-router-dom";

const Header = () => {
  let activeTabRef = useRef();
  const [activeTab, setActiveTab] = useState("");
  console.log(activeTabRef.current);

  return (
    <header className="fixed z-50">
      <section className="bg-[#fefefe] flex  h-[14vh] items-center justify-around">
        {/* --------------1.1------------ */}
        <div className="text-[#008dcb] text-2xl font-semibold flex items-center">
          <div className="w-[40px] h-[40px] bg-[#f3f8fa] flex items-center rounded-sm justify-center">
            <BiMenuAltLeft size={"28px"} />
          </div>
          <p>ShopKart</p>
        </div>
        {/* --------------- 1.2---------------------- */}
        <div className="bg-[#f3f8fa] flex items-center justify-between w-[30vw] h-12 p-2 px-3 rounded-sm text-[#008dcb]">
          <span className="flex items-center gap-2 ">
            <FiSearch size={"24px"} />
            <input
              className="bg-[#f3f8fa]  outline-none w-[20vw]  placeholder:text-[#666666] text-sm"
              type="text"
              placeholder="Search essenntial groceries and more..."
            />
          </span>
          <TfiMenuAlt size={"24px"} />
        </div>
        {/* ------------ 1.3 ------------------------------ */}
        <div className="flex items-center  gap-4">
          <div className="flex items-center gap-[6px]">
            <CgProfile color="#008dcb" size={"24px"} />
            <p className="font-semibold text-[#666666] text-lg">
              Sign Up/Sign In
            </p>
          </div>

          <div className="min-h-5 min-w-[1.5px] bg-[#6666668a]"></div>

          <div className=" flex items-center gap-[6px]">
            <PiShoppingCartSimpleBold color="#008dcb" size={"24px"} />
            <p className="font-semibold text-[#666666] text-lg">Cart</p>
          </div>
        </div>
      </section>

      {/* ----------------------- 2 ----------------------------------- */}

      <div
        onMouseLeave={() => {
          activeTabRef.current = "";
          setActiveTab(activeTabRef.current);
        }}
        className="flex bg-[#2a292956]  backdrop-blur-sm relative gap-2 w-screen border-y-[1px] py-5 pl-24"
      >
        {" "}
        {dataitem.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => {
              activeTabRef.current = item;
              setActiveTab(activeTabRef.current);
            }}
          >
            <Tabbtn btnName={item.nav} />
            {activeTab === item && (
              <div className=" skrewOpenAnimate z-50 bg-white min-h-80 py-3 px-5 flex items-center justify-start gap-x-11 absolute top-20 left-28 w-fit shadow-xl shadow-gray-400">
                {item.subNav.map((sub, subIdx) => (
                  <div key={subIdx}>
                    <Link to={sub?.href}>
                      {" "}
                      <div className="size-60 rounded-xl border overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={sub?.img}
                          alt={sub?.title}
                        />
                      </div>
                    </Link>

                    <h3 className="text-[#212121] mt-3 text-center text-xl capitalize font-medium ">
                      {sub?.title}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}{" "}
      </div>
    </header>
  );
};

export default Header;
