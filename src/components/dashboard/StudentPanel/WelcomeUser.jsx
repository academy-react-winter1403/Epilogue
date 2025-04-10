import React, { useEffect, useState } from "react";
import { Time02Icon } from "../../common/Icons/TimeIcon";
import { Calendar03Icon } from "../../common/Icons/CalenderIcon";

const WelcomeUser = () => {
  const [dateTime, setDateTime] = useState({ time: "", date: "",greeting: "" });
  const now = new Date();

  const hour = now.getHours();

  let greeting = "";
  if (hour >= 5 && hour < 12) greeting = "صبح بخیر";
  else if (hour >= 12 && hour < 16) greeting = "ظهر بخیر";
  else if (hour >= 16 && hour < 20) greeting = "عصر بخیر";
  else greeting = "شب بخیر";

  useEffect(() => {
    const now = new Date();
    const time = now.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = now.toLocaleDateString("fa-IR", {
      month: "long",
      day: "numeric",
      year: "numeric",

    });
    setDateTime({ time, date,greeting });
  }, []);
  return (
    <div className="flex flex-row gap-10">
      <div>
        <div className="flex flex-row gap-4 pb-[22px]">
          <p className="text-2xl text-nowrap font-yekan-700">
            سلام پارسا , {dateTime.greeting}👋
          </p>
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
              <p className="font-yekan-600">{dateTime.time}</p>
            </div>
          </div>
          <div className="w-[174px] h-[43px] flex flex-row gap-2 ">
            <div className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
              <div className="flex items-center justify-center p-2">
                <Calendar03Icon color={"00000"} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]  text-[#707070]">تاریخ</p>
              <p className="text-[14px] font-yekan-600 text-nowrap">{dateTime.date}</p>
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
