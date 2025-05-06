import React from 'react'
import { SettingMenuOption } from './SettingMenuOption'

const SettingMenu = () => {
  return (
      <div className="py-8 flex flex-col text-[18px] font-yekan-600 ">
        <p className="setuserprofile text-2xl ">تنظیمات </p>
        <div className=" space-y-1 flex flex-col text-[var(--text-grey)] w-[210px] h-[798px] border-l border-[#DCDCDC]">
          {[
            ["رمز عبور دو مرحله ای", "/StudentPanel/Setting/Two-Step-Password"],
            ["تغیر رمز عبور", "/StudentPanel/Setting/change-password"]
          ].map((item, key) => (
            <SettingMenuOption
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
