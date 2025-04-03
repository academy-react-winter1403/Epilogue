import React from "react";
import WelcomeUser from "./WelcomeUser";
import DashboardTable from "../../common/Dashboard/Table/DashboardTable";
import { Progress } from "@heroui/react";
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
  return (
    <div>
      <div className=" py-6 px-6">
        <WelcomeUser />
      </div>
      <div className="flex flex-row gap-6 p-6 px-6">
        <DashboardTable courses={courses} />
        <div className="w-[253px] h-[246px] rounded-3xl bg-[#F6F6F6]"></div>
      </div>
    </div>
  );
};

export default StudentPanelPage;
