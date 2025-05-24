import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import dateModifier from "../../../core/utils/dateModifier";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; 
import { Cancel01Icon } from "../../common/Icons/Cancel";
import { BookDownloadIcon } from "../../common/Icons/Book-downloadIcon";
import {
  deleteCourseFav,
  getFavoriteCourses,
} from "../../../core/services/api/Dashboard/dashborad";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next'; 

const CourseFavTable = ({ searchTerm }) => {
  const { t } = useTranslation('dashboard'); 
  const queryClient = useQueryClient(); 

  const { data: favoriteCourses } = useQuery({
    queryKey: ["favoriteCourses"],
    queryFn: getFavoriteCourses,
  });

  const [filteredCoursesFav, setfilteredCoursesFav] = useState([]);

  useEffect(() => {
    if (favoriteCourses?.favoriteCourseDto) {
      const term = searchTerm?.toLowerCase(); 
      const newfilteredCoursesFav = favoriteCourses?.favoriteCourseDto.filter(
        (course) => course.courseTitle.toLowerCase().includes(term)
      );
      setfilteredCoursesFav(newfilteredCoursesFav);
    }
  }, [favoriteCourses, searchTerm]);

  const deleteCourseFavMutation = useMutation({
    mutationFn: deleteCourseFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoriteCourses"] });
      toast.success(t('courseRemovedFromFavorites'));
    },
    onError: () => {
      toast.error(t('errorRemovingCourseFromFavorites')); 
    },
  });

  const deleteCourseFavUser = (userFavoriteId) => {
    const formData = new FormData();
    formData.append("CourseFavoriteId", userFavoriteId);
    deleteCourseFavMutation.mutate(formData);
  };

  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5 overflow-auto">
      <div className="bg-[#F1F1F1] themed-dashTable-header text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className="w-[10%]">{t('numberSign')}</p> 
        <p className="w-[19%]">{t('name')}</p> 
        <p className="w-[15%]">{t('instructor')}</p>
        <p className="w-[18%]">{t('holdingDate')}</p> 
        <p className="w-[10%]">{t('level')}</p> 
      </div>

      <div className="overflow-y-auto">
        {filteredCoursesFav.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            {t('noCoursesFound')}
          </p>
        ) : (
          filteredCoursesFav.map((item) => (
            <div
              key={item.courseId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={
                    item.tumbImageAddress ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"
                  }
                  className="min-w-[83px] h-[52px] rounded-[12px] object-cover"
                  alt={item.courseTitle}
                />
              </div>
              <p className="w-[37%] truncate font-yekan-600">
                {item.courseTitle}
              </p>
              <p className="w-[45%] font-yekan-600">{item.teacheName}</p>

              <p className="w-[35%] font-yekan-600">
                {dateModifier(item.lastUpdate)}
              </p>

              <p className="w-[20%] truncate px-2 py-1 flex items-center justify-center bg-[#FF37F5] rounded-3xl text-white text-[14px] font-yekan-600">
                {item.levelName}
              </p>
              <div className="mr-[20px] flex px-2 gap-2">
                <ViewIcon width={24} height={24} cursor={"pointer"} />
                <BookDownloadIcon color={"#707070"} />
                <Cancel01Icon
                  color={"#FF5353"}
                  onClick={() => deleteCourseFavUser(item.favoriteId)}
                  cursor={"pointer"}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseFavTable;