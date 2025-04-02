import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { featuerProductData } from "../../data/sliderData";
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

const SliderSlide = ({ tagLine, title, offer, productImg }) => {
  return (
    <div className=" overflow-hidden flex items-center justify-between relative w-full h-full ">
      <div
      data-aos="fade-down"
        id="bg-circle-1"
        className="size-96 bg-[#2C3454] before:contents-[''] before:size-[25rem] before:border-2 before:border-[#2C3454] before:-top-[7px] before:-left-[7px] before:absolute before:rounded-full   border-double rounded-full right-4 absolute -top-56"
      ></div>
      <div
       data-aos="fade-up"
        id="bg-circle-2"
        className="size-52 bg-[#2C3454] before:contents-[''] before:size-[16rem] before:border-2 before:border-[#2C3454] before:-top-[20px] before:-left-[20px] before:absolute before:rounded-full   border-double rounded-full right-48 absolute -bottom-32"
      ></div>
      <div className="text-white flex flex-col gap-y-4">
        <h3 data-aos="fade-right" className="text-2xl">
          {tagLine}
        </h3>
        <h2 className="text-6xl font-semibold uppercase">{title}</h2>
        <p className="text-xl">{offer}</p>
      </div>
      <div data-aos="fade-left" className="h-64 w-64 -translate-x-16">
        <img src={productImg} alt={title} className="h-full w-auto" />
      </div>
    </div>
  );
};

const MainProductSlider = () => {
  const [viewProductIndex, setViewProductIndex] = useState(0);

  function handleNext(){
    if(viewProductIndex<featuerProductData.length-1){
      setViewProductIndex((prevIndex) => prevIndex + 1);
    }else{
      setViewProductIndex(0);
    }
  }

  function handlePrev(){
    if(viewProductIndex>0){
      setViewProductIndex((prevIndex) => prevIndex - 1);
    }else{
      setViewProductIndex(featuerProductData.length-1);
    }
  }

  return (
    <div className="w-full flex items-center justify-between relative h-80 px-20 rounded-xl my-5 bg-[#212844]">
      {/* =================nav button============== */}
      <div onClick={handlePrev}>
        <SliderNavBtn
          className={"top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"}
          icon={<FaLessThan size={24} />}
        />
      </div>
      {/* =======================slide 1 start====================== */}

      {featuerProductData.map((slide, slideIdx) => (
        <div
          className={`w-full h-full ${viewProductIndex !== slideIdx && "hidden"}`}
          key={slideIdx}
        >
          {viewProductIndex === slideIdx && (
            <SliderSlide
              tagLine={slide?.tagLine}
              title={slide?.title}
              offer={slide?.offer}
              productImg={slide?.imgUrl}
            />
          )}
        </div>
      ))}
      {/* =======================navigation dots=============== */}
      <div className="flex items-center gap-x-2 absolute bottom-8">
        {featuerProductData.map((item, idx) => (
          <div
            onClick={() => setViewProductIndex(idx)}
            key={idx}
            id={idx}
            data-slide={item}
            className={`h-2 cursor-pointer rounded-full bg-white ${
              viewProductIndex === idx ? "w-6" : "w-2"
            }`}
          ></div>
        ))}
      </div>
      {/* =======================slide 1 end====================== */}
      {/* =================nav button============== */}
      <div onClick={handleNext}>
        <SliderNavBtn
          className={"top-1/2 -translate-y-1/2 right-0 translate-x-1/2"}
          icon={<FaGreaterThan size={24} />}
        />
      </div>
    </div>
  );
};

export default MainProductSlider;
