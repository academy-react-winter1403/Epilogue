import React from 'react'
import { ProfileMenuOption } from './ProfileMenuOption'

const ProfileMenu = () => {
  return (
      <div className="py-8 flex flex-col text-[18px] font-yekan-600 text-[#707070]">
        <p className=" text-black text-2xl ">پروفایل من </p>
        <div className=" space-y-1 flex flex-col  w-[210px] h-[798px] border-l border-[#DCDCDC]">
          {[
            ["اطلاعات حساب کاربری", "/StudentPanel/edite-profile/profile-info"],
            ["عکس ها", "/StudentPanel/edite-profile/profile-pic"],
            ["محل سکونت", "/StudentPanel/edite-profile/location"],
            ["لینک ها", "/StudentPanel/edite-profile/links"],
          ].map((item, key) => (
            <ProfileMenuOption
              key={key}
              title={item[0]}
              url={item[1]}
            />
          ))}
        </div>
      </div>
  )
}
export default ProfileMenu
