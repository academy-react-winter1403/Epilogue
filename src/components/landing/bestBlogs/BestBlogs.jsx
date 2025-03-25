import React from "react";
import { Calendar03Icon } from "../../common/Icons/Calender";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import dateModifier from "../../../core/utils/dateModifier"

const BestBlogs = ({data}) => {
  const {title,addUserFullName,insertDate,currentView,addUserProfileImage}=data
  return (
    <div>

      <div class="max-w-[431px] text-black bg-white rounded-lg ">
        <div class=" h-[293px]">
          <img className="rounded-[32px] w-full h-full" src={addUserProfileImage} alt="" />
        </div>

        <div class="p-5">
          <h5 class="mb-1 font-yekan-700 text-[24px] font-bold tracking-tight text-nowrap text-gray-900">
            {title}
          </h5>
          <div className="gap-[156px] lg:gap-[116px] flex flex-row">
            <p class="mb-3 text-nowrap text-[14px] font-yekan-500 text-[#707070]">
              {addUserFullName}
            </p>

            <div className="flex flex-row gap-4">
              <p class="mb-3 flex flex-row gap-1 text-nowrap text-[14px] font-yekan-500 text-[#707070] ">
              {dateModifier(insertDate)}
              <div className="m-auto">
                  <Calendar03Icon />
                </div>
              </p>
              <p class="mb-3 flex flex-row gap-1 text-nowrap text-[14px] font-yekan-500 text-[#707070] ">
                {currentView}
                <div className="m-auto">
                  <ViewIcon />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBlogs;
