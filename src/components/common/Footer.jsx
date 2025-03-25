import React from "react";
import h1 from "../../assets/img/h1.svg";
import bahr from "../../assets/img/bahr.svg";
import { Link } from "react-router-dom";
import { TwitterIcon } from "./Icons/Twitter";
import { YoutubeIcon } from "./Icons/Youtube";
import { TelegramIcon } from "./Icons/Telegram";
import { InstagramIcon } from "./Icons/Instagram";
const Footer = () => {
  return (
    <div>
      <div className="border-t h-[300px] sm:h-[150px] flex flex-col sm:flex-row border-[#DCDCDC]">
        
        <div className=" hidden lg:flex flex-row-reverse">
          <span className="pr-2 text-[18px] text-[#22445D]  lg:flex">
            <img src={bahr}/>
          </span>
          <img src={h1} className="pr-2 sm:h-9 flex m-auto" alt="Logo" />
        </div>

        <div className="flex flex-col lg:flex-row px-4 m-auto gap-12  text-nowrap py-16 sm:py-0">
          <div className="flex flex-row justify-center gap-12 text-nowrap font-yekan-500 text-[16px]">
            <Link to="/" className="">
              خانه
            </Link>
            <Link to="/" className="">
              دوره ها
            </Link>{" "}
            <Link to="/" className="">
              بلاگ ها
            </Link>{" "}
            <Link to="/" className="">
              اساتید
            </Link>
          </div>

          <div className="flex flex-row justify-center gap-12 text-nowrap font-yekan-500 text-[16px]">
            <Link to="/" className="">
              درباره ما
            </Link>{" "}
            <Link to="/" className="">
              ارتباط با ما
            </Link>{" "}
            <Link to="/" className="">
              خدمات ما
            </Link>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center justify-center gap-[100px] pb-10 sm:pb-0 ">
          <img src={h1} className="w-[76px] flex ml-14 sm:hidden" alt="Logo" />

          <div className="flex gap-5 mr-14">
            <TwitterIcon color={"#000000"}/>
            <YoutubeIcon color={"#000000"}/>
            <TelegramIcon color={"#000000"}/>
            <InstagramIcon color={"#000000"}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
