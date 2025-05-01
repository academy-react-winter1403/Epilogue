
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { postCourseRating } from '../../../core/services/api/courseDetail/postCourseRating';
import { postBlogRating } from '../../../core/services/api/blogDetail/postBlogRating';

const StarRating = ({ itemId, type , initialRating , size , RateNumber, currentUserRateNumber}) => {
  const [rating, setRating] = useState(initialRating);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const sizes = {
    sm: { maxWidth: 100 },
    md: { maxWidth: 150 },
    lg: { maxWidth: 200 }
  };

  const handleRatingChange = async (newRating) => {
    if (!itemId) {
      toast.custom((t) => (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">برای امتیاز دادن وارد شوید</p>
          <div className='flex gap-2'>
            <button 
              onClick={() => navigate('/auth/login')} 
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              ورود
            </button>
            <button 
              onClick={() => toast.dismiss(t.id)} 
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
            >
              بستن
            </button>
          </div>
        </div>
      ));
      return;
    }
    try {
      setIsSubmitting(true);
      await (type === 'course' 
        ? postCourseRating(itemId, newRating, currentUserRateNumber) 
        : postBlogRating(itemId, newRating, RateNumber));
      setRating(newRating);
      toast.success('امتیاز ثبت شد');
    } catch {
      toast.error('خطا در ثبت امتیاز');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Rating
      value={rating}
      onChange={handleRatingChange}
      items={5}
      radius="full"
      style={{ maxWidth: sizes[size].maxWidth }}
      itemStyles={{
        itemShapes: Star,
        activeFillColor: '#fbbf24',
        inactiveFillColor: '#e5e7eb'
      }}
      disabled={isSubmitting}
    />
  );
};

export { StarRating }
