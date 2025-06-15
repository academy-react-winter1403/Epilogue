import React from "react";
import { Field, Form, Formik } from "formik";
import { changePassword } from "../../../core/services/api/Dashboard/dashborad"; 
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next'; 

const ChangePasswordPage = () => {
  const { t } = useTranslation('dashboard'); 

  const changeUserPassword = async (values) => {
    const newPassword = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    const result = await changePassword(newPassword);
    if (result.success) {
      toast.success(t('passwordChangeSuccess'));
    } else {
      toast.error(result.message || "An error occurred"); 
    }
    console.log(result);
  };

  return (
    <div>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          repeatNewPassword: "",
        }}
        onSubmit={(values) => changeUserPassword(values)}
      >
        <Form className="flex flex-col gap-10 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="oldPassword" 
              className="text-[16px] font-yekan-600 text-black"
            >
              {t('currentPassword')}
            </label>
            <Field
              type="password" 
              id="oldPassword"
              name="oldPassword"
              placeholder={t('enterCurrentPassword')} 
              className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"

            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="newPassword" 
              className="text-[16px] font-yekan-600 text-black"

            >
              {t('newPassword')}
            </label>
            <Field
              type="password" 
              id="newPassword"
              name="newPassword"
              placeholder={t('enterNewPassword')}
              className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"

            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="repeatNewPassword" 
              className="text-[16px] font-yekan-600 text-black"

            >
              {t('repeatNewPassword')}
            </label>
            <Field
              type="password" 
              id="repeatNewPassword"
              name="repeatNewPassword"
              placeholder={t('repeatYourNewPassword')}
              className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"

            />
          </div>
          <button type="submit" className="w-[80px] h-[30px] rounded-[20px] text-white bg-[#3772FF]">
            {t('submit')}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePasswordPage;