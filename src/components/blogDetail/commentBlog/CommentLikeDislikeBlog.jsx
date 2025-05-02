import React from 'react'
import { postAddLikeComment, postAddDislikeComment, deleteLikeComment } from '../../../core/services/api/blogDetail/comment/postAddLikeDislikeComment';
import { useMutation } from '@tanstack/react-query';
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment';

const CommentLikeDislikeBlog = ({id, commentId, likeCount, dissLikeCount, currentUserLikeId}) => {
    const liked = useMutation({
      mutationFn: () => postAddLikeComment(commentId)
    });
    
    const disliked = useMutation({
      mutationFn: () => postAddDislikeComment(id)
    });
    
    const delLike = useMutation({
      mutationFn: () => deleteLikeComment(currentUserLikeId)
    });
  
    return (
      <LikeDislikeComment 
        id={id} 
        commentId={commentId}
        likeCount={likeCount} 
        dissLikeCount={dissLikeCount} 
        liked={liked} 
        disliked={disliked} 
        delLike={delLike} 
      />
    )
}
export { CommentLikeDislikeBlog }
