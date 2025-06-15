import React, { useEffect, useState } from "react";
import { ArrowLeft01Icon } from "../../common/Icons/ArrowLeftIcon";
import { ThumbsUpIcon } from "../../common/Icons/LikeIcon";
import { ThumbsDownIcon } from "../../common/Icons/DisLikeIcon";
import {
  getArticlesComments,
  getCourseComments,
} from "../../../core/services/api/Dashboard/dashborad";
import dateModifier from "../../../core/utils/dateModifier";
import CommentModal from "./CommentModal";
import { UserAiIcon } from "../../common/Icons/UserIcon";
import { useTranslation } from 'react-i18next'; 


const YourComment = () => {
  const [comments, setComments] = useState([]);
  const [courseComments, setCourseComments] = useState([]);
  const [blogComments, setBlogComments] = useState([]);
  const [open, setOpen] = useState(false);
    const { t } = useTranslation('dashboard');
  

  const fetchAllComments = async () => {
    try {
      const [courseRes, articleRes] = await Promise.all([
        getCourseComments(),
        getArticlesComments(),
      ]);

      const courseData = courseRes.myCommentsDtos || [];
      const articleData = articleRes.myNewsCommetDtos || [];

      setCourseComments(courseData);
      setBlogComments(articleData);

      const merged = [
        ...courseData.map((c) => ({ ...c, type: "course" })),
        ...articleData.map((c) => ({ ...c, type: "article" })),
      ];

      setComments(merged);
    } catch (err) {
      console.error("خطا در دریافت کامنت‌ها:", err);
    }
  };

  useEffect(() => {
    fetchAllComments();
  }, []);
  return (
    <>
      <div className="max-w-md mx-auto h-[487px] p-1 flex flex-col">
        <div className="justify-between items-center flex flex-row text-nowrap text-[14px] font-yekan-600 px-4 py-2">
          {/* <p>نظرات شما</p> */}
          <p>{t('yourComments')}</p>
          <div
            className="text-[#3772FF] flex flex-row gap-1 "
            onClick={() => setOpen(true)}
          >
            {t('viewMore')}
            <ArrowLeft01Icon color={"#3772FF"} />
            <CommentModal
              isOpen={open}
              onClose={() => setOpen(false)}
              courseComments={courseComments}
              blogComments={blogComments}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <span className="h-px flex-1 bg-gray-300"></span>
          <h2 className="px-4 text-[16px] text-[#707070] whitespace-nowrap">
            دوره و بلاگ ها
          </h2>
          <span className="h-px flex-1 bg-gray-300"></span>
        </div>

        <div className="flex-1 overflow-y-scroll space-y-4 pr-2">
          {comments?.map((item, i) => (
            <div key={i} className=" pb-3 ">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-lg">
                  {/* <UserSquareIcon/> */}
                  <UserAiIcon/>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px]">{item.title}</span>
                  <span className="text-xs text-gray-500">
                    {dateModifier(item.insertDate)}
                  </span>
                </div>
              </div>
              <p className="whitespace-pre-line text-sm w-[90%] text-gray-800 mt-1">
                {item.describe}
              </p>
              <div className=" flex flex-row gap-4 mt-4">
                <div className="text-xs flex items-center gap-2">
                  <ThumbsUpIcon color={"#2F2F2F"} width={24} height={24} />
                  <span>{item.likeCount}</span>
                </div>
                <div className="text-xs flex items-center gap-2">
                  <ThumbsDownIcon color={"#2F2F2F"} width={24} height={24} />
                  <span>{item.dislikeCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourComment;
