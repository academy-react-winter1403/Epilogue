import React from "react";
import { ImageAdd02Icon } from "../../../components/common/Icons/Image-addIcon";
import AvatarCard from "./AvatarCard";

const ProfilePicPage = () => {

  const [selectedAvatar, setSelectedAvatar] = React.useState(null);

  const handleAvatarClick = (index) => {
    setSelectedAvatar(index === selectedAvatar ? null : index);
  };
  return (
    <div>
      <button className="bg-blue-500 text-white rounded-full py-2 px-4 flex gap-2 items-center text-[16px]">
        <ImageAdd02Icon />
        <span>افزودن عکس</span>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AvatarCard
            isSelected={ selectedAvatar}
            onClick={() => handleAvatarClick()}
          />
      </div>
    </div>
  );
};

export default ProfilePicPage;
