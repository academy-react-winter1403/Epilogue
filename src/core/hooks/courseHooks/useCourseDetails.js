import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCourseDetails } from "../../services/api/courseDetail/getCourseDetails.js"

export const useCourseDetails = () => {
   const {CourseId} = useParams();

   const query = useQuery({
     queryKey: ['courseDetails', CourseId],
     queryFn: () => getCourseDetails(CourseId),
     enabled: !!CourseId 
   });

  return query
};