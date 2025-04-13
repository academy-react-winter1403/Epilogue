import React from "react";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import dateModifier from "../../../core/utils/dateModifier";
import { useQuery } from "@tanstack/react-query";
import { Cancel01Icon } from "../../common/Icons/Cancel";
import { getFavoriteArticles } from "../../../core/services/api/Dashboard/dashborad";

const BlogFavTable = () => {
  const { data: favoriteArticles } = useQuery({
    queryKey: ["favoriteArticles"],
    queryFn: getFavoriteArticles,
  });

  console.log(favoriteArticles, "favoriteArticles");

  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5  overflow-auto">
      <div className="bg-[#F1F1F1] rounded-[16px] text-[#707070] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[10%]">#</p>
        <p className=" w-[19%]">نام</p>
        <p className=" w-[15%]">مدرس</p>
        <p className=" w-[18%]">تاریخ برگزاری</p>
        <p className=" w-[10%]">سطح</p>
      </div>

      <div className=" overflow-y-auto">
        {favoriteArticles?.myFavoriteNews.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          favoriteArticles?.myFavoriteNews.map((item) => (
            <div
              key={item.newsId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={item.currentImageAddressTumb}
                  className="min-w-[83px] h-[52px] border rounded-[12px] object-cover"
                />
              </div>
              <p className="w-[17%] truncate font-yekan-600">{item.title}</p>
              <p className="w-[17%] truncate  font-yekan-600">
                {item.studentName}
              </p>
              <p className="w-[35%] font-yekan-600">
                {dateModifier(item.updateDate)}
              </p>
              <div className="gap-2 pl-4 flex flex-row">
                <ViewIcon width={24} height={24} />
                <Cancel01Icon color={"#FF5353"} />
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default BlogFavTable;
