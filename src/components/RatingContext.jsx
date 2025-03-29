import { createContext, useContext, useState} from 'react'
import axios from 'axios'

const RatingsContext = createContext()
export const RatingContext = (children, courseId) => {

    const [ratings, setRatings] = useState({
        average: 0,
        userRating: 0,
        totalRatings: 0,
    })

    const submitRating = async (userId, newRating) => {
        // new average
        try {

            const newTotalRatings = ratings.userRating ? ratings.totalRatings : ratings.totalRatings + 1
            
            const sum = ratings.average * ratings.totalRatings - (ratings.userRating || 0) + newRating

            const newAverage = sum / newTotalRatings

            // update
            setRatings ({
                average: newAverage,
                userRating: newRating,
                totalRatings: newTotalRatings,
            })

            await axios.post('', {
                courseId,
                userId,
                ratings: newRating,
            })

        } catch (error) {
            console.error('Error submitting rating', error)

            setRatings(prev => ({...prev}))
        }
    }

  return (
    <RatingContext.Provider value={{ ratings, submitRating}}>
        {children}
    </RatingContext.Provider>
  )
}

export const useRatings = () => useContext(RatingsContext)
