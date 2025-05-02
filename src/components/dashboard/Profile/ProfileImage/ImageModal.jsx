import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { ImageAdd02Icon } from "../../../common/Icons/Image-addIcon";
import { AnimatePresence, motion } from "framer-motion";
import { Cancel01Icon } from "../../../common/Icons/Cancel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProfileImage } from "../../../../core/services/api/Dashboard/dashborad";
import convertDataUrlToFile from "./dataURLToFileObj";
import ImgCropper from "./ImgCropperModal/ImgCropper";

const ImageModal = () => {
  const client = useQueryClient();
  const [imgSrc, setImgSrc] = useState();
  const [CropperOpen, setCropperOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mutation = useMutation({
    mutationFn: addProfileImage,
    onSuccess: () => {
      toast.success("پروفایل با موفقیت اضافه شد");
      client.invalidateQueries({ queryKey: ["userInfo2"] });
    },
  });

  const handleCrop = async (data) => {
    const file = convertDataUrlToFile(data);
    const formData = new FormData();
    formData.append("formFile", file);
    mutation.mutate(formData);
    setCropperOpen(false);
    setOpen(false);
  };

  const handleUploadImage = (img) => {
    if (!img) return;
    const reader = new FileReader();
    reader.onload = () => {
      const imgURL = reader.result?.toString() || "";
      const imgElement = new Image();
      imgElement.src = imgURL;
      imgElement.onload = (e) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalHeight < 0 && naturalWidth < 0) {
          toast.error("عکس شما نباید کمتر از ۲۵۰ پیکسل باشد");
          return setImgSrc("");
        }
        setImgSrc(imgURL);
        setCropperOpen(true);
      };
    };
    reader.readAsDataURL(img);
  };

  return (
    <>
      {imgSrc && CropperOpen && (
        <ImgCropper
          imgSrc={imgSrc}
          Open={CropperOpen}
          setOpen={setCropperOpen}
          setDataUrl={handleCrop}
          setLoading={setLoading}
          loading={loading}
        />
      )}
      <div>
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white rounded-full py-2 px-4 flex gap-2 items-center text-[16px] max-w-xs hover:bg-blue-600 transition-colors shadow-md"
        >
          <ImageAdd02Icon />
          <span>افزودن عکس</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-[90%] md:w-[500px] bg-white rounded-3xl shadow-xl p-6 relative z-50 overflow-hidden"
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 transition-all flex items-center justify-center shadow-sm z-50"
                >
                  <Cancel01Icon color="#e30f0f" />
                </button>

                <div className="w-full">
                  <FileUploader
                    handleChange={handleUploadImage}
                    name="file"
                    types={["JPG", "PNG", "JPEG"]}
                    maxSize={5}
                    multiple={false}
                  >
                    <div className="group flex flex-col items-center justify-center gap-3 min-h-[220px] w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer bg-white hover:border-blue-400 hover:bg-blue-50 transition-all text-center shadow-inner">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                        <svg
                          className="w-8 h-8 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16v-8m0 0l-3 3m3-3l3 3m6 1v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">
                          عکس رو بنداز اینجا یا کلیک کن
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          فقط JPG / JPEG / PNG - حداکثر ۵ مگابایت
                        </p>
                      </div>
                    </div>
                    
                  </FileUploader>
                  
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ImageModal;
