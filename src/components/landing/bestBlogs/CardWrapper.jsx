import React from "react";
import BestBlogs from "./BestBlogs";

const BestBlogWrapper = ({news}) => {
  return (
    <>
      <div className=" pt-[118px] font-yekan-700 font-bold flex flex-col items-center justify-center pb-[46px] text-nowrap text-[32px]">
        بلاگ های برتر هفته
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[33px]">
        {news?.slice(0, 3).map((item) => {
          return <BestBlogs data={item} />;
        })}
      </div>
      <div className="flex flex-row items-center justify-center pb-12">
        <button className="w-[125px] cursor-pointer h-[39px] rounded-[40px] text-white bg-[#2F2F2F]">
          مشاهده بیشتر
        </button>
      </div>
    </>
  );
};

export default BestBlogWrapper;
