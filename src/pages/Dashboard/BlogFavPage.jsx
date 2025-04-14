import React from "react";
import BlogFavTable from "../../components/dashboard/MyFavBlog/BlogFavTable";
import { Search01Icon } from "../../components/common/Icons/SearchIcon";
import { Calendar02Icon } from "../../components/common/Icons/CalenderIcon";
import { Field, Formik } from "formik";
import SearchBox from "../../components/common/Dashboard/Search/SearchBox";

const BlogFavPage = () => {
  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">
        بلاگ های موردعلاقه
      </p>
      <div className="flex flex-row gap-[24px]">
        <SearchBox />

        <div className="flex flex-col  gap-2  p-2">
          <div className=" flex flex-row gap-2">
            <Calendar02Icon color={"00000"} />
            <p className="text-[14px]  text-black">تاریخ برگزاری - اتمام</p>
          </div>
          <Formik>
            <Field
              type=""
              className=" w-[258px] h-[48px] rounded-2xl bg-[#F1F1F1]"
            />
          </Formik>
        </div>
      </div>
      <div className="md:col-span-full  min-h-full bg-[#F6F6F6] rounded-3xl">
        <BlogFavTable />
      </div>
    </div>
  );
};

export default BlogFavPage;
