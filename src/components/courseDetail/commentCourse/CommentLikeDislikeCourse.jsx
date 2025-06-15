import React from 'react'
import { LikeDislikeComment } from '../../common/comment/LikeDislikeComment'
import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/courseDetail/comment/postAddLikeDislikeComment'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { checkAuth } from '../../../core/hooks/checkAuth';


const CommentLikeDislikeCourse = ({ likeCount, dissLikeCount, CourseCommandId, currentUserLikeId, currentUserEmotion }) => {
  const queryClient = useQueryClient();

  const liked = useMutation({
    mutationFn: () => {
      checkAuth();
      return postAddLikeComment(CourseCommandId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments-course']); 
    },
    onError: (error) => {
      if (error.message !== 'USER_NOT_LOGGED_IN') {
        toast.error('خطا در ثبت لایک کامنت');
        console.error('Error in comment like:', error);
      }
    }
  });
  
  const disliked = useMutation({
    mutationFn: () => {
      checkAuth();
      return postAddDislikeComment(CourseCommandId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments-course']); 
    },
    onError: (error) => {
      if (error.message !== 'USER_NOT_LOGGED_IN') {
        toast.error('خطا در ثبت دیسلایک کامنت');
        console.error('Error in comment dislike:', error);
      }
    }
  });
  
  const delLike = useMutation({
    mutationFn: () => {
      checkAuth();
      return deleteLikeComment(CourseCommandId, currentUserLikeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments-course']);
    },
    onError: (error) => {
      if (error.message !== 'USER_NOT_LOGGED_IN') {
        toast.error('خطا در حذف لایک کامنت');
        console.error('Error in delete comment like:', error);
      }
    }
  });

// <<<<<<< HEAD

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
// =======
//   return (
//     <LikeDislikeComment 
//       likeCount={likeCount} 
//       dissLikeCount={dissLikeCount} 
//       liked={liked} 
//       disliked={disliked} 
//       delLike={delLike} 
//       currentUserEmotion={currentUserEmotion}
//     />
//   );
// };
// export { CommentLikeDislikeCourse }
// >>>>>>> 16fa08bbc913c752abbe8a7f0d5700de6a72e405
