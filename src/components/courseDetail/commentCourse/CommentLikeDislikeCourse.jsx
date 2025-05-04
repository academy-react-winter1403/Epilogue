import React from 'react'
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment'
import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/courseDetail/comment/postAddLikeDislikeComment'
import { useMutation } from '@tanstack/react-query';

const CommentLikeDislikeCourse = ({id, likeCount, dissLikeCount, currentUserLikeId, CourseCommandId}) => {
    const liked = useMutation({
      mutationFn: () => postAddLikeComment(CourseCommandId)
    });
    
    const disliked = useMutation({
      mutationFn: () => postAddDislikeComment(CourseCommandId)
    });
    
    const delLike = useMutation({
      mutationFn: () => deleteLikeComment(currentUserLikeId)
    });
  
    return (
      <LikeDislikeComment 
        id={id} 
        likeCount={likeCount} 
        dissLikeCount={dissLikeCount} 
        liked={liked} 
        disliked={disliked} 
        delLike={delLike} 
      />
    )
  }
  
export { CommentLikeDislikeCourse }
