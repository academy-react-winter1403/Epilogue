import { formatDate } from '../../common/formatDate/formatDate'
import { CommentLikeDislikeCourse } from '../../courseDetail/commentCourse/CommentLikeDislikeCourse';
import { motion } from 'framer-motion';

const CommentCard = ({ 
  comment, 
  id, 
  isBlog
}) => {
  
  return (
    <div className="flex flex-col justify-between gap-5 w-[334px] min-h-[282px] rounded-[24px] bg-gray-100 p-4">
      <div className="flex flex-col gap-3 h-[157px]">
        <h3 className="font-bold text-[18px] text-right">
          {comment?.title}
        </h3>
        <p className="break-words h-[200px] font-medium text-base text-right text-[#707070]">
          {comment?.describe}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
         {comment?.pictureAddress ?( 
          <img 
            src={comment?.pictureAddress} 
            alt="پروفایل" 
            className="w-10 h-10 rounded-full"
          />
          ):(
            <div className='w-10 h-10 rounded-full bg-gray-300'></div>
          )}
          <div className="flex flex-col">
            <span className="font-DanaFaNum font-semibold text-sm text-right">
              {comment?.author}
            </span>
            <span className="text-[#707070] font-DanaFaNum text-xs">
              {isBlog
              ? formatDate(comment?.inserDate)
              : formatDate(comment?.insertDate)}
            </span>
          </div>
        </div>

          {isBlog ? (
             <CommentLikeDislikeBlog
             id={id}
             commentId={comment.id} 
             likeCount={comment?.likeCount || 0}
             dissLikeCount={comment?.dissLikeCount || 0}
             userId={comment?.userId}
             currentUserLikeId={comment?.currentUserLikeId}
             currentUserIsLike={comment?.currentUserIsLike}
             currentUserIsDissLike={comment?.currentUserIsDissLike}
           />
        ) : (
          <CommentLikeDislikeCourse
            id={id}
            commentId={comment.id} 
            likeCount={comment?.likeCount || 0}
            dissLikeCount={comment?.dissLikeCount || 0}
            currentUserLikeId={comment?.currentUserLikeId}
            currentUserIsLike={comment?.currentUserIsLike}
            currentUserIsDissLike={comment?.currentUserIsDissLike}
          />
        )}
        
      </div>
    </div>
  );
};
export { CommentCard }
