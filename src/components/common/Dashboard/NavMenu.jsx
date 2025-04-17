import React from "react";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { Link } from "react-router-dom";
import { ImageAdd02Icon } from "../Icons/Image-addIcon";

const NavMenu = () => {
  return (
    <div>
      <div className="flex flex-row py-2.5 px-[60px] items-center justify-center  gap-4">
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
            <ImageAdd02Icon
              width={24}
              height={24}
              color={"00000"}
              cursor={"pointer"}
            />
          </Link>

          <Link to={"/StudentPanel/edite-profile/links"}>
            <ImageAdd02Icon
              width={24}
              height={24}
              color={"00000"}
              cursor={"pointer"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
