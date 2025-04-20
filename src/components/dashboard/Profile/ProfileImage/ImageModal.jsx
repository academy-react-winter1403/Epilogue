import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageAdd02Icon } from "../../../common/Icons/Image-addIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Cancel01Icon } from "../../../common/Icons/Cancel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProfileImage } from "../../../../core/services/api/Dashboard/dashborad";

const ImageModal = () => {
  const client = useQueryClient();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log("فایل‌های انتخاب‌شده:", acceptedFiles);
  }, []);

  const mutation = useMutation({
    mutationFn: addProfileImage,
    onSuccess: () => {
      toast.success("پروفایل با موفقیت اضافه شد");
      client.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });



  const handleUploadImage = (value) => {
    const profileImage = new FormData();
    profileImage.append("formFile", value.target.files[0]);
    mutation.mutate(profileImage);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [],
      },
      maxFiles: 5,
      maxSize: 5 * 1024 * 1024,
    });
    

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white rounded-full py-2 px-4 flex gap-2 items-center text-[16px]  max-w-xs md:max-w-none"
      >
        <ImageAdd02Icon />
        <span>افزودن عکس</span>
      </button>

      {/* modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 10 }}
            className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 80,
                damping: 20,
              }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] h-[60%] bg-white rounded-[32px] shadow-lg z-50 p-6 overflow-y-auto"
            >
              <button
                className="border mb-4 p-2 rounded-full"
                onClick={handleClose}
              >
                <div className="flex items-center justify-center">
                  <Cancel01Icon color={"#e30f0f"} />
                </div>
              </button>
              <div className="w-full max-w-md mx-auto">
                <div
                  {...getRootProps()}
                  onChange={handleUploadImage}
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${
                    isDragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-700 font-yekan text-sm text-center">
                    فایلت رو بکش اینجا یا کلیک کن برای انتخاب
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    فایلت فقط میتونه عکس باشه، حداکثر ۵ فایل
                  </p>
                </div>

                {acceptedFiles.length > 0 && (
                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p className="font-yekan-600">فایل‌های انتخاب‌شده:</p>
                    <ul className="list-disc list-inside">
                      {acceptedFiles.map((file, index) => (
                        <li key={index}>
                          {file.name} - {(file.size / 1024 / 1024).toFixed(2)}{" "}
                          MB
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => {
                    console.log("فایل‌ها ثبت شدند:", acceptedFiles);
                    handleClose();
                  }}
                  className="bg-green-500 text-white px-6 py-1 rounded-full hover:bg-green-600 transition-all"
                >
                  ثبت
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageModal;
