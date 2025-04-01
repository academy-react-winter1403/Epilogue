import React from "react";
import Header from "../../../components/common/Dashboard/Header";
import DashboardMenu from "../../../components/common/Dashboard/Menu";
import { DashboardPageHolder } from "../../../components/common/Dashboard/DashboardPageHolder";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full h-full bg-[#242424] ">
      <div className="max-w-screen-xl bg-[#242424] mx-auto">
        <Header />
      </div>
      <div className="w-[400px] h-full bg-[#242424] text-white flex flex-col text-nowrap max-[1400px]:w-[300px]">
        <DashboardMenu />
      </div>
      <div className="bg-[#242424] flex flex-col">
        <div className=" flex items-end justify-end p-5 px-7 overflow-y-scroll">
          <DashboardPageHolder>
            <Outlet />
          </DashboardPageHolder>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
