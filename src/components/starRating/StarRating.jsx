import { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import { Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useRatings } from './RatingContext'
import toast, { Toaster } from 'react-hot-toast'
import { div } from 'framer-motion/client'
import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom'

const StarRating = ({ courseId }) => {
  const navigate = useNavigate()
  const [hoverRating, setHoverRating] = useState(0)
  const {ratings , submitRating} = useRatings()

  const handleRatingChange = (newRating) => {
    if(!courseId) {
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
        bg-white p-4 rounded-lg shadow-lg border border-gray-200`}>
          
          <p className="text-sm text-gray-700 mb-2">برای امتیاز دادن باید وارد شوید</p>
          <div className='flex gap-2'>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate('/auth/RegisterPage')
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            > ورود 
            </button>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
            >
              بستن
            </button>
          </div>
        </div>
      ))
      return
    }
    submitRating(courseId, newRating);
  }

  return (
    <div className="relative">
      <Rating
          value={ratings.userRating}
          onChange={handleRatingChange}
          onHoverChange={setHoverRating}
          items={5}
          radius='full'
          style={{ maxWidth: 150}}
          itemStyles={{
            itemShapes: Star,
            activeFillColor: hoverRating ? '#fbbf24' : '#f5e0b',
            inactiveFillColor: '#e5e7eb'
          }}
      />
    </div>
  )
}

export { StarRating }
