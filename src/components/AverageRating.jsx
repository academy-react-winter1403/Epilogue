import React from 'react'
import { Rating } from '@smastrom/react-rating'
import { useRatings } from './RatingContext'
import '@smastrom/react-rating/style.css'


const AverageRating = () => {
    const { Rating } = useRatings()

    return (
    <Rating
    value={Rating.average}
    readOnly
    items={5}
    radios='full'
    style={{ maxWidth: 120 }}
    itemStyles={{
        activeFillColor: '#f0f0f0',
        inactiveFillColor: '#f0f0f0'
    }}
    />
  
    )
}

export { AverageRating }
