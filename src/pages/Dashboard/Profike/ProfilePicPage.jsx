import React from "react";
import { ImageAdd02Icon } from "../../../components/common/Icons/Image-addIcon";
import { Tick03Icon } from "../../../components/common/Icons/Tick-Icon";
import { MoreVerticalCircle01Icon } from "../../../components/common/Icons/More-Icon";

const ProfilePicPage = () => {
  return (
    <div>
      <button className="bg-blue-500 text-white rounded-full  py-2 px-4 flex gap-2 items-center text-[16px]">
        <ImageAdd02Icon />
        <span>افزودن عکس</span>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
        <div className=" border w-[189px] h-[189px] rounded-[16px]">
          <div className="flex flex-row gap-6">
          <div className="relative py-2 px-2">
            <div className="border rounded-full  absolute w-[32px]  h-[32px]">
              <MoreVerticalCircle01Icon/>
            </div>
          </div>
          <div className="relative py-2 px-2">
            <div className="bg-[#17C964] flex items-center justify-center rounded-full absolute w-[32px]  h-[32px]">
              <Tick03Icon/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicPage;
