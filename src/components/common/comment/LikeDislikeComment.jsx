import React, { useState } from 'react'
import likeCommentIcon from '../../../assets/icons/likeCommentIcone.svg'
import dislikeCommentIcon from '../../../assets/icons/dislikeCommentIcon.svg'
import activelikeCommentIcon from '../../../assets/icons/activeLikeCommentIcone.svg'
import activeDislikeCommentIcon from '../../../assets/icons/activDislikeCommentIcon.svg'
import { motion, AnimatePresence } from "framer-motion";
  
const LikeDislikeComment = ({ currentUserLikeId, likeCount, dissLikeCount, delLike, disliked, liked }) => {
  const [currentReaction, setCurrentReaction] = useState(null);
  const [counts, setCounts] = useState({ 
    like: likeCount, 
    dislike: dissLikeCount 
  });

  const handleReaction = (type) => () => {
    const newReaction = currentReaction === type ? null : type;
    
    setCounts(prev => ({
      like: prev.like + (newReaction === 'like' ? 1 : 0) - (currentReaction === 'like' ? 1 : 0),
      dislike: prev.dislike + (newReaction === 'dislike' ? 1 : 0) - (currentReaction === 'dislike' ? 1 : 0)
    }));

    const previousReaction = currentReaction;
    setCurrentReaction(newReaction);

    if (newReaction === 'like') {
      if (previousReaction === 'dislike') {
        disliked.mutate();
      }
      liked.mutate();
    } 
    else if (newReaction === 'dislike') {
      if (previousReaction === 'like') {
        liked.mutate();
      }
      disliked.mutate();
    }
    else {
      delLike.mutate();
    }
  };

  return (
    <div className="flex justify-center items-center w-[100px] h-full gap-1">
      <div className='flex justify-center items-center'>
        <button 
          onClick={handleReaction('like')} 
          disabled={liked.isLoading || disliked.isLoading || delLike.isLoading}
          className='w-[56px] h-[56px]'
        >
          <img 
            src={currentReaction === 'like' ? activelikeCommentIcon : likeCommentIcon} 
            className="cursor-pointer"
            alt="Like"
          />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={counts.like}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-700 w-[16px] h-[16px] mr-[-30px]"
          >
            {counts.like}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className='flex items-center justify-center'>
        <button 
          onClick={handleReaction('dislike')} 
          disabled={liked.isLoading || disliked.isLoading || delLike.isLoading}
          className="w-[56px] h-[56px] mt-1.5"
        >
          <img 
            src={currentReaction === 'dislike' ? activeDislikeCommentIcon : dislikeCommentIcon}
            className="cursor-pointer"
            alt="Dislike"
          />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={counts.dislike}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-700 mr-[-30px]"
          >
            {counts.dislike}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
export { LikeDislikeComment }