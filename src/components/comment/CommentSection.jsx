import React, { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient  } from '@tanstack/react-query';
import commentBtnIcon from '../../assets/icons/commentBtnIcon.svg';
import { getCourseComments } from '../../core/services/api/comment/getCourseComments';
import { postAddComment } from '../../core/services/api/comment/postAddComment';
// import { getCourseCommentsReply } from '../../core/services/api/comment/courseCommentReply';
import { postCourseCommentsReply } from '../../core/services/api/comment/courseCommentReply';
import { motion } from 'framer-motion';
import { formatDate } from '../formatDate/formatDate';
import { LikeDislikeComment } from './LikeDislikeComment';
import { Modal } from './CommentModal';
import sendIcon from '../../assets/icons/sendCommentIcon.svg';
import emojiIcon from '../../assets/icons/emojiIcon.svg';
import closeIcon from '../../assets/icons/closeIcon.svg';

const CommentSection = ({ course, CourseId }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);
  const [commentTitle, setCommentTitle] = useState(''); 
  const [commentContent, setCommentContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyTitle, setReplyTitle] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const startReply = (commentId) => {
    if (openNewCommentForm) {
      closeNewCommentForm();
    }
    setReplyingTo(commentId);
    setReplyTitle('');
    setReplyContent('');
  };
  
  const cancelReply = () => {
    setReplyingTo(null);
    setReplyTitle('');
    setReplyContent('');
  };
  
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyingTo) {
      console.error("No parent comment selected for reply");
      return;
    }
    addReply({
      parentId: replyingTo,
      title: replyTitle,
      content: replyContent,
    });
  };

  // const handleCommentClick = (commentId) => {
  //   if (replyingTo === commentId) {
  //     cancelReply()
  //   }
  // };

  const { data: comments, isLoading, isError } = useQuery({
    queryKey: ['courseComments', CourseId],
    queryFn: () => getCourseComments(CourseId),
    initialData: [],
  });


  const { mutate: addComment } = useMutation({
    mutationFn: (commentData) => postAddComment(CourseId, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries(['courseComments', CourseId]);
      setCommentTitle('');
      setCommentContent('');
      closeCommentModal();
      closeNewCommentForm();
    },
  });

  // const { data: repliesData } = useQuery({
  //   queryKey: ['courseCommentReplies', CourseId],
  //   queryFn: () => getCourseCommentsReply(CourseId),
  //   initialData: [],
  // });
  const { mutate: addReply } = useMutation({
    mutationFn: (replyData) => postCourseCommentsReply(CourseId, replyData),
    onSuccess: () => {
      queryClient.invalidateQueries(['courseCommentReplies', CourseId]);
      setReplyTitle('');
      setReplyContent('');
      setReplyingTo(null);
    },
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment({
      title: commentTitle,
      content: commentContent
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const openCommentModal = () => {
    setIsCommentModalOpen(true);
  };
  const openNewCommentForm = () => {
    if (replyingTo) {
      cancelReply();
    }
    setShowNewCommentForm(true);
    setCommentTitle('');
    setCommentContent('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    cancelReply()
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
  };

  const displayedComments = comments?.slice(0, 3) || [];

  if (isLoading) return <div>Loading comments...</div>;
  if (isError) return <div>Error loading comments</div>;

  return (
    <section className="w-full flex flex-col gap-5 mt-[50px] justify-center items-center">
      <div className="md:self-start w-[219px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-gray-800 whitespace-nowrap">
        نظرات دانشجو ها و اساتید
      </div>

      <div className="w-[100%] flex flex-col justify-center items-center md:flex-row flex sm:flex-col gap-[8px] md:flex-row lg:flex-row">
        <motion.button
          onClick={openCommentModal}
          className="flex flex-col justify-center items-center gap-4 text-white cursor-pointer w-[324px] h-[282px] rounded-[24px]  bg-[#3772FF]"
          whileTap={{ scale: 0.95 }}
          animate={{
            opacity: [0.8, 1],
          }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 80,
            damping: 20,
            duration: 1.5,
          }}
        >
          <img src={commentBtnIcon} alt="commentBtnIcon" className='w-[24px] h-[24px] '/>
          <span className='font-[DanaFaNum] font-semibold text-[18px] leading-[100%] tracking-[0%] text-right'>نظر شما</span>
          <span className='font-[DanaFaNum] font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-[#F6F6F6]'>برای نظر دادن کلیک کنید</span>
        </motion.button>
      

        {displayedComments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 justify-center items-center w-[324px] h-[282px] rounded-[24px] bg-gray-100 flex-col gap-3"
          >
            <div className="flex flex-col gap-8 w-[250px] h-[157px]">
              <h2 className="w-[292px] h-[26px] font-DanaFaNum font-bold text-[18px] leading-[100%] tracking-[0%] text-right">
                {comment?.title}
              </h2>
              <p className="font-DanaFaNum font-medium text-base leading-none tracking-normal text-right text-[#707070]">
                {comment?.describe}
              </p>
            </div>
            <div className="w-[270px] h-[41px] flex justufy-between">
              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-[134.48px]"><img src={comment?.pictureAddress} alt="profile" className='rounded-[134.48px]' /></div>
                <div className="w-[141px] h-[41px] flex flex-col gap-2">
                  <span className="font-DanaFaNum font-semibold text-sm leading-none tracking-normal text-right overflow-hidden text-ellipsis whitespacse-nowrap">
                    {comment?.author}
                  </span>
                  <span className="text-[#707070] font-DanaFaNum font-medium text-xs leading-none tracking-normal text-right w-[93px] h-[17px">
                    {formatDate(comment?.insertDate)}
                  </span>
                </div>
              </div>

              <div className='mr-[-15px]'>
                <LikeDislikeComment
                  CourseId={CourseId}
                  likeCount={course?.likeCount}
                  dissLikeCount={course?.dissLikeCount}
                  userId={course?.userId}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.button
        onClick={openModal}
        className="cursor-pointer flex flex-row justify-center items-center  text-white p-[8px_16px] gap-[8px] w-[125px] h-[39px] bg-[#2F2F2F] rounded-[40px] whitespace-nowrap self-center"
        whileTap={{ scale: 0.95 }}
        animate={{
          opacity: [0.8, 1],
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 80,
          damping: 20,
          duration: 1.5,
        }}
      >
        مشاهده بیشتر
      </motion.button>

      {/* Comments List Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title=" نظرات دانشجو ها و اساتید" >
      <motion.button
        onClick={openNewCommentForm}
        className="fixed bottom-[110px] left-1/2 transform -translate-x-1/2 md:static md:transform-none mt-3 mb-3 mr-[-40px] whitespace-nowrap flex justify-center items-center cursor-pointer w-[345px] md:w-[107px] h-[40px] bg-[#3772FF] text-white rounded-[40px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] border border-[#3772FF]"
        whileTap={{ scale: 0.95 }}
        animate={{
          opacity: [0.8, 1],
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 80,
          damping: 20,
          duration: 1.5,
        }}
      > 
        <img src={commentBtnIcon} alt="commentIcon" className='w-[24px] h-[24px]'/>
        <span>نظر شما</span>
      </motion.button>
      
        <div className="max-h-[65vh] overflow-y-auto space-y-4">
          {comments?.map((comment, index) => (
            <div
              key={index}
              className="p-3"
            >
              <div className={`relative ${replyingTo === comment.id ? "pr-4" : ""}`}>
              {replyingTo === comment.id && (
                <div className="absolute right-0 top-0 h-[195px] w-1 bg-[#3772FF] rounded-full"></div>
              )}
              <div className={`flex flex-col ${replyingTo === comment.id ? "border-b border-[#DCDCDC] pb-3" : ""}`}>
                 <div className="flex flex-col gap-3 pb-4 md:w-full w-[350px]" >
                  <div className='w-[194px] h-[48px] flex gap-4'>
                      <div className="w-10 h-10"> <img src={comment?.pictureAddress} alt="profile" className='rounded-[134.48px]' /> </div>
                      <div className='flex flex-col gap-2'>
                      <span className="font-DanaFaNum font-medium">
                        {comment?.author}
                      </span>
                      <span className="text-xs text-gray-500">
                      {formatDate(comment?.insertDate)}
                      </span>
                      </div>
                  </div>
                  <h3 className="font-DanaFaNum font-bold text-lg text-right">
                    {comment?.title}
                  </h3>
                  <p className="font-DanaFaNum text-right text-gray-700">
                    {comment?.describe}
                  </p>
                  <div className='mr-[-10px] md:mr-0 mt-0 md:mt-0 flex flex-col md:flex-row items-start gap-1 md:items-center'>
                   <LikeDislikeComment 
                    CourseId={CourseId}
                    likeCount={course?.likeCount}
                    dissLikeCount={course?.dissLikeCount}
                    userId={course?.userId}
                    />

                  {replyingTo === comment.id ? (
                    <form 
                      onSubmit={handleReplySubmit} 
                      className="w-[345px] h-[88px] md:w-[490px] md:h-[72px] bg-[#FCFCFC] border border-[#3772FF] rounded-[24px] flex gap-1 items-center overflow-hidden"
                      style={{ borderWidth: '1px' }}
                    >
                      <div className='flex'>
                      <motion.button
                        type="submit"
                        className="px-2 text-[#3772FF] flex items-center justify-center"
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={sendIcon} alt='sendIcon'  className='w-[40px] h-[40px]'></img>
                      </motion.button>
                      <img src={emojiIcon} alt='emoji' className='w-[40px] h-[40px]'></img>
                      </div>
                      <div className="flex-1 flex flex-col h-full">
                        <input
                          type="text"
                          placeholder=" عنوان نظر خود را بنویسید"
                          value={replyTitle}
                          onChange={(e) => setReplyTitle(e.target.value)}
                          className="flex-1 p-2 px-4 focus:outline-none text-right font-dana font-medium text-[14px] leading-[100%] tracking-[0%]"
                          required
                        />
                        <div className="border-t border-[#DCDCDC] mx-4"></div>
                        <textarea
                          placeholder="متن نظر خود را بنویسید "
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          className="flex-1 p-2 px-4 focus:outline-none text-right resize-none font-dana font-medium text-[14px] leading-[100%] tracking-[0%]"
                          required
                          rows={1}
                        />
                      </div>
                    </form>
                    
                  ) : (
                    <motion.button
                      onClick={() => startReply(comment.id)}
                      className="whitespace-nowrap text-[#3772FF] cursor-pointer w-[99px] h-[39px] rounded-[40px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] border border-[#3772FF] bg-[#FCFCFC]"
                      whileTap={{ scale: 0.95 }}
                    >
                      جواب دادن
                    </motion.button>
                  )} 
                </div>
              </div>
            </div>     
          </div>
            {/* <div className="mr-8 mt-2 space-y-3">
              {repliesData
                ?.filter(reply => reply.parentId === comment.id)
                .map((reply) => (
                  <div key={reply.id} className="bg-gray-50 p-3 rounded-lg border-r-2 border-[#3772FF]">
                    <div className="flex items-center gap-2">
                      <img 
                        src={reply.authorAvatar || '/default-avatar.png'} 
                        alt="پروفایل" 
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <span className="font-bold">{reply.authorName}</span>
                        <span className="text-xs text-gray-500 mr-2">
                          {formatDate(reply.insertDate)}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold mt-2 text-right">{reply.title}</h4>
                    <p className="mt-1 text-right text-gray-700">{reply.content}</p>
                  </div>
                ))
              }
            </div> */}
        </div>
        ))}
      </div>

        {showNewCommentForm && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-24 left-[140px] md:bottom-13.5 md:left-[317px] w-[393px] md:w-[851px] lg:w-[851px] bg-white p-2 md:rounded-b-[32px] shadow-lg z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-dana font-bold text-lg">ثبت نظر جدید</h3>
              <button 
                onClick={closeNewCommentForm}
                className="text-gray-500"
              >
                <img src={closeIcon} alt="closeIcon" />
              </button>
            </div>
            
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={commentTitle}
                  onChange={(e) => setCommentTitle(e.target.value)}
                  className="w-full h-[48px] rounded-[12px] bg-[#F6F6F6] p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#3772FF]"
                  placeholder="عنوان نظر"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <textarea
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  className="w-full h-[120px] rounded-[12px] bg-[#F6F6F6] p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#3772FF] resize-none"
                  placeholder="متن نظر خود را بنویسید..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 rounded-[34px] bg-[#3772FF] text-white flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                ارسال نظر
              </motion.button>
            </form>
          </motion.div>
        )}

      </Modal>
        {/* Add Comments List Modal */}
      <Modal isOpen={isCommentModalOpen} onClose={closeCommentModal} title="ثبت نظر جدید">
        <form onSubmit={handleCommentSubmit} className="w-full mt-6 space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="commentTitle" className="font-dana font-bold text-[16px] leading-[100%] tracking-[0%] text-right">
              عنوان نظر
            </label>
            <input
              type="text"
              id="commentTitle"
              value={commentTitle}
              onChange={(e) => setCommentTitle(e.target.value)}
              className="w-full h-[48px] rounded-[12px] bg-[#F6F6F6] p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#3772FF]"
              placeholder="عنوان نظر خود را وارد کنید"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="commentContent" className="font-dana font-bold text-[16px] leading-[100%] tracking-[0%] text-right">
              متن نظر
            </label>
            <textarea
              id="commentContent"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className="w-full h-[160px] rounded-[12px] bg-[#F6F6F6] p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#3772FF] resize-none"
              placeholder="متن نظر خود را وارد کنید"
              required
            />
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <motion.button
              type="button"
              onClick={closeCommentModal}
              className="w-[101px] h-[40px] rounded-[34px] border border-[#FF5353] text-[#FF5353] flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <img src={closeIcon} alt="closeIcon" />
              انصراف
            </motion.button>
            
            <motion.button
              type="submit"
              className="w-[101px] h-[40px] rounded-[34px] bg-[#3772FF] text-white flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <img src={sendIcon} alt="sendIcon" className="w-5 h-5" />
              ارسال
            </motion.button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export { CommentSection };