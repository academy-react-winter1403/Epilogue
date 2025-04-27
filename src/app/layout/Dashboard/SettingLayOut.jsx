import React from "react";
import { Outlet } from "react-router-dom";
import SettingMenu from "../../../components/common/Dashboard/Setting/SettingMenu";
import SettingNavMenu from "../../../components/common/Dashboard/Setting/SettingNavMenu";

const SettingLayout = () => {
  return (
    <div className="flex flex-row flex-grow ">
      <div className="px-6  md:flex hidden">
        <SettingMenu />
      </div>

      <div className="flex-grow overflow-x-auto overflow-hidden">
        <div className="px-6 pb-6 mt-[90px]">
          <Outlet />
        </div>
        <div className="md:hidden flex items-center justify-center ">
          <SettingNavMenu />
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
