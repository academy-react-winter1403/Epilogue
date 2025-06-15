import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dateModifier from "../../../core/utils/dateModifier";
import { ThumbsUpIcon } from "../../common/Icons/LikeIcon";
import { ThumbsDownIcon } from "../../common/Icons/DisLikeIcon";

const CommentModal = ({ isOpen, onClose, courseComments, blogComments }) => {

  const [activeTab, setActiveTab] = useState("course");

  const comments = activeTab === "course" ? courseComments : blogComments;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white  rounded-xl p-6 w-[90%] max-w-3xl shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-black font-bold">نظرات شما</h2>
              <button
                onClick={onClose}
                className="text-sm border border-red-500 w-[110px] h-[41px] rounded-full text-red-500 hover:bg-red-500 hover:text-black"
              >
                بستن
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center  justify-center mb-4">
              <button
                className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
                  activeTab === "course"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("course")}
              >
                دوره‌ها
              </button>
              <button
                className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
                  activeTab === "article"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("article")}
              >
                بلاگ‌ها
              </button>
            </div>

            {/* Comments */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
              {comments.map((item, index) => (
                <motion.div
                  key={index}
                  className="  p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-lg">
                  {/* <UserSquareIcon/> */}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px]">{item.title}</span>
                  <span className="text-xs text-gray-500">
                    {dateModifier(item.insertDate)}
                  </span>
                </div>
              </div>
              <p className="whitespace-pre-line text-sm w-[90%] text-gray-800 mt-1">
                {item.describe}
              </p>
              <div className=" flex flex-row gap-4 mt-4">
                <div className="text-xs flex items-center gap-2">
                  <ThumbsUpIcon color={"#2F2F2F"} width={24} height={24} />
                  <span>{item.likeCount}</span>
                </div>
                <div className="text-xs flex items-center gap-2">
                  <ThumbsDownIcon color={"#2F2F2F"} width={24} height={24} />
                  <span>{item.dislikeCount}</span>
                </div>
              </div>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentModal;
