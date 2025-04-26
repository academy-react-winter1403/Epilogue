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

const CommentSection = ({ contentId, id, isBlog, getComment, postComment, postReply, getReplies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);
  const [commentTitle, setCommentTitle] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyTitle, setReplyTitle] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [expandedCommentId, setExpandedCommentId] = useState(null);

  const { data: comments = [], isLoading, isError } = getComment || {};
  console.log(comments,'bkhtt bsoze asmon')
  const { mutate: addComment, isPending: isCommentPending } = postComment || {};
  const { mutate: addReply, isPending: isReplyPending } = postReply || {};

  const toggleCommentExpansion = (commentId) => {
    setExpandedCommentId(prev => {
      if (prev === commentId) {
        setReplyingTo(null); 
        return null;
      }
      return commentId;
    });
  }

  const startReply = (commentId) => {
    if (showNewCommentForm) closeNewCommentForm();
    setReplyingTo(commentId);
    setReplyTitle('');
    setReplyContent('');
    setExpandedCommentId(commentId);
  };

  const cancelReply = () => {
    setReplyingTo(null);
    setReplyTitle('');
    setReplyContent('');
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyingTo || !addReply) return;
    
    addReply({ 
      id,
      parentId: replyingTo, 
      title: replyTitle, 
      content: replyContent 
    }, {
      onSuccess: () => {
        setReplyTitle('');
        setReplyContent('');
        setReplyingTo(null);
      }
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!addComment) return;
    
    addComment({ 
      id,
      title: commentTitle, 
      content: commentContent 
    }, {
      onSuccess: () => {
        setCommentTitle('');
        setCommentContent('');
        closeCommentModal();
        closeNewCommentForm();
      }
    });
  };

  const openModal = () => setIsModalOpen(true);
  const openCommentModal = () => setIsCommentModalOpen(true);
  
  const openNewCommentForm = () => {
    if (replyingTo) cancelReply();
    setShowNewCommentForm(true);
    setCommentTitle('');
    setCommentContent('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    cancelReply();
    setExpandedCommentId(null);
    closeNewCommentForm(); 
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
    setCommentTitle('');
    setCommentContent('');
  };

  const closeNewCommentForm = () => {
    setShowNewCommentForm(false);
    setCommentTitle('');
    setCommentContent('');
    cancelReply();
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

        {displayedComments.map((comment) => (
          <CommentCard 
            key={comment.id}
            comment={comment} 
            id={id}
            isBlog={isBlog}
          />
        ))}
      </div>

      {comments?.length > 3 && (
        <motion.button
          onClick={openModal}
          className="flex items-center justify-center gap-2 text-white bg-[#2F2F2F] hover:bg-[#1f1f1f] rounded-[40px] px-4 py-2 transition-colors"
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <span>مشاهده بیشتر</span>
        </motion.button>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="نظرات دانشجوها و اساتید">
        <motion.button
          onClick={openNewCommentForm}
          className={`fixed bottom-60 left-35 w-[345px] h-[56px] md:w-[107px] md:h-[40px] md:static md:transform-none flex items-center justify-center gap-2 bg-[#3772FF] text-white rounded-[40px] px-4 py-2 mb-4 ${
            showNewCommentForm ? 'hidden md:flex' : 'flex'
          }`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <img src={commentBtnIcon} alt="commentBtnIcon" className='w-[8%] md:w-[20px]'/>
          <span className='whitespace-nowrap'>نظر شما</span>
        </motion.button>

        <CommentList
          comments={comments}
          id={id}
          isBlog={isBlog}
          contentId={contentId}
          replyingTo={replyingTo}
          startReply={startReply}
          handleReplySubmit={handleReplySubmit}
          replyTitle={replyTitle}
          setReplyTitle={setReplyTitle}
          replyContent={replyContent}
          setReplyContent={setReplyContent}
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
            onClose={closeNewCommentForm}
            title={commentTitle}
            setTitle={setCommentTitle}
            content={commentContent}
            setContent={setCommentContent}
            CloseIcon={closeIcon}
            isPending={isCommentPending}
          />
          </div>
         
        )}
      </Modal>

      <Modal isOpen={isCommentModalOpen} onClose={closeCommentModal} title="ثبت نظر جدید">
        <div className='mt-30'>
        <NewCommentForm
          onSubmit={handleCommentSubmit}
          onCancel={closeCommentModal}
          title={commentTitle}
          setTitle={setCommentTitle}
          content={commentContent}
          setContent={setCommentContent}
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