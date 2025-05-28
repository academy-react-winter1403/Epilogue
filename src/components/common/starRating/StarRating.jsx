import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { postCourseRating } from '../../../core/services/api/courseDetail/postCourseRating';
import { postBlogRating } from '../../../core/services/api/blogDetail/postBlogRating';
import { getItem } from '../../../core/utils/storage.services';

const StarRating = ({ itemId, type, currentUserRateNumber, size,  }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialUserRateNumber, setInitialUserRateNumber] = useState(currentUserRateNumber);
  const navigate = useNavigate();

  const sizes = {
    sm: { maxWidth: 100 },
    md: { maxWidth: 150 },
    lg: { maxWidth: 200 }
  };

  const handleRatingChange = async (rateNumber) => {
    try {
      if (!getItem('token')) {
        throw new Error('USER_NOT_LOGGED_IN');
      }
  
      if (initialUserRateNumber > 0) {
        toast.error('شما قبلاً به این مورد امتیاز داده‌اید');
        return;
      }
  
      setIsSubmitting(true);
      
      await (type === 'course'
        ? postCourseRating(itemId, rateNumber)
        : postBlogRating(itemId, rateNumber));
      
      setInitialUserRateNumber(rateNumber);
      toast.success('امتیاز با موفقیت ثبت شد');
      
    } catch (error) {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.custom((t) => (
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
            <p className="text-sm text-gray-700 mb-3">برای امتیاز دادن باید وارد حساب کاربری خود شوید</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  navigate('/auth/login');
                  toast.dismiss(t.id);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
              >
                ورود به حساب
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
              >
                انصراف
              </button>
            </div>
          </div>
        ));
      } else if (error.response?.status === 400) {
        toast.error('امتیاز وارد شده معتبر نیست');
      } else {
        toast.error('خطایی در ثبت امتیاز رخ داد');
        console.error('Rating submission error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Rating
      value={initialUserRateNumber}
      onChange={handleRatingChange}
      items={5}
      radius="full"
      style={{ maxWidth: sizes[size].maxWidth }}
      itemStyles={{
        itemShapes: Star,
        activeFillColor: '#fbbf24',
        inactiveFillColor: '#e5e7eb'
      }}
      disabled={isSubmitting || initialUserRateNumber > 0}
      readOnly={initialUserRateNumber > 0}
      disableFillHover={true}
    />
  );
};

export { StarRating }
