import React from "react";
import { Field, Form, Formik } from "formik";
import { changePassword } from "../../../core/services/api/Dashboard/dashborad";
import toast from "react-hot-toast";

const ChangePasswordPage = () => {
  const changeUserPassword = async (values) => {
    const newPassword = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    const result = await changePassword(newPassword);
    if (result.success) {
      toast.success("تغییر رمز با موفقیت انجام شد");
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
              className="text-[16px] font-yekan-600 setuserprofile"
            >
              رمز عبور فعلی{" "}
            </label>
            <Field
              type="text"
              name="oldPassword"
              placeholder="رمز فعلی خود را وارد کنید"
              className="border border-[#DCDCDC] text-[var(--text-grey)] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-[16px] font-yekan-600 setuserprofile"
            >
              رمز عبور جدید{" "}
            </label>
            <Field
              type="text"
              name="newPassword"
              placeholder="رمز جدید خود را وارد کنید"
              className="border border-[#DCDCDC] text-[var(--text-grey)] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-[16px] font-yekan-600 setuserprofile"
            >
              تکرار رمز عبور جدید{" "}
            </label>
            <Field
              type="text"
              name="repeatNewPassword"
              placeholder="رمز جدیدت رو تکرار کن"
              className="border border-[#DCDCDC] text-[var(--text-grey)] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
            />
          </div>
          <button type="submit" className="w-[80px] h-[30px] rounded-[20px] text-white bg-[#3772FF]">ثبت</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePasswordPage;
