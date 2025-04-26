import React, { useEffect, useState } from "react";
import { MoreVerticalCircle01Icon } from "../../../common/Icons/More-Icon";
import { Tick03Icon } from "../../../common/Icons/Tick-Icon";
import ImageModal from "./ImageModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProfileImage,
  getUserInfo,
  selectProfileImage,
} from "../../../../core/services/api/Dashboard/dashborad";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const ProfileImage = () => {
  const client = useQueryClient();

  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [imageIndex, setImageIndex] = useState();

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  

  const mutationSelect = useMutation({
    mutationFn: selectProfileImage,
    onSuccess: () => {
      toast.success("عملیات با موفقیت انجام شد");
      client.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: (error) => {
      console.error("select error", error);
      toast.error("خطا در انتخاب");
    }
  });

  const mutationDelete = useMutation({
    mutationFn: deleteProfileImage,
    onSuccess: () => {
      toast.success("پروفایل شما حذف شد");
      client.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: (error) => {
      console.error("select error", error);
      toast.error("خطا در حذف");
    }
  });



  const handleSelectProfileImage = (id) => {
    const selectedImage = new FormData();
    selectedImage.append("ImageId", id);
    mutationSelect.mutate(selectedImage);
  };

  const handleDeleteProfile = (id) => {
    const deletedImage = new FormData();
    deletedImage.append("DeleteEntityId", id);
    mutationDelete.mutate(deletedImage);
  };


  
  console.log(userInfo?.userImage)


  return (
    <>
      {dropdownOpenId && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setDropdownOpenId(null)}
        ></div>
      )}
      <ImageModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {userInfo?.userImage.map((item, key) => (
          <div
            key={key}
            className=" w-[189px] h-[189px] rounded-[16px] relative overflow-hidden"
          >
            <img
              src={item.puctureAddress}
              className="w-full h-full object-cover rounded-[16px]"
            />

            <div className="absolute top-2 right-2 flex gap-2">
              <div
                className="rounded-full flex justify-center items-center w-[32px] h-[32px] bg-white shadow"
                onClick={() =>
                  setDropdownOpenId(dropdownOpenId === item.id ? null : item.id)
                }
              >
                <MoreVerticalCircle01Icon color={"#000"} />

                <AnimatePresence mode="wait">
                  {dropdownOpenId === item.id && (
                    <motion.div
                      initial={{ y: -150, x: -50 }}
                      animate={{ y: 32, x: -45 }}
                      exit={{ y: -150 }}
                      className="bg-white px-4 py-2 absolute top-0 left-0 flex flex-col gap-3 rounded-md shadow-md"
                    >
                      <div onClick={() => handleSelectProfileImage(item.id)}>
                        انتخاب
                      </div>
                      <div onClick={() => handleDeleteProfile(item.id)}>
                        حذف
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {item.puctureAddress === userInfo?.currentPictureAddress && (
                <div className="bg-[#17C964] flex items-center justify-center rounded-full w-[32px] h-[32px] shadow">
                  <Tick03Icon />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileImage;
