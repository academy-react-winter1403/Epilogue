import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import {postAddLikeComment, postAddDislikeComment} from '../../core/services/api/comment/postAddLikeDislikeComment'
import likeCommentIcon from '../../assets/icons/likeCommentIcone.svg'
import dislikeCommentIcon from '../../assets/icons/dislikeCommentIcon.svg'
import activelikeCommentIcon from '../../assets/icons/activeLikeCommentIcone.svg'
import activeDislikeCommentIcon from '../../assets/icons/activDislikeCommentIcon.svg'
import { motion, AnimatePresence } from "framer-motion";

const LikeDislikeComment = ({ CourseId, likeCount, dissLikeCount }) => {
  const queryClient = useQueryClient();
  const [currentReaction, setCurrentReaction] = useState(null);
  const [counts, setCounts] = useState({ 
    like: likeCount, 
    dislike: dissLikeCount 
  });

  const { mutate: toggleReaction, isLoading } = useMutation({
    mutationFn: async (newReaction) => {
      if (newReaction === 'like') {
        await postAddLikeComment(CourseId);
      } else if (newReaction === 'dislike') {
        await postAddDislikeComment(CourseId);
      }
    },
    onMutate: (newReaction) => {
      const previousReaction = currentReaction;
      
      setCounts(prev => ({
        like: prev.like + (newReaction === 'like' ? 1 : 0) - (previousReaction === 'like' ? 1 : 0),
        dislike: prev.dislike + (newReaction === 'dislike' ? 1 : 0) - (previousReaction === 'dislike' ? 1 : 0)
      }));

      setCurrentReaction(newReaction !== previousReaction ? newReaction : null);
      return { previousReaction };
    },
    onSuccess: () => queryClient.invalidateQueries(['courseDetails', CourseId]),
    onError: (_, __, context) => {
      setCurrentReaction(context.previousReaction);
      setCounts({ like: likeCount, dislike: dissLikeCount });
    }
  });

  const handleReaction = (type) => () => {
    toggleReaction(currentReaction === type ? null : type);
  };

  return (
    <div className="flex justify-center items-center w-[100px] h-full gap-1">
      {/* Like Button */}
      <div className='flex justify-center items-center'>
        <button onClick={handleReaction('like')} disabled={isLoading} className='w-[56px] h-[56px]'>
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

      {/* Dislike Button */}
      <div className='flex items-center justify-center'>
        <button onClick={handleReaction('dislike')} disabled={isLoading} className="w-[56px] h-[56px] mt-1.5">
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