import React from 'react'
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment'
import { postAddComment, postAddDislikeComment, deleteLikeComment } from '../../../core/services/api/blogDetail/comment/postAddComment';
import { useMutation } from '@tanstack/react-query';

const CommentLikeDislikeCourse = ({newsId, likeCount, dissLikeCount}) => {
    const liked = useMutation({
      mutationFn: () => postAddComment(newsId)
    });
    
    const disliked = useMutation({
      mutationFn: () => postAddDislikeComment(newsId)
    });
    
    const delLike = useMutation({
      mutationFn: () => deleteLikeComment(newsId)
    });
  
    return (
      <LikeDislikeComment 
        CourseId={newsId} 
        likeCount={likeCount} 
        dissLikeCount={dissLikeCount} 
        liked={liked} 
        disliked={disliked} 
        delLike={delLike} 
      />
    )
  }
  
export { CommentLikeDislikeCourse }
