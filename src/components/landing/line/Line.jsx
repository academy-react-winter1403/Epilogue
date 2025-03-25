import React from "react";
import figma from "../../../assets/img/figma.svg";
import react from "../../../assets/img/react.svg";
import three from "../../../assets/img/three.svg";
import HtmlImg from "../../../assets/img/S.svg";
import js from "../../../assets/img/js.png";

const Line = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute flex bottom-full left-1/2 -translate-x-1/2 w-24 h-24">
          <img src={figma} className="object-contain w-full h-full" />
        </div>
        <div className=" border-6 w-6 h-6 rounded-full border-[#D9D9D9] bg-white "></div>
      </div>

      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-24 h-24">
          <img src={react} className="object-contain w-full h-full" />
        </div>
        <div className=" border-6 w-6 h-6 rounded-full border-[#D9D9D9] bg-white "></div>
      </div>

      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-24 h-24">
          <img src={js} className="object-contain w-full h-full" />
        </div>
        <div className=" border-6 w-6 h-6 rounded-full border-[#D9D9D9] bg-white "></div>
      </div>

      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-24 h-24">
          <img src={three} className="object-contain w-full h-full" />
        </div>
        <div className=" border-6 w-6 h-6 rounded-full border-[#D9D9D9] bg-white "></div>
      </div>

      <div className="relative">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-24 h-24">
          <img src={HtmlImg} className="object-contain w-full h-full" />
        </div>
        <div className=" border-6 w-6 h-6 rounded-full border-[#D9D9D9] bg-white "></div>
      </div>
    </>
  );
};

export default Line;
