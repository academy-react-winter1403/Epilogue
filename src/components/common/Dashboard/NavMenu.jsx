import React from "react";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { Link } from "react-router-dom";
import { ImageAdd02Icon } from "../Icons/Image-addIcon";
import { MapsLocation01Icon } from "../Icons/MapIcon";
import { Link04Icon } from "../Icons/LinksIcon";


const NavMenu = () => {
  return (
    <div className=" py-2.5 ">
      <div className="bg-[#F1F1F1] rounded-3xl flex flex-row items-center justify-center gap-[50px] w-[300px] p-4 ">
        <Link to={"/StudentPanel/edite-profile/profile-info"}>
          <UserSquareIcon
            width={24}
            height={24}
            color={"00000"}
            cursor={"pointer"}
          />
        </Link>

        <Link to={"/StudentPanel/edite-profile/profile-pic"}>
          <ImageAdd02Icon
            width={24}
            height={24}
            color={"00000"}
            cursor={"pointer"}
          />
        </Link>

        <Link to={"/StudentPanel/edite-profile/location"}>
          <MapsLocation01Icon
            width={24}
            height={24}
            color={"00000"}
            cursor={"pointer"}
          />
        </Link>

        <Link to={"/StudentPanel/edite-profile/links"}>
          <Link04Icon
            width={24}
            height={24}
            color={"00000"}
            cursor={"pointer"}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
