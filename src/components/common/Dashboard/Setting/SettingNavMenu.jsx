import React from "react";
import { Link } from "react-router-dom";
import { TwoFactorAccessIcon } from "../../Icons/TwoStepIcon";
import { PasswordValidationIcon } from "../../Icons/ChanePassIcon";

const SettingNavMenu = () => {
  return (
    <div className=" py-2.5 ">


      <div className="bg-[#F1F1F1] rounded-3xl flex flex-row items-center justify-center gap-[50px] w-[300px] p-4 ">
        <Link to={"/StudentPanel/Setting/change-password"}>
          <TwoFactorAccessIcon
            width={24}
            height={24}
            color={"00000"}
            cursor={"pointer"}
          />
        </Link>

        <Link to={"/StudentPanel/Setting/Two-Step-Password"}>
        <PasswordValidationIcon
          width={24}
          height={24}
          color={"00000"}
          cursor={"pointer"}
        />
      </Link>
      </div>
    </div>
  );
};

export default SettingNavMenu;
