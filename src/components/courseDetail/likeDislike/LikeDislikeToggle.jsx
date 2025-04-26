import { useMutation, useQueryClient } from '@tanstack/react-query'
import likeIconeActive from "../../../assets/icons/like.svg"
import dislikeIcon from "../../../assets/icons/dislike.svg"
import likeIcone1 from '../../../assets/icons/like1.svg'
import dislikeIconActiv from '../../../assets/icons/dislike2.svg'
import React from 'react'
import {postAddLikeCourse} from '../../../core/services/api/courseDetail/postAddLikeDislikeCourse.js'
import {postAddDislikeCourse} from '../../../core/services/api/courseDetail/postAddLikeDislikeCourse.js'

const LikeDislikeToggle = ({CourseId, currentUserLike, currentUserDissLike}) => {
  const queryClient = useQueryClient();
  
  const hasLiked = currentUserLike === "1";
  const hasDisliked = currentUserDissLike === "1";

  const showLikeActive = hasLiked || (!hasLiked && !hasDisliked);

  const { mutate: likeCourse, isLoading: isLiking } = useMutation({
    mutationFn: () => postAddLikeCourse(CourseId),
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
    },
    onError: (error) => {
      console.error('Error in like:', error);
    }
  });
  const { mutate: dislikeCourse, isLoading: isDisliking } = useMutation({
    mutationFn: () => postAddDislikeCourse(CourseId),
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
    },
    onError: (error) => {
      console.error('Error in dislike:', error);
    }
  });
    
  return (
    <div className="flex gap-2">
        <button
          onClick={() => likeCourse()}
          disabled={isLiking || isDisliking}
          className='w-[56px] h-[56px] flex items-center space-x-2 p-1 rounded transition-all duration-200'
        >
        <img 
          src={showLikeActive ? likeIconeActive : likeIcone1} 
          alt={showLikeActive ? 'Remove like' : 'Like'} 
          className="cursor-pointer"
        />
      </button>


      <button
          onClick={() => dislikeCourse()}
          disabled={isDisliking || isLiking}
          className="w-[56px] h-[56px] flex items-center space-x-2 p-1 rounded cursor-pointer transition-all duration-200"
      >
        <img 
           src={hasDisliked ? dislikeIconActiv : dislikeIcon} 
           alt={hasDisliked ? 'Remove dislike' : 'Dislike'} 
          className="cursor-pointer"
        />
      </button>
    </div>
  )
}

export { LikeDislikeToggle }
