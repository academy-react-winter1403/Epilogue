import { useMutation } from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import copyUrlIcon from "../../../assets/icons/copyUrlIcon.svg"

const CopyUrlButton = () => {
  const copyMutation = useMutation({
    mutationFn: async () => {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      return url;
    },
    onSuccess: () => {
      toast.success("لینک کپی شد", {
        duration: 3000,
        style: {
        
          background: "#4BB543",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
    },
    onError: (error) => {
      toast.error("خطا در کپی کردن لینک", {
        duration: 3000,
        style: {
          background: "#FF5252",
          color: "#000",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.error("Failed to copy URL:", error);
    },
  });
  
  return (
  <motion.button
      className="flex gap-4 whitespace-nowrap justify-center items-center w-[216px] text-[#3772FF] whitespase-nowrap h-[39px] items-center rounded-[48px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[8px] border-[1px] border-[#3772FF] cursor-pointer"
      onClick={() => copyMutation.mutate()}
      whileTap={{ scale: 0.95 }}
      aria-label="کپی کردن لینک"
      disabled={copyMutation.isPending}
    >
      <img src={copyUrlIcon} alt="آیکون کپی لینک" />
      {copyMutation.isPending ? "در حال کپی..." : " کپی کردن لینک صفحه"}
    </motion.button>
  )
}

export { CopyUrlButton }
