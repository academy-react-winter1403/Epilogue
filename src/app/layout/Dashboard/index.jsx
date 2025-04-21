import React from "react";
import Header from "../../../components/common/Dashboard/Header";
import DashboardMenu from "../../../components/common/Dashboard/Menu";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const DashboardLayout = () => {
  return (
    <div className="w-full h-screen bg-[#242424] flex flex-col">
      <Toaster/>
      <div className=" bg-[#242424]">
          <Header />
      </div>
      <div className="flex flex-row flex-grow px-6 py-3 overflow-y-auto">
        <div className="bg-[#242424] hidden lg:flex text-white flex flex-col max-[1400px]:w-[300px]">
          <DashboardMenu />
        </div>
        <div className="flex-grow w-full themed-dash bg-white rounded-3xl  overflow-y-auto overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
