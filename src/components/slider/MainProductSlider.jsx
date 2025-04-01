import React from "react";
import watchImg from "../../assets/productImg/watch.png";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const SliderNavBtn = ({ icon, className }) => {
  return (
    <div
      className={`size-32 absolute flex items-center justify-center bg-white rounded-full ${className}`}
    >
      <div className="size-28 bg-[#F3F9FB] flex items-center justify-center rounded-full">
        {icon}
      </div>
    </div>
  );
};

const MainProductSlider = () => {
  return (
    <div className="w-full flex items-center justify-between relative h-80 px-20 rounded-xl my-5 bg-[#212844]">
      {/* =================nav button============== */}
      <SliderNavBtn
        className={"top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"}
        icon={<FaLessThan size={24} />}
      />
      {/* =======================slide 1 start====================== */}
      
      {<div className=" overflow-hidden flex items-center justify-between relative w-full h-full ">
        <div
          id="bg-circle-1"
          className="size-96 bg-[#2C3454] before:contents-[''] before:size-[25rem] before:border-2 before:border-[#2C3454] before:-top-[7px] before:-left-[7px] before:absolute before:rounded-full   border-double rounded-full right-4 absolute -top-56"
        ></div>
        <div
          id="bg-circle-2"
          className="size-52 bg-[#2C3454] before:contents-[''] before:size-[16rem] before:border-2 before:border-[#2C3454] before:-top-[20px] before:-left-[20px] before:absolute before:rounded-full   border-double rounded-full right-48 absolute -bottom-32"
        ></div>
        <div className="text-white flex flex-col gap-y-4">
          <h3 className="text-2xl">Best Deal Online On smart Watches</h3>
          <h2 className="text-6xl font-semibold uppercase">Smart wearable.</h2>
          <p className="text-xl">UP to 80% OFF</p>
        </div>
        <div className="h-64 w-64 -translate-x-16">
          <img src={watchImg} alt="watch" className="h-full w-auto" />
        </div>
      </div>}
      {/* =======================slide 1 end====================== */}
      {/* =================nav button============== */}
      <SliderNavBtn
        className={"top-1/2 -translate-y-1/2 right-0 translate-x-1/2"}
        icon={<FaGreaterThan size={24} />}
      />
    </div>
  );
};

export default MainProductSlider;
