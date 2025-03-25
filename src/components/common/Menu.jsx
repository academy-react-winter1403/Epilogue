// import { Button } from "@heroui/button";
import React, { useState } from "react";
import h1 from "../../assets/img/h1.svg";
import bahr from "../../assets/img/bahr.svg";
import Pappe from "../../assets/img/Peppe.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu02Icon } from "./Icons/MenuIcon";
import { ArrowDown01Icon } from "./Icons/ArrowDownIcon";
import { TwitterIcon } from "./Icons/Twitter";
import { YoutubeIcon } from "./Icons/Youtube";
import { TelegramIcon } from "./Icons/Telegram";
import { InstagramIcon } from "./Icons/Instagram";
import { Cancel01Icon } from "./Icons/Cancel";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="lg:hidden max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" />
        <div className="flex items-center justify-between gap-[8px]">
          <button className="rounded-full focus:outline-none flex flex-row-reverse gap-2 p-2 w-[88px] h-[56px] bg-[#FCFCFC] border border-[#DCDCDC]">
            <img src={Pappe} />
            <div className="flex items-center justify-center">
              <ArrowDown01Icon />
            </div>
          </button>

          <button
            onClick={toggleMenu}
            className="rounded-full w-[48px] h-[48px] bg-[#2F2F2F]"
          >
            <div className="flex items-center justify-center">
              <Menu02Icon />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.35 }}
              className="md:hidden flex flex-col fixed right-0 max-w-[313px] bottom-0 top-0 bg-[#2F2F2F] z-20 text-white"
            >
              <div className="flex flex-row gap-[107px] p-1">
                <div className="flex flex-row">
                  <img src={h1} className="w-[42px]"/>
                  <img src={bahr} className="w-[159px] pt-[10px]" />
                </div>
                <div className="p-4">
                  <Cancel01Icon />
                </div>
              </div>

              <div className="px-[24px] pt-[80px] space-y-1 flex flex-col ">
                <Link to="/" className="font-bold">
                  خانه
                  <div className="border-b w-full px-[20px]"></div>
                </Link>
                <a className="py-2">
                  <Link to="/course-list" className="font-bold">
                    دوره ها
                    <div className="border-b w-full py-[2px] px-[20px]"></div>
                  </Link>
                </a>
                <a className="py-2">
                  <Link to="/news-list" className="font-bold">
                    بلاگ ها
                    <div className="border-b w-full px-[20px]"></div>
                  </Link>
                </a>
                <a className="py-2">
                  <Link to="/AboutUs" className="font-bold">
                    درباره ما
                    <div className="border-b w-full px-[20px]"></div>
                  </Link>
                </a>
                <a className="py-2">
                  <Link to="/AboutUs" className="font-bold">
                    ارتباط باما
                    <div className="border-b w-full px-[20px]"></div>
                  </Link>
                </a>

                <div className="border-b w-full py-[60px] px-[20px]"></div>

                <div className="flex flex-row gap-5 pt-1.5 pb-[48px] m-auto">
                  <TwitterIcon />
                  <YoutubeIcon />
                  <TelegramIcon />
                  <InstagramIcon />
                </div>
              </div>
            </motion.div>
            <div
              className="absolute top-0 bottom-0 w-full z-10"
              onClick={() => {
                setIsOpen(false);
              }}
            ></div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
