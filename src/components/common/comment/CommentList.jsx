import { motion } from 'framer-motion';
import {NewCommentForm} from './NewComponentForm';
import { formatDate } from '../../common/formatDate/formatDate';
import { CommentLikeDislikeCourse } from '../../courseDetail/commentCourse/CommentLikeDislikeCourse';
import { CommentLikeDislikeBlog } from '../../blogDetail/commentBlog/CommentLikeDislikeBlog';

const CommentList = ({
  comments,
  id,
  isBlog,
  replyingTo,
  startReply,
  handleReplySubmit,
  SendIcon,
  EmojiIcon,
  isPending,
  getReplies,
  expandedCommentId,
  toggleCommentExpansion
}) => {
  const CommentHeader = ({ 
    author, 
    pictureAddress, 
    inserDate,
    insertDate, 
    title, 
    describe,
    commentId 
  }) => (
    <div 
      className="flex flex-col gap-3 pb-4 w-full cursor-pointer"
      onClick={() => toggleCommentExpansion(commentId)}
    >
      <div className="flex gap-4 items-center">
        {pictureAddress ?( 
        <img 
          src={pictureAddress} 
          alt="پروفایل" 
          className="w-10 h-10 rounded-full"
        />
        ):(
          <div className='w-10 h-10 rounded-full bg-gray-300'></div>
        )}
        <div className="flex flex-col gap-1">
          <span className="font-DanaFaNum font-medium">{author}</span>
          <span className="text-xs text-gray-500"> {isBlog
              ? formatDate(inserDate)
              : formatDate(insertDate)}</span>
        </div>
      </div>
      <h3 className="font-DanaFaNum font-bold text-lg text-right">{title}</h3>
      <p className="break-words font-DanaFaNum text-right text-gray-700">{describe}</p>
    </div>
  );

  const CommentActions = ({
    commentId,
    comment,
    replyingTo,
    startReply,
    handleReplySubmit,
    isPending,
    isBlog 
  }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-2 w-full">
        {isBlog ? (
          <CommentLikeDislikeBlog
            id={id}
            commentId={commentId}
            likeCount={comment?.likeCount || 0}
            dissLikeCount={comment?.dissLikeCount || 0}
            currentUserLikeId={comment?.currentUserLikeId}
            currentUserIsLike={comment?.currentUserIsLike}
            currentUserIsDissLike={comment?.currentUserIsDissLike}
          />
        ) : (
          <CommentLikeDislikeCourse
            id={id}
            commentId={commentId}
            likeCount={comment?.likeCount || 0}
            dissLikeCount={comment?.dissLikeCount || 0}
            currentUserLikeId={comment?.currentUserLikeId}
            currentUserIsLike={comment?.currentUserIsLike}
            currentUserIsDissLike={comment?.currentUserIsDissLike}
          />
        )}

      {replyingTo === commentId ? (
        <div className="w-full mt-2">
          <NewCommentForm
            onSubmit={handleReplySubmit}
            SendIcon={SendIcon}
            EmojiIcon={EmojiIcon}
            isPending={isPending}
            isReply
            compact
          />
        </div>
      ) : (
        <motion.button
          onClick={() => startReply(commentId)}
          className="w-[99px] h-[40px] text-[#3772FF] cursor-pointer px-3 py-1 rounded-full border border-[#3772FF] bg-white text-sm"
          whileTap={{ scale: 0.95 }}
          disabled={isPending}
        >
          جواب دادن
        </motion.button>
      )}
    </div>
  );

  const CommentReplies = ({ commentId, isBlog  }) => {
    const isCourse = comments?.some(c => c && 'courseId' in c);
    const replyParams = isCourse ? [id, commentId] : [id];
    const { data: replies = [], isLoading: isRepliesLoading } = getReplies(...replyParams);
    
    if (isRepliesLoading) return <div className="text-center py-4">در حال بارگیری پاسخ‌ها...</div>;
    if (!replies.length) return null;

    return (
      <div className="mt-4 pl-6 border-l-2 border-gray-200 space-y-4">
        {replies.map(reply => (
          <div key={reply.id} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
              {reply?.pictureAddress ?( 
              <img 
                src={reply?.pictureAddress} 
                alt="پروفایل" 
                className="w-10 h-10 rounded-full"
              />
              ):(
                <div className='w-10 h-10 rounded-full bg-gray-300'></div>
              )}
                <div>
                  <span className="font-DanaFaNum font-medium text-sm">{reply.author}</span>
                  <span className="block text-[#707070] font-DanaFaNum text-xs">
                     {isBlog
                      ? formatDate(reply?.inserDate)
                      : formatDate(reply?.insertDate)}
                  </span>
                </div>
              </div>
           
                {isBlog ? (
                   <CommentLikeDislikeBlog
                   id={id}
                   commentId={reply.id}
                   likeCount={reply?.likeCount || 0}
                   dissLikeCount={reply?.dissLikeCount || 0}
                   userId={reply?.userId}
                   currentUserLikeId={reply?.currentUserLikeId}
                   currentUserIsLike={reply?.currentUserIsLike}
                   currentUserIsDissLike={reply?.currentUserIsDissLike}
                   compact
                 />
                  ) : (
                  <CommentLikeDislikeCourse
                    id={id}
                    commentId={commentId}
                    likeCount={reply?.likeCount || 0}
                    dissLikeCount={reply?.dissLikeCount || 0}
                    currentUserLikeId={reply?.currentUserLikeId}
                    currentUserIsLike={reply?.currentUserIsLike}
                    currentUserIsDissLike={reply?.currentUserIsDissLike}
                  />
                  )}
            </div>
            <p className="font-DanaFaNum text-sm text-right mt-2 pr-2">
              {reply.describe}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-red-300 w-[393px] md:w-full max-h-[55vh] overflow-y-auto mb-4 space-y-6">
      {comments?.map((comment) => (
        <div key={comment.id} className="p-4 bg-white rounded-lg shadow-sm">
          <div className={`relative ${replyingTo === comment.id ? "pr-4" : ""}`}>
            {expandedCommentId === comment.id && (
              <div className="absolute right-[-15px] top-0 h-[195px] w-1 bg-[#3772FF] rounded-full" />
            )}
            
            <div className={`flex flex-col ${replyingTo === comment.id ? "border-b border-[#DCDCDC] pb-4" : ""}`}>
              <CommentHeader 
                author={comment.author}
                pictureAddress={comment.pictureAddress}
                insertDate={comment.insertDate}
                inserDate={comment.inserDate}
                title={comment.title}
                describe={comment.describe}
                commentId={comment.id}
              />
              
              <CommentActions
                comment={comment}
                commentId={comment.id}
                replyingTo={replyingTo}
                startReply={startReply}
                handleReplySubmit={handleReplySubmit}
                isPending={isPending}
                isBlog={isBlog}
              />
              
              {expandedCommentId === comment.id && (
                <CommentReplies commentId={comment.id} isBlog={isBlog } />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export{ CommentList}