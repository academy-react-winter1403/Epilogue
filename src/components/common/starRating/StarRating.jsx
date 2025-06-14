import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { postCourseRating } from '../../../core/services/api/courseDetail/postCourseRating';
import { postBlogRating } from '../../../core/services/api/blogDetail/postBlogRating';

import { useTranslation } from 'react-i18next';

const StarRating = ({ itemId, type, initialRating, size, RateNumber, userId }) => {
  const { t } = useTranslation('dashboard'); 


  const [rating, setRating] = useState(initialRating);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialUserRateNumber, setInitialUserRateNumber] = useState(currentUserRateNumber);
  const navigate = useNavigate();

  const sizes = {
    sm: { maxWidth: 100 },
    md: { maxWidth: 150 },
    lg: { maxWidth: 200 }
  };

  

  const handleRatingChange = async (newRating) => {
    if (!userId || userId === 0 || userId === false) {
      toast.custom((tInstance) => ( 
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">{t('loginToRate')}</p>
          <div className='flex gap-2'>
            <button
              onClick={() => navigate('/auth/login')}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              {t('login')}
            </button>
            <button
              onClick={() => toast.dismiss(tInstance.id)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
            >
              {t('close')}
            </button>
          </div>
        </div>
      ));
      return;
    }
try{
  
 
      setIsSubmitting(true);

      await (type === 'course'
        ? postCourseRating(itemId, newRating, RateNumber)
        : postBlogRating(itemId, newRating, RateNumber));
      setRating(newRating);
      toast.success(t('ratingSaved')); 
    } catch {
      toast.error(t('errorSavingRating')); 


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

