import React from "react";
import BlogFavTable from "../../components/dashboard/MyFavBlog/BlogFavTable";
import { Search01Icon } from "../../components/common/Icons/SearchIcon";
import { Calendar02Icon } from "../../components/common/Icons/CalenderIcon";

const BlogFavPage = () => {
  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">
        بلاگ های موردعلاقه
      </p>
      <div className="flex flex-row gap-[56px]">
        <div className="w-[86px] h-[43px] flex flex-row gap-2 ">
          <div className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
            <div className="flex items-center justify-center p-2">
              <Search01Icon color={"00000"} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] text-black">جست‌جو</p>
            {/* <p className="font-yekan-600">{dateTime.time}</p> */}
          </div>
        </div>
        <div className="w-[174px] h-[43px] flex flex-row gap-2 ">
          <div className="rounded-full w-[40px] h-[40px]  bg-[#F1F1F1] ">
            <div className="flex items-center justify-center p-2">
              <Calendar02Icon color={"00000"} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] flex items-center justify-center text-black">
              تاریخ برگزاری - اتمام
            </p>
            <p className="text-[14px] font-yekan-600 text-nowrap">
              {/* {dateTime.date} */}
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-full  min-h-full bg-[#F6F6F6] rounded-3xl">
        <BlogFavTable />
      </div>
    </div>
  );
};

export default BlogFavPage;
