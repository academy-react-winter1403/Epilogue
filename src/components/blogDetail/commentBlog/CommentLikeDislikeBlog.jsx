import React from 'react'
import { postAddLikeComment, postAddDislikeComment, deleteLikeComment } from '../../../core/services/api/blogDetail/comment/postAddLikeDislikeComment';
import { useMutation } from '@tanstack/react-query';
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment';

const CommentLikeDislikeBlog = ({newsId, likeCount, dissLikeCount}) => {
    const liked = useMutation({
      mutationFn: () => postAddLikeComment(newsId)
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
  
export { CommentLikeDislikeBlog }
