
import { postAddLikeComment, postAddDislikeComment, deleteLikeComment } from '../../../core/services/api/blogDetail/comment/postAddLikeDislikeComment';
import { useMutation } from '@tanstack/react-query';
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment';
import { useQueryClient } from '@tanstack/react-query';

const CommentLikeDislikeBlog = ({id, commentId, likeCount, dissLikeCount, currentUserLikeId, currentUserIsLike, currentUserIsDissLike}) => {
  const queryClient = useQueryClient();

  const liked = useMutation({
    mutationFn: () => postAddLikeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']); 
    }
  });
    
  const disliked = useMutation({
    mutationFn: () => postAddDislikeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']); 
    }
  });
    
  const delLike = useMutation({
    mutationFn: () => deleteLikeComment(currentUserLikeId),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });
  
    return (
      <LikeDislikeComment 
        currentUserIsLike={currentUserIsLike}
        currentUserIsDissLike={currentUserIsDissLike}
        currentUserLikeId={currentUserLikeId}
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
