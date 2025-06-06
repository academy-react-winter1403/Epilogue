import React from 'react'
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment'
import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/courseDetail/comment/postAddLikeDislikeComment'
import { useMutation, useQueryClient } from '@tanstack/react-query';

const CommentLikeDislikeCourse = ({ likeCount, dissLikeCount, CourseCommandId, currentUserLikeId, currentUserEmotion}) => {
   const queryClient = useQueryClient();

    const liked = useMutation({
      mutationFn: () => postAddLikeComment(CourseCommandId),
      onSuccess: () => {
        queryClient.invalidateQueries(['comments-course']); 
      }
    });
  
    const disliked = useMutation({
      mutationFn: () => postAddDislikeComment(CourseCommandId),
      onSuccess: () => {
        queryClient.invalidateQueries(['comments-course']); 
      }
    });
  
    const delLike = useMutation({
      mutationFn: () => deleteLikeComment(CourseCommandId, currentUserLikeId),
      onSuccess: () => {
        queryClient.invalidateQueries(['comments-course']);
      }
    });


    return (
      <LikeDislikeComment 
        likeCount={likeCount} 
        dissLikeCount={dissLikeCount} 
        liked={liked} 
        disliked={disliked} 
        delLike={delLike} 
        currentUserEmotion={currentUserEmotion}
   
      />
    )
}
  
export { CommentLikeDislikeCourse }
