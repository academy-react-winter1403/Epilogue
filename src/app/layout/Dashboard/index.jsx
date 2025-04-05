import React from "react";
import Header from "../../../components/common/Dashboard/Header";
import DashboardMenu from "../../../components/common/Dashboard/Menu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen bg-[#242424] flex flex-col">
      <div className=" bg-[#242424]">
          <Header />
      </div>
      <div className="flex flex-row flex-grow px-6 py-3 overflow-y-auto">
        <div className="bg-[#242424] text-white flex flex-col max-[1400px]:w-[300px]">
          <DashboardMenu />
        </div>
        <div className="flex-grow border bg-white rounded-3xl  overflow-y-auto overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
