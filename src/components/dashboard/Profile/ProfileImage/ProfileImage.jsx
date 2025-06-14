import React, { useEffect, useState } from "react";
import { MoreVerticalCircle01Icon } from "../../../common/Icons/More-Icon"; // Adjust path if needed
import { Tick03Icon } from "../../../common/Icons/Tick-Icon"; // Adjust path if needed
import ImageModal from "./ImageModal"; // Adjust path if needed
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProfileImage,
  getUserInfo,
  selectProfileImage,
} from "../../../../core/services/api/Dashboard/dashborad"; // Adjust path if needed
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ProfileImage = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace
  const client = useQueryClient();

  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const { data: userInfo, isLoading, isError } = useQuery({ // Added isLoading, isError for better rendering
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });

  const mutationSelect = useMutation({
    mutationFn: selectProfileImage,
    onSuccess: () => {

      toast.success(t('operationSuccessful')); // Translated success message
      client.invalidateQueries({ queryKey: ["userInfo"] }); // Invalidate 'userInfo' directly

    },
    onError: (error) => {
      console.error("select error", error);
      toast.error(t('errorSelectingImage')); // Translated error message
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteProfileImage,
    onSuccess: () => {
      toast.success(t('profileDeleted')); // Translated success message
      client.invalidateQueries({ queryKey: ["userInfo"] }); // Invalidate 'userInfo' directly
    },
    onError: (error) => {
      console.error("delete error", error); // Changed from "select error" to "delete error" for clarity
      toast.error(t('errorDeletingImage')); // Translated error message
    },
  });

  const handleSelectProfileImage = (id) => {

    console.log(id, "Selected image ID"); // Improved log message

    const selectedImage = new FormData();
    selectedImage.append("ImageId", id);
    mutationSelect.mutate(selectedImage);
    setDropdownOpenId(null); // Close dropdown after action
  };

  const handleDeleteProfile = (id) => {

    console.log(id, "Deleted image ID"); // Improved log message

    const deletedImage = new FormData();
    deletedImage.append("DeleteEntityId", id);
    mutationDelete.mutate(deletedImage);
    setDropdownOpenId(null); // Close dropdown after action
  };

  // console.log(userInfo?.userImage); // This log can be removed in production

  if (isLoading) {
    return <p>{t('loadingProfile')}</p>; // Display loading message
  }

  if (isError) {
    return <p>{t('profileLoadError')}</p>; // Handle error case, add this key to JSON if needed
  }

  return (
    <>
      {dropdownOpenId && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setDropdownOpenId(null)}
          aria-hidden="true" // Added aria-hidden as it's just an overlay for closing
        ></div>
      )}
      <ImageModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {userInfo?.userImage && userInfo.userImage.length > 0 ? (
          userInfo.userImage.map((item) => ( // Using item.id as key is safer than index if items can change order/be deleted
            <div
              key={item.id} // Using item.id for key
              className="w-[189px] h-[189px] rounded-[16px] relative overflow-hidden"
            >
              <img
                src={item.puctureAddress}
                className="w-full h-full object-cover rounded-[16px]"
                alt={t('profileImageAltText', { id: item.id })} // Add alt text for accessibility
              />

              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  className="rounded-full flex justify-center items-center w-[32px] h-[32px] bg-white shadow cursor-pointer" // Added cursor-pointer
                  onClick={() =>
                    setDropdownOpenId(dropdownOpenId === item.id ? null : item.id)
                  }
                  aria-haspopup="true" // Indicates a popup menu
                  aria-expanded={dropdownOpenId === item.id} // Indicates if menu is open
                  aria-controls={`menu-${item.id}`} // Associates button with menu
                >
                  <MoreVerticalCircle01Icon color={"#000"} />

                  <AnimatePresence mode="wait">
                    {dropdownOpenId === item.id && (
                      <motion.div
                        id={`menu-${item.id}`} // Added ID for aria-controls
                        initial={{ y: -150, x: -50, opacity: 0 }} // Added opacity for smoother transition
                        animate={{ y: 32, x: -45, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.2 }} // Slightly faster transition
                        className="bg-white z-20 px-4 py-2 absolute top-0 left-0 flex flex-col gap-3 rounded-md shadow-md text-sm whitespace-nowrap" // Adjusted styles
                        role="menu" // Indicates it's a menu
                        aria-labelledby={`more-options-${item.id}`} // Label for menu
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectProfileImage(item.id);
                          }}
                          className="hover:bg-gray-100 p-1 rounded w-full text-right" // Added styling for hover
                          role="menuitem" // Indicates it's a menu item
                        >
                          {t('selectImage')} {/* Translated: انتخاب */}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteProfile(item.id);
                          }}
                          className="hover:bg-red-100 p-1 rounded w-full text-right text-red-600" // Added styling for hover and danger
                          role="menuitem" // Indicates it's a menu item
                        >
                          {t('deleteImage')} {/* Translated: حذف */}
                        </button>
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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            {t('noImagesFound')} {/* Translated: هیچ عکسی یافت نشد */}
          </p>
        )}
      </div>
    </>
  );
};

export default ProfileImage;