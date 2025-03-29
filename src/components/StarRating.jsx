import { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useRatings } from './RatingContext'

const StarRating = ({ userId }) => {

    const [hoverRating, setHoverRating] = useState(0)
    const {rating , submitRating} = useRatings()

  return (
    <Rating
    
        value={rating.userRating}
        onChange={(newRating) => submitRating(userId, newRating)}
        onHoverChange={setHoverRating}
        items={5}
        radius='full'
        style={{ maxWidth: 150}}
        itemStyles={{
            activeFillColor: hoverRating ? '#fbbf24' : '#f5e0b',
            inactiveFillColor: '#e5e7eb'
        }}
    />
  )
}

export { StarRating }
