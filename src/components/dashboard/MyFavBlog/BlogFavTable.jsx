import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import dateModifier from "../../../core/utils/dateModifier";
import { useQuery } from "@tanstack/react-query";
import { Cancel01Icon } from "../../common/Icons/Cancel";
import {
  deletenewseFav,
  getFavoriteArticles,
} from "../../../core/services/api/Dashboard/dashborad";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BlogFavTable = ({ searchTerm }) => {
  const { data: favoriteArticles } = useQuery({
    queryKey: ["favoriteArticles"],
    queryFn: getFavoriteArticles,
  });

  const [filteredBlogFav, setfilteredBlogFav] = useState([]);

  useEffect(() => {
    if (favoriteArticles?.myFavoriteNews) {
      const term = searchTerm.toLowerCase();
      const newfilteredBlogFav = favoriteArticles.myFavoriteNews.filter(
        (blog) => blog.title.toLowerCase().includes(term)
      );
      setfilteredBlogFav(newfilteredBlogFav);
    }
  }, [favoriteArticles, searchTerm]);

  const handleDeleteFav = async (favoriteId) => {
    const RemoveFavNews = {
      deleteEntityId: favoriteId, //favoriteId?
    };
    const result = await deletenewseFav(RemoveFavNews);
    if (result.success) {
      toast.success("این مقاله از موردعلاقه ها حذف شد");
    } else if (!result.success) {
      toast.error("عملیات حذف موردعلاقه مقاله با خطا مواجه شد");
    }
  };
  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5  overflow-auto">
      <div className="bg-[#F1F1F1] themed-dashTable-header rounded-[16px] text-[#707070] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[10%]">#</p>
        <p className=" w-[19%]">نام</p>
        <p className=" w-[15%]">امتیاز</p>
        <p className=" w-[18%]">تاریخ برگزاری</p>
        <p className=" w-[10%]">تعداد بازدید</p>
      </div>

      <div className=" overflow-y-auto">
        {filteredBlogFav.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          filteredBlogFav.map((item) => (
            <div
              key={item.newsId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={
                    item.currentImageAddressTumb ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"
                  }
                  className="min-w-[83px] h-[52px] bg-amber-400 rounded-[12px] object-cover"
                />
              </div>
              <p className="w-[37%] truncate font-yekan-600">{item.title}</p>
              <p className="w-[25%] truncate  font-yekan-600">
                {item.currentRate}
              </p>
              <p className="w-[35%] font-yekan-600">
                {dateModifier(item.updateDate)}
              </p>
              <p className="w-[20%]  truncate font-yekan-600">
                {item.currentLikeCount}
              </p>

              <div className="mr-[20px] flex px-2 gap-2">
                <Link to={`/news-details/${item.id}`}>
                  <ViewIcon width={24} height={24} cursor={"pointer"} />
                </Link>{" "}
                <Cancel01Icon
                  color={"#FF5353"}
                  onClick={() => handleDeleteFav(item.favoriteId)}
                  cursor={"pointer"}
                />
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default BlogFavTable;
