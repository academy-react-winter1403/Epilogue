import { motion } from 'framer-motion';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';


const NewCommentForm = ({
  onSubmit,
  isReply = false,


  isPending,
  onClose,
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
const { t } = useTranslation('blogList'); 
  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'w-full' : 'w-[350px]'} md:w-full bg-[#FCFCFC] border border-[#3772FF] rounded-[24px] flex items-center relative`}>
      {(onClose || onCancel) && (
        <button 
          type="button" 
          onClick={onClose || onCancel}

          className="absolute left-2 top-2"
        >
          <img src={CloseIcon} alt={t('closeButton')} className="w-5 h-5" /> 
        </button>
      )}

      <div className="flex">
        <motion.button
          type="submit"
          className="px-2 text-[#3772FF]"
          whileTap={{ scale: 0.95 }}
          disabled={isPending}
        >
          <img src={SendIcon} alt={t('sendButton')} /> 
        </motion.button>
        {EmojiIcon && <img src={EmojiIcon} alt="Emoji" />} 
      </div>



      <div className="w-[490px] h-[100px] flex-1 flex flex-col">
        <input
          type="text"
          placeholder={isReply ? t('replyTitlePlaceholder') : t('commentTitlePlaceholder')} 
          value={title}
          onChange={(e) => setTitle(e.target.value)}

          className="p-2 px-4 focus:outline-none text-right"
          required
          disabled={isPending}
          minLength={5}
        />
        <div className="border-t border-[#DCDCDC] mx-2" />
        <textarea

          placeholder={isReply ? t('replyContentPlaceholder') : t('commentContentPlaceholder')} 
          value={content}
          onChange={(e) => setContent(e.target.value)}


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

export { NewCommentForm };