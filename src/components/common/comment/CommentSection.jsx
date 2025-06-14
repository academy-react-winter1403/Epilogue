import { useState } from 'react';
import { motion } from 'framer-motion';
import {Modal} from './CommentModal';
import {CommentCard} from './CommentCard';
import {CommentList} from './CommentList';
import { NewCommentForm } from './NewComponentForm';
import  commentBtnIcon from '../../../assets/icons/commentBtnIcon.svg';
import  sendIcon  from '../../../assets/icons/sendCommentIcon.svg';
import  emojiIcon from '../../../assets/icons/emojiIcon.svg';
import closeIcon from '../../../assets/icons/closeIcon.svg';
import { useQueryClient } from '@tanstack/react-query';
import { checkAuth } from '../../../core/hooks/checkAuth';

const CommentSection = ({ 
  id,
  isBlog,
  contentId, 
  getComment, 
  postComment, 
  postReply, 
  getReplies,
  userId,
  title: initialTitle,
  describe: initialDescribe,
  parentId
}) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [expandedCommentId, setExpandedCommentId] = useState(null);

  const { data: comments = [], isLoading, isError } = getComment || {};
  const { mutate: addComment, isPending: isCommentPending } = postComment || {};
  const { mutate: addReply, isPending: isReplyPending } = postReply || {};

  const handleAddComment = () => {
    try {
      checkAuth();
      setIsCommentModalOpen(true);
    } catch (error) {}
  };

  const handleAddReply = (commentId) => {
    try {
      checkAuth();
      if (showNewCommentForm) setShowNewCommentForm(false);
      setReplyingTo(commentId);
      setExpandedCommentId(commentId);
    } catch (error) {}
  };

  const toggleCommentExpansion = (commentId) => {
    setExpandedCommentId(prev => prev === commentId ? null : commentId);
  };

  const handleReplySubmit = (formData) => {
    if (!replyingTo || !addReply) return;
    
    const replyData = isBlog 
      ? { 
          id: id,
          userIpAddress: '', 
          title: formData.title || initialTitle,
          describe: formData.content || initialDescribe,
          userId: userId,
          parentId: parentId
        }
      : {
          id: id,
          title: formData.title || initialTitle,
          describe: formData.content || initialDescribe,
          commentId: replyingTo
        };
  
    addReply(replyData, {
      onSuccess: () => {
        setReplyingTo(null);
        queryClient.invalidateQueries(['commentReplies', id]);
      }
    });
  };

  const handleCommentSubmit = (formData) => {
    if (!addComment) return;
    
    const commentData = isBlog
      ? {
          id: id,
          userIpAddress: '',
          title: formData.title || initialTitle,
          describe: formData.content || initialDescribe,
          userId: userId
        }
      : {
          id: id,
          title: formData.title || initialTitle,
          describe: formData.content || initialDescribe
        };
  
    addComment(commentData, {
      onSuccess: () => {
        setIsCommentModalOpen(false);
        setShowNewCommentForm(false);
        queryClient.invalidateQueries(['blogDetails', id]);
      }
    });
  };

  const openModal = () => setIsModalOpen(true);
  const openCommentModal = () => handleAddComment();
  
  const openNewCommentForm = () => {
    try {
      checkAuth();
      if (replyingTo) setReplyingTo(null);
      setShowNewCommentForm(true);
    } catch (error) {}
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setReplyingTo(null);
    setExpandedCommentId(null);
    setShowNewCommentForm(false);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  const displayedComments = comments?.slice(0, 3) || [];
  if (isLoading) return <div>در حال بارگذاری نظرات...</div>;
  if (isError) return <div>خطا در بارگذاری نظرات</div>;

  return (
    <section className="w-full flex flex-col gap-5 mt-[50px] justify-center items-center">
      <div className="pl-90 md:self-start w-[219px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-gray-800 whitespace-nowrap">
        نظرات دانشجوها و اساتید
      </div>

      <div className="w-full flex flex-col items-center md:flex-row gap-[8px]">
        <motion.button
          onClick={openCommentModal}
          className="flex flex-col justify-center items-center gap-4 text-white cursor-pointer w-[324px] h-[282px] rounded-[24px] bg-[#3772FF] hover:bg-[#2a5fd6] transition-colors"
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <img src={commentBtnIcon} alt="commentBtnIcon" />
          <span className='font-semibold text-[18px] leading-[100%] tracking-[0%]'>نظر شما</span>
          <span className='font-medium text-[14px] leading-[100%] tracking-[0%] text-[#F6F6F6]'>
            برای نظر دادن کلیک کنید
          </span>
        </motion.button>

        {displayedComments.length > 0 ? (
          displayedComments.map((comment) => (
            <CommentCard 
              key={comment.id}
              comment={comment} 
              id={id}
              isBlog={isBlog}
              startReply={handleAddReply}
              expanded={expandedCommentId === comment.id}
              toggleExpansion={toggleCommentExpansion}
            />
          ))
        ) : (
          <div className="w-full flex justify-center items-center py-10">
            <div className="text-gray-500 text-center">
              <p className="text-lg">هنوز نظری ثبت نشده است</p>
              <p className="text-sm mt-2">اولین نفری باشید که نظر می‌دهد</p>
            </div>
          </div>
        )}
      </div>

      {comments?.length > 3 && (
        <motion.button
          onClick={openModal}
          className="flex items-center justify-center text-white bg-[#2F2F2F] hover:bg-[#1f1f1f] rounded-[40px] px-4 py-2 transition-colors"
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <span className='mb-1'>مشاهده بیشتر</span>
        </motion.button>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="نظرات دانشجوها و اساتید">
        <motion.button
          onClick={openNewCommentForm}
          className={`fixed bottom-60 left-45 w-[345px] h-[56px] md:w-[107px] md:h-[40px] md:static md:transform-none flex items-center justify-center gap-2 bg-[#3772FF] text-white rounded-[40px] px-4 py-2 mb-4 ${
            showNewCommentForm ? 'hidden md:flex' : 'flex'
          }`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <img src={commentBtnIcon} alt="commentBtnIcon" className='w-[8%] md:w-[20px]'/>
          <span className='whitespace-nowrap'>نظر شما</span>
        </motion.button>

        {comments.length > 0 ? (
          <>
            <CommentList
              comments={comments}
              id={id}
              isBlog={isBlog}
              contentId={contentId}
              replyingTo={replyingTo}
              startReply={handleAddReply}
              handleReplySubmit={handleReplySubmit}
              SendIcon={sendIcon}
              EmojiIcon={emojiIcon}
              isPending={isReplyPending}
              getReplies={getReplies}
              postReply={postReply}
              expandedCommentId={expandedCommentId}
              toggleCommentExpansion={toggleCommentExpansion}
            />

            {showNewCommentForm && (
              <div className='mr-5 mb-0 md:mb-20'>
                <NewCommentForm
                  onSubmit={handleCommentSubmit}
                  onClose={() => setShowNewCommentForm(false)}
                  CloseIcon={closeIcon}
                  isPending={isCommentPending}
                />
              </div>
            )}
          </>
        ) : (
          <div className="w-full flex justify-center items-center py-10">
            <div className="text-gray-500 text-center">
              <p className="text-lg">هنوز نظری ثبت نشده است</p>
              <p className="text-sm mt-2">اولین نفری باشید که نظر می‌دهد</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={isCommentModalOpen} onClose={closeCommentModal} title="ثبت نظر جدید">
        <div className='mt-30'>
          <NewCommentForm
            onSubmit={handleCommentSubmit}
            onCancel={closeCommentModal}
            CloseIcon={closeIcon}
            SendIcon={sendIcon}
            isPending={isCommentPending}
            EmojiIcon={emojiIcon}
          />
        </div>
      </Modal>
    </section>
  );
};
export { CommentSection };