import React, { useEffect, useState } from "react";
import WelcomeUser from "./WelcomeUser";
import DashboardTable from "../../common/Dashboard/Table/DashboardTable";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { getMyCourses } from "../../../core/services/api/Dashboard/dashborad";
// import DashboardTable from "../../common/Dashboard/Table/DashboardTable";
// import Table, { DashboardTable } from '../../common/Dashboard/Table/DashboardTable'
const courses = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "دوره فیگما",
    instructor: "علی احمدی",
    date: "۱۴۰۳/۰۲/۱۵",
    level: "پیشرفته",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: " جاوا اسکریپت",
    instructor: "زهرا محمدی",
    date: "۱۴۰۳/۰۳/۱۰",
    level: "مقدماتی",
  },
];
const StudentPanelPage = () => {
  // const [myCourse, setmyCourse] = useState();

  // const getmyCourses = async () => {
  //   const myCourse = await getMyCourses();
  //   setmyCourse(myCourse);
  // };

  // useEffect(() => {
  //   getmyCourses();
  // }, []);

  const percentage = 66;
  return (
    <div>
      <div className=" py-6 px-6">
        <WelcomeUser />
      </div>

      <div className="flex flex-row gap-6 px-6 pb-6">
        <div className="bg-[#F6F6F6] px-4  min-w-3/5 flex flex-col rounded-3xl">
          <div className="flex flex-row justify-between items-center">
            <p className="text-[14px] font-yekan-600 py-2">دوره من</p>
            <p className="text-[14px] text-[#3772FF] font-yekan-600 py-2">مشاهده بیشتر</p>
          </div>
          <DashboardTable courses={courses} />
        </div>
        <div className="rounded-3xl hidden xl:flex xl:flex-col bg-[#F6F6F6]">
          <div className="px-4 py-2 flex flex-row gap-7">
            <p className="text-[14px] text-nowrap font-yekan-600">
              وضعیت اطلاعات حساب کاربری
            </p>
            <div className="flex items-center">
              <ViewIcon width={20} height={20} color={"#3772FF"} />
            </div>
          </div>
          <div className="mt-[22px] m-auto w-[136px] h-[136px]">
            <CircularProgressbar
              value={percentage ? percentage : 0}
              circleRatio={1}
              strokeWidth={10}
              text={`${percentage ? percentage : 0}%`}
              styles={buildStyles({
                rotation: 1,
                trailColor: "#DCDCDC",
                pathColor: "#FFDE37",
                textColor: "black",
              })}
            />
          </div>
          <p className="py-5 flex items-center justify-center text-[14px] text-nowrap font-yekan-600">
            اطلاعات حساب کاربری شما کامل نیست
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-6 px-6 pb-6">
        <DashboardTable courses={courses} />
        <div className="w-[392px] h-[487px] rounded-3xl bg-[#F6F6F6]">
          <div className="flex flex-row text-nowrap text-[14px] font-yekan-600 gap-[153px]">
            <p className="px-4 py-2"> نظرات شما</p>
            <p className="px-4 py-2 text-[#3772FF]"> مشاهده بیشتر</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPanelPage;
