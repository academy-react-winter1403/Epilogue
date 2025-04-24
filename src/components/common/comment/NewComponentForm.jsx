import { motion } from 'framer-motion';

const NewCommentForm = ({
  onSubmit,
  title,
  setTitle,
  content,
  setContent,
  isReply = false,
  isPending, 
  onClose, 
  SendIcon, 
  EmojiIcon,
  CloseIcon
}) => {
  return (
    <form onSubmit={onSubmit} className="w-full bg-[#FCFCFC] border border-[#3772FF] rounded-[24px] flex items-center relative">
      {onClose && (
        <button 
          type="button" 
          onClick={onClose}
          className="absolute left-2 top-2"
        >
          <img src={CloseIcon} alt="بستن" className="w-5 h-5" />
        </button>
      )}
      
      <div className="flex">
        <motion.button
          type="submit"
          className="px-2 text-[#3772FF]"
          whileTap={{ scale: 0.95 }}
          disabled={isPending}
        >
          <img src={SendIcon} alt="ارسال"/>
        </motion.button>
        <img src={EmojiIcon} alt="ایموجی"/>
      </div>
      
      <div className="w-[490px] h-[100px] flex-1 flex flex-col">
        <input
          type="text"
          placeholder={isReply ? "عنوان پاسخ خود را بنویسید" : "عنوان نظر خود را بنویسید"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 px-4 focus:outline-none text-right"
          required
          disabled={isPending}
        />
        <div className="border-t border-[#DCDCDC] mx-2" />
        <textarea
          placeholder={isReply ? "متن پاسخ خود را بنویسید" : "متن نظر خود را بنویسید"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 px-4 focus:outline-none text-right resize-none"
          required
          rows={3}
          disabled={isPending}
        />
      </div>
    </form>
  );
};

export { NewCommentForm}