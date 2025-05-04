import { motion } from 'framer-motion';
import { useState } from 'react';

const NewCommentForm = ({
  onSubmit,
  isReply = false,
  isPending, 
  onClose, 
  onCancel,
  SendIcon, 
  EmojiIcon,
  CloseIcon,
  compact = false
}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'w-full' : 'w-[350px]'} md:w-full bg-[#FCFCFC] border border-[#3772FF] rounded-[24px] flex items-center relative`}>
      {(onClose || onCancel) && (
        <button 
          type="button" 
          onClick={onClose || onCancel}
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
        <img src={EmojiIcon} alt=""/>
      </div>
      
      <div className={`${compact ? 'w-full' : 'w-[490px]'} h-[100px] flex-1 flex flex-col`}>
        <input
          type="text"
          name="title"
          placeholder={isReply ? "عنوان پاسخ خود را بنویسید" : "عنوان نظر خود را بنویسید"}
          value={formData.title}
          onChange={handleChange}
          className="p-2 px-4 focus:outline-none text-right"
          required
          disabled={isPending}
          minLength={2}
        />
        <div className="border-t border-[#DCDCDC] mx-2" />
        <textarea
          name="content"
          placeholder={isReply ? "متن پاسخ خود را بنویسید" : "متن نظر خود را بنویسید"}
          value={formData.content}
          onChange={handleChange}
          className="p-2 px-4 focus:outline-none text-right resize-none"
          required
          rows={compact ? 1 : 3}
          disabled={isPending}
          minLength={10}
        />
      </div>
    </form>
  );
};

export { NewCommentForm}