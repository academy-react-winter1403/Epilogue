import { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useRatings } from './RatingContext'
import toast, { Toaster } from 'react-hot-toast'
import { div } from 'framer-motion/client'

const StarRating = ({ userId }) => {

  const [hoverRating, setHoverRating] = useState(0)
  const {rating , submitRating} = useRatings()

  const handleRatingChange = (newRating) => {
    if(!userId) {
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
        bg-white p-4 rounded-lg shadow-lg border border-gray-200`}>
          
          <p className="text-sm text-gray-700 mb-2">برای امتیاز دادن باید وارد شوید</p>
          <div className='flex gap-2'>
            <button
            onClick={() => {
              toast.dismiss(t.id);
              console.log('Navigate to login');
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            > ورود </button>
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
    submitRating(userId, newRating);
  }

  return (
    <div className="relative">
      <Rating
      
          value={rating.userRating}
          onChange={handleRatingChange}
          onHoverChange={setHoverRating}
          items={5}
          radius='full'
          style={{ maxWidth: 150}}
          itemStyles={{
              activeFillColor: hoverRating ? '#fbbf24' : '#f5e0b',
              inactiveFillColor: '#e5e7eb'
          }}
      />
       <Toaster 
          position="bottom-center" 
          toastOptions={{
              duration: 5000,
          }}
        />
    </div>
  )
}

export { StarRating }
