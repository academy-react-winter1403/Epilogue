import React from "react";
import BestBlogs from "./BestBlogs";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const BestBlogWrapper = ({news}) => {
  const { t } = useTranslation('bestBlogWrapper');

  return (
    <>
      <div className=" pt-[118px] font-yekan-700 font-bold flex flex-col items-center justify-center pb-[46px] text-nowrap text-[32px]">
        {t('topBlogsOfWeek')}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[33px]">
        {news?.slice(0, 3).map((item) => {
          return <BestBlogs key={item.id} data={item} />;
        })}
      </div>
      <div className="flex flex-row items-center justify-center pb-12">
        <Link to={"/BlogeList"}>
          <button className="w-[125px] font-yekan-500 cursor-pointer h-[39px] rounded-[40px] text-white bg-[#2F2F2F]">
            {t('viewMore')}
          </button>
        </Link>
      </div>
    </>
  );
};

export default BestBlogWrapper;