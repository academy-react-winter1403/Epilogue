import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getAllCourseByPagination } from '../../services/api/courseDetail/getAllCourseByPagination';

export const useRelatedCourses = (CourseId) => {
      const query = useQuery({
        queryKey: ['relatedCourses', CourseId],
        queryFn: () => getAllCourseByPagination(1, 4),
        select: (data) => {
          return data.courseFilterDtos 
            ? data.courseFilterDtos
                .filter(course => course.courseId !== CourseId)
                .slice(0, 4)
                .map(course => ({
                  id: course.courseId,
                  title: course.title,
                  image: course.tumbImageAddress,
                  price: course.cost,
                  teacherName: course.teacherName,
                  courseLevelName: course.courseLevelName,
                  
                }))
            : [];
        }
      });
  return query
}


