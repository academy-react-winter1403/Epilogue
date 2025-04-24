import React from "react";
import ProfileMenu from "../../../components/common/Dashboard/ProfileMenu";
import { Outlet } from "react-router-dom";
import NavMenu from "../../../components/common/Dashboard/NavMenu";

const SettingLayout = () => {
  return (
    <div className="flex flex-row flex-grow ">
      <div className="px-6  md:flex hidden">
        <ProfileMenu />
      </div>

      <div className="flex-grow overflow-x-auto overflow-hidden">
        <div className="px-6 pb-6 mt-[90px]">
          <Outlet />
        </div>
        <div className="md:hidden flex items-center justify-center ">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
