import React from "react";
import { ProfileMenuOption } from "../../../components/common/Dashboard/ProfileMenuOption";
import ProfileMenu from "../../../components/common/Dashboard/ProfileMenu";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="flex flex-row flex-grow px-6 ">
        <ProfileMenu />
      <div className="flex-grow  mt-[90px] w-full pr-6 pb-6 overflow-x-auto overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
