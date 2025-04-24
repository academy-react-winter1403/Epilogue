import React from 'react'
import { ProfileMenuOption } from './ProfileMenuOption'

const SettingMenu = () => {
  return (
      <div className="py-8 flex flex-col text-[18px] font-yekan-600 text-[#707070]">
        <p className=" text-black text-2xl ">تنظیمات </p>
        <div className=" space-y-1 flex flex-col  w-[210px] h-[798px] border-l border-[#DCDCDC]">
          {[
            ["رمز عبور دو مرحله ای", "/StudentPanel/edite-profile/profile-info"],
            ["تغیر رمز عبور", "/StudentPanel/edite-profile/profile-pic"]
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
export default SettingMenu
