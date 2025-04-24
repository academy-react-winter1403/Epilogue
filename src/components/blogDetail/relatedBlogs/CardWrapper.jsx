import React from "react";
import BestBlogs from "../../landing/bestBlogs/BestBlogs";

const BlogWrapper = ({newsId, blog}) => {
  return (
    <>
      <div className=" pt-[118px] font-yekan-700 font-bold flex flex-col items-center justify-center pb-[46px] text-nowrap text-[32px]">
        <h3 className=""> بلاگ های مرتبط</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[33px]">
        {/* {blog?.slice(0, 3).map((item) => {
          return <BestBlogs data={item} />;
        })} */}
      </div>
     
    </>
  );
};

export { BlogWrapper }
