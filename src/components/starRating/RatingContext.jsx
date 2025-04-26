import { toast } from 'react-hot-toast';
import { createContext, useContext, useState} from 'react'
import { postCourseRating } from '../../core/services/api/courseDetail/postCourseRating'

const RatingsContext = createContext()
export const RatingsProvider  = ({children}) => {

    const [ratings, setRatings] = useState({
        average: 0,
        userRating: 0,
        totalRatings: 0,
    })

    const postRating = async (CourseId, newRating) => {
      console.log(CourseId,newRating)
        // new average
        const newTotalRatings = ratings.userRating ? ratings.totalRatings : ratings.totalRatings + 1;
        const sum = ratings.average * ratings.totalRatings - (ratings.userRating || 0) + newRating;
        const newAverage = sum / newTotalRatings;

        // update
        setRatings ({
        average: newAverage,
        userRating: newRating,
        totalRatings: newTotalRatings,
        })

        const courseData = await postCourseRating(CourseId, newRating);
        setRatings(courseData);
        console.log(postCourseRating)
    };
    
  return (
    <RatingsContext.Provider value={{ ratings, postRating}}>
        {children}
    </RatingsContext.Provider>
  )
}

export const useRatings = () => useContext(RatingsContext)
