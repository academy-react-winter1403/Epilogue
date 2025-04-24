import React from 'react'
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment'
import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/courseDetail/comment/postAddLikeDislikeComment'
import { useMutation } from '@tanstack/react-query';

const CommentLikeDislikeCourse = ({CourseId, likeCount, dissLikeCount}) => {
    const liked = useMutation({
      mutationFn: () => postAddLikeComment(CourseId)
    });
    
    const disliked = useMutation({
      mutationFn: () => postAddDislikeComment(CourseId)
    });
    
    const delLike = useMutation({
      mutationFn: () => deleteLikeComment(CourseId)
    });
  
    return (
      <LikeDislikeComment 
        CourseId={CourseId} 
        likeCount={likeCount} 
        dissLikeCount={dissLikeCount} 
        liked={liked} 
        disliked={disliked} 
        delLike={delLike} 
      />
    )
  }
  
export { CommentLikeDislikeCourse }
