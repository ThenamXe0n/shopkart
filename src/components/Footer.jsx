import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import PlayStoreIcon from "../assets/productImg/playstore.png";
import AppleStoreIcon from "../assets/productImg/appleStore.png"
const Footer = () => {
  return (
    <section className="w-[100vw] mt-10 ">
      <section className="bg-[#008ECC] w-[80vw]  overflow-hidden relative mx-auto h-[63.5vh]">
        {/* -------------  Footer Content  -------------------  */}

        <section className="flex text-[#ffffff] gap-20 mt-9 ">
          {/* ------------------contact section first column ---------------------------- */}
          <div className="flex flex-col gap-4 ml-[70px]">
            <h2 className="text-[42px] font-semibold">MegaMart</h2>
            <h4 className=" text-lg font-semibold">Contact Us</h4>

            <div className="flex gap-1">
              <p className=" text-xl">
                {" "}
                <FaWhatsapp />{" "}
              </p>
              <span className="text-[12px]">
                {" "}
                <p>Whats App</p> <p>+1 202-918-2132</p>{" "}
              </span>
            </div>

            <div className="flex gap-1">
              <p className=" text-xl">
                {" "}
                <IoCallOutline />{" "}
              </p>
              <span className="text-[12px]">
                {" "}
                <p>Call Us</p> <p>+1 202-918-2132</p>{" "}
              </span>
            </div>

            <h4 className=" text-lg font-semibold">Download App</h4>

            <span className="flex">
              <img
                className="w-[135px] relative top-[-56px] object-contain"
                src={AppleStoreIcon}
              />
              <img
                className="w-[140px] relative top-[-56px]"
                src={PlayStoreIcon}
              />
            </span>
          </div>

          <div>
            {/* ------------------contact section second column ---------------------------- */}
            <div className="border-b-[3px] border-spacing-32 mt-4 border-white border-solid ">
              {" "}
              <h4 className="pb-1 text-lg font-semibold">
                {" "}
                Most Popular Categories
              </h4>{" "}
            </div>
            <ul className="list-inside list-disc capitalize flex flex-col gap-2 ">
              <li className="pt-4">staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks and Foods</li>
              <li>Dairy and Bakery</li>
            </ul>
          </div>

          {/* ------------------contact section third column ---------------------------- */}
          <div>
            <div className="border-b-[3px] border-spacing-32 border-white border-solid mt-4 ">
              {" "}
              <h4 className="pb-1 text-lg font-semibold">
                {" "}
                Customer Services
              </h4>{" "}
            </div>
            <ul className="list-inside list-disc capitalize flex flex-col gap-2 ">
              <li className="pt-4">About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </section>

        {/* ----------------------- white line in the bottom and Copyright text--------------------------- */}

        <div className="w-[70vw] h-[2px]  relative top-[-48px] mx-auto bg-[#ffffff38]"></div>
        <div className=" text-white relative top-[-30px] text-base flex justify-center  ">
          <p>©2022 All rights reserved.Reliance Retail Ltd.</p>
        </div>

        {/* ------------- rounded circle right side ------------------ */}
        <div className="absolute  top-[-75px] right-[-80px] ">
          <div className="rounded-full w-[320px] h-[320px] border-2 border-[#0c9bda]  bg-[#008ECC] flex justify-center items-center">
            <div className="rounded-full w-[300px]  h-[300px] bg-[#0c9bda]"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
