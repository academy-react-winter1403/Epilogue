import React from "react";
import { NavLink } from "react-router-dom";
import moon from "../../assets/moon.png";
import notification from "../../assets/notification.png";
import h1 from "../../assets/h1.svg";
import pepe from '../../assets/pepe.png'
import bahr from "../../assets/bahr.svg";
import arrow from'../../assets/arrow.png'
import menu from '../../assets/menu.png'
import arrow2 from'../../assets/arrow2.png'

export const Header = () => {
  return (
    <>
    <div className=" mt-[24px]  mr-auto ml-auto w-[374px] h-[49px] flex md:w-[1356px] ml-[9px]">

      <div className="w-[42px] h-[40px]"><img src={bahr}/></div>      
      <div className="w-[189px] h-[38px] mt-2 ml-[230px] hidden md:block"><img src={h1}/></div>
      <div className=" w-[372px] h-[48px] rounded-[56px] ml-[390px] flex bg-[#2F2F2F] hidden md:block">
        <div className="w-[248px] h-[23px]  mt-[8.5px] ml-[23px] flex gap-6 mr-[12px]">
          <div className="w-[29px] h-[23px] text-base font-medium text-[#FCFCFC] ">خانه</div>
          <div className="w-[51px] h-[23px] text-base font-medium text-[#FCFCFC]">دربارهما</div>
          <div className="w-[49px] h-[23px] text-base font-medium text-[#FCFCFC] ">بلاگها</div>
          <div className="w-[47px] h-[23px] text-base font-medium text-[#FCFCFC] ">دورهها</div>
        </div>
        <div className="w-[64px] h-[40px]  mt-1 mr-5 flex ">
          <div className="w-[13px] h-[8px]  mt-4 ml-3"><img src={arrow}/></div>
          <div className="w-10 h-10  rounded-full"><img src={pepe}/></div>
        </div>
      </div>

      <div className="border border-[#DCDCDC] h-[48px] w-[48px] rounded-full ml-2 hidden md:block">
      <img className="m-auto mt-[12px]" src={notification}/>
        </div>
        <div className="w-[88px] h-[48px] border border-[#DCDCDC] mr-46 rounded-[32px] flex block md:hidden">
          <div className="w-[20px] h-[20px]  mt-4 mr-4"><img src={arrow2}/></div>
          <div className="w-10 h-10  rounded-full mt-1 mr-3.5"><img src={pepe}/></div>
        </div>      
      <div className="border border-red h-[48px] mr-[10px] w-[48px] rounded-full bg-[#2F2F2F] md:mr-[0px]">
        <img className="m-auto mt-[12px] hidden md:block" src={moon}/>
        <img className="m-auto mt-[12px] block md:hidden" src={menu}/>
        </div>
    </div>
  </>
  );
};