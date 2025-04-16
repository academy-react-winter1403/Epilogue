import React from 'react'
import { Rating } from '@smastrom/react-rating'
import { Star } from '@smastrom/react-rating'
import { useRatings } from './RatingContext'
import '@smastrom/react-rating/style.css'


const AverageRating = () => {
    const { ratings = { average: 0 } } = useRatings();

    return (
    <Rating
    value={ratings.average || 0}
    readOnly
    items={5}
    radios='full'
    style={{ maxWidth: 120 }}
    itemStyles={{
        itemShapes: Star,
        activeFillColor: '#f0f0f0',
        inactiveFillColor: '#f0f0f0'
    }}
    />
    )
}

export { AverageRating }
