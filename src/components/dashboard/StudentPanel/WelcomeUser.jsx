import React from "react";
import { Time02Icon } from "../../common/Icons/TimeIcon";
import { Calendar03Icon } from "../../common/Icons/CalenderIcon";

const WelcomeUser = () => {
  return (
    <div className="flex flex-row gap-10">
      <div>
        <div className="flex flex-row gap-4 pb-[22px]">
          <p className="text-2xl text-nowrap font-yekan-700">سلام پارسا , روزت بخیر👋</p>
          <p className="text-[14px] text-nowrap text-[#707070] font-yekan-500 pt-2">
            امیدوارم امروز روز خوبی رو داشته باشید
          </p>
        </div>
        <div className="flex flex-row gap-[56px]">
          <div className="w-[86px] h-[43px] flex flex-row gap-2 ">
            <div className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
              <div className="flex items-center justify-center p-2">
                <Time02Icon color={"00000"} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] text-[#707070]">ساعت</p>
              <p>20:20</p>
            </div>
          </div>
          <div className="w-[174px] h-[43px] flex flex-row gap-2 ">
            <div className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
              <div className="flex items-center justify-center p-2">
                <Calendar03Icon color={"00000"} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] text-[#707070]">تاریخ</p>
              <p>29 اردیبهشت 1403</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col item-end text-[16px] text-nowrap font-yekan-500 pt-[25px] pr-[150px]">
        <p>سلام ، من پارسام</p>
        <p> بنویسم خودتون بیایید منو </p>
        <p>بشناسید حال ندارم بخدا خستم</p>
      </div>
    </div>
  );
};

export default WelcomeUser;
