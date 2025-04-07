import React from "react";

const TopElectronicsBrandsCard = ({
  brand,
  logo,
  mobileImg,
  offer,
  pcolor,
  scolor,
}) => {
  const primaryBg = {
    backgroundColor: pcolor,
  };
  const secondaryBg = {
    backgroundColor: scolor,
    outlineColor: scolor,
  };

  return (
    <div
      style={primaryBg}
      className="w-80 h-40 rounded-xl relative overflow-hidden"
    >
      <div
        style={secondaryBg}
        className="size-40 absolute -right-4 -top-12 rounded-full outline outline-offset-8"
      ></div>

      <div className="flex items-center justify-between h-full p-4 text-black">
        <div className="flex flex-col justify-between gap-3 ">
          <div
            style={secondaryBg}
            className="w-fit uppercase text-sm font-medium  py-1 px-3 rounded-md "
          >
            {brand}
          </div>
          <div className=" flex justify-center items-center size-fit">
            <img className=" object-contain" src={logo} alt="i" />
          </div>
          <div className="font-medium">{offer} </div>
        </div>
        <div className="w-28 h-32 z-10 ">
          <img
            className="w-full h-full object-contain"
            src={mobileImg}
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
};

export default TopElectronicsBrandsCard;
