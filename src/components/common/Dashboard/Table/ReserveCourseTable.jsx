import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../Icons/ViewIcon";
import dateModifier from "../../../../core/utils/dateModifier";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Cancel01Icon } from "../../Icons/Cancel";
import {
  deleteCourseReserve,
  getReservedCourses,
} from "../../../../core/services/api/Dashboard/dashborad";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const ReservedCoursesTable = ({ showAccept, searchTerm }) => {
  const { t } = useTranslation('dashboard'); 

  const { data: courseReserved, refetch } = useQuery({ 
    queryKey: ["courseReserved"],
    queryFn: () => getReservedCourses(),
  });

  const [filteredReservedCourses, setfilteredReservedCourses] = useState([]);

  useEffect(() => {
    if (courseReserved) {
      const term = searchTerm?.toLowerCase();
      const newFilteredCourses = courseReserved?.filter((course) =>
        course?.courseName.toLowerCase().includes(term)
      );
      setfilteredReservedCourses(newFilteredCourses);
    }
  }, [courseReserved, searchTerm]);

  const deleteReservedCourse = (courseId) => {
    const deletedCourse = { id: courseId };
    mutation.mutate(deletedCourse);
  };

  const mutation = useMutation({
    mutationFn: deleteCourseReserve,
    onSuccess: () => {
      toast.success(t('courseDeleted'));
      refetch();
    },
    onError: () => {
      toast.error(t('errorDeletingCourse')); 
    },
  });

  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5 overflow-auto">
      <div className="bg-[#F1F1F1] themed-dashTable-header text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">

        <p className="w-[10%]">{t('numberSign')}</p> 
        <p className="w-[19%]">{t('name')}</p> 
        <p className="w-[19%]">{t('instructor')}</p> 
        <p className="w-[19%]">{t('holdingDate')}</p> 
        {showAccept && <p className="w-[19%]">{t('status')}</p>} 

      </div>

      <div className="overflow-y-auto">
        {filteredReservedCourses?.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            {t('noCoursesFound')} 
          </p>
        ) : (
          filteredReservedCourses?.map((item) => (
            <div
              key={item.courseId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={
                    item.tumbImageAddress ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoQIX__QPQ_Gz0pBbMdAC-VTN9M64Q0FXgg&s"
                  }
                  className="min-w-[83px] h-[52px] rounded-[12px] object-cover"
                  alt={item.courseName}
                />
              </div>

              <p className="w-[37%] truncate font-yekan-600">
                {item.courseName}
              </p>
              <p className="w-[45%] truncate font-yekan-600">
                {item.studentName}
              </p>
              <p className="w-[35%] font-yekan-600">
                {dateModifier(item.reserverDate)}
              </p>
              {showAccept && (
                <div
                  className={`w-[20%] px-2 py-1 flex items-center justify-center rounded-3xl text-white text-[14px] ${
                    item.accept ? "bg-[#3772FF]" : "bg-[#FF5353]"
                  }`}
                >
                  {item.accept ? t('confirmed') : t('pending')} 
                </div>
              )}
              <div className="mr-[20px] flex px-2 gap-2">
                <Link to={"/course-details/" + item.courseId}>
                  <ViewIcon width={24} height={24} cursor={"pointer"} />
                </Link>
                <Cancel01Icon
                  onClick={() => deleteReservedCourse(item.courseId)}
                  color={"#FF5353"}
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

export default ReservedCoursesTable;