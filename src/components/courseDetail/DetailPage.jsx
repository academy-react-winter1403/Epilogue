import React, { useEffect, useState } from 'react'
import { DetailCourse } from './DetailCourse.jsx'
import { CommentSection } from '../comment/CommentSection.jsx'
import { useParams } from 'react-router-dom'
import { getCourseDetails } from "../../core/services/api/courseDetail/getCourseDetails.js"
import { QueryClient, useQuery } from '@tanstack/react-query'
import { RelatedCourses } from './RelatedCourses.jsx'

const DetailPage = () => {
  const {CourseId} = useParams();
        
  const { data: course, isLoading, isError, error} = useQuery({
    queryKey: ['courseDetails', CourseId],
    queryFn: () => getCourseDetails(CourseId),
    enabled: !!CourseId 
  });
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (isError) return <div>خطا در دریافت اطلاعات دوره : خطا :{error.message}</div>;

      
  return (
    <div className='w-auto bg-white'>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

            {/* detail */}
            <DetailCourse CourseId={CourseId} course={course}/>
          
            {/* comments */}
            <CommentSection CourseId={CourseId} course={course}/>

            {/* related-courses */}
             <RelatedCourses CourseId={CourseId} course={course}/>
        </div>
    </div>
  )
}

export { DetailPage }
