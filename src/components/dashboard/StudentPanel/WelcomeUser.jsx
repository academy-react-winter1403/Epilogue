import React, { useEffect, useState } from "react";
import { Time02Icon } from "../../common/Icons/TimeIcon";
import { getUserInfo } from "../../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";

import useUserStore from "../../../core/constant/user-info";

import { Calendar03Icon } from "../../common/Icons/Calender";


const WelcomeUser = () => {

    const [dateTime, setDateTime] = useState({
      time: "",
      date: "",
      greeting: "",
    });
  
    const getGreeting = (hour) => {
      if (hour >= 5 && hour < 12) return "صبح بخیر";
      else if (hour >= 12 && hour < 16) return "ظهر بخیر";
      else if (hour >= 16 && hour < 20) return "عصر بخیر";
      else return "شب بخیر";
    };
  
    useEffect(() => {
      const updateDateTime = () => {
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
        const greeting = getGreeting(now.getHours());
  
        setDateTime({ time, date, greeting });
      };
  
      updateDateTime();
  
      const interval = setInterval(updateDateTime, 1000);
  
      return () => clearInterval(interval);
    }, []);

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo
})


// console.log(userInfo , "userInfo")

  return (
    <div className="flex flex-row gap-10">
      <div>
        <div className="flex flex-row gap-4 pb-[22px]">
          <p className="text-2xl color-text-primary text-nowrap font-yekan-700">
            سلام {userInfo?.fName} , {dateTime.greeting}👋
          </p>
          <p className="text-[14px] text-nowrap text-[var(--text-grey)] font-yekan-500 pt-2">
            امیدوارم امروز روز خوبی رو داشته باشید
          </p>
        </div>
        <div className="flex flex-row gap-[56px]">
          <div className="w-[86px] h-[43px] flex flex-row gap-2 ">
            <button className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
              <div className="flex items-center justify-center p-2">
                <Time02Icon color={"00000"} />
              </div>
            </button>
            <div className="flex flex-col">
              <p className="text-[14px] text-[var(--text-grey)]">ساعت</p>
              <p className="font-yekan-600 ">{dateTime.time}</p>
            </div>
          </div>
          <div className="w-[174px] h-[43px] flex flex-row gap-2 ">
            <button className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
              <div className="flex items-center justify-center p-2">
                <Calendar03Icon color={"00000"} />
              </div>
            </button>
            <div className="flex flex-col">
              <p className="text-[14px] text-[var(--text-grey)]">تاریخ</p>
              <p className="text-[14px] font-yekan-600 text-nowrap">
                {dateTime.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  text-[16px] font-yekan-500 pt-[25px] pr-[150px]">
        {userInfo?.userAbout}

      </div>
    </div>
  );
};

export default WelcomeUser;
