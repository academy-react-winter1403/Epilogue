import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Calendar02Icon } from "../../../components/common/Icons/Calender-02Icon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProfile } from "../../../core/services/api/Dashboard/dashborad";
import useUserStore from "../../../core/constant/user-info";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی است"),
  lastName: Yup.string().required("نام خانوادگی الزامی است"),
  userAbout: Yup.string(),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "شماره همراه باید شامل اعداد باشد")
    .min(10, "شماره همراه باید حداقل 10 رقم باشد")
    .required("شماره همراه الزامی است"),
  nationalCode: Yup.string()
    .matches(/^[0-9]+$/, "کد ملی باید شامل اعداد باشد")
    .min(10, "کد ملی باید 10 رقم باشد")
    .max(10, "کد ملی باید 10 رقم باشد")
    .required("کد ملی الزامی است"),
  birthday: Yup.date().required("تاریخ تولد الزامی است"),
  gender: Yup.string().oneOf(
    ["male", "female"],
    "لطفا جنسیت خود را انتخاب کنید"
  ),
  email: Yup.string()
    .email("فرمت ایمیل نامعتبر است")
    .required("ایمیل الزامی است"),
  homeAddress: Yup.string(),
});

const UserInfo = () => {
  const client = useQueryClient();

  const userProfile = useUserStore((state) => state.userProfile);
  const setUserProfile = useUserStore((state) => state.setUserProfile);

  const editUserProfile = async (values) => {
    const userProfileInfo = new FormData();
    const birthday = new Date(values.birthday).toISOString();
    userProfileInfo.append("FName", values.firstName);
    userProfileInfo.append("LName", values.lastName);
    userProfileInfo.append("UserAbout", values.userAbout);
    userProfileInfo.append("PhoneNumber", values.phoneNumber);
    userProfileInfo.append("NationalCode", values.nationalCode);
    userProfileInfo.append("BirthDay", values.birthday);
    userProfileInfo.append("gender", values.gender);
    userProfileInfo.append("Email", values.email);
    userProfileInfo.append("HomeAdderess", values.homeAddress);
    mutation.mutate(userProfileInfo);
    console.log(userProfileInfo);
  };

  const mutation = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      toast.success("ویرایش پروفایل با موفقیت انجام شد");
      client.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: () => {
      toast.error("خطا");
    },
  });

  return (
    <div>
      {setUserProfile && (
        <Formik
          initialValues={{
            firstName: userProfile?.fName || "",
            lastName: userProfile?.lName || "",
            userAbout: userProfile?.userAbout || "",
            phoneNumber: userProfile?.phoneNumber || "",
            nationalCode: userProfile?.nationalCode || "",
            birthday: userProfile?.birthDay || "",
            gender: userProfile?.gender || "" ,
            email: userProfile?.email || "",
            homeAddress: userProfile?.homeAdderess || "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => editUserProfile(values)}
        >
          {(form) => (
            <Form>
              <div className="mb-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block font-yekan-600  text-black text-sm  mb-2">
                      نام
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      className=" border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder="نام خود را وارد کنید"
                      value={form.values.firstName}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block font-yekan-600  text-black text-sm  mb-2">
                      نام خانوادگی
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder="نام خانوادگی خود را وارد کنید"
                      value={form.values.lastName}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-yekan-600  text-black text-sm  mb-2">
                  درباره من
                </label>
                <Field
                  as="textarea"
                  name="userAbout"
                  className="border border-[#DCDCDC] rounded-3xl w-full h-[123px] py-3 px-3 text-black text-[12px] "
                  placeholder="متنی درباره خود را وارد کنید"
                  value={form.values.userAbout}
                />
                <ErrorMessage
                  name="userAbout"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block font-yekan-600  text-black text-sm  mb-2">
                      شماره همراه
                    </label>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder="شماره همراه خود را وارد کنید"
                      value={form.values.phoneNumber}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block font-yekan-600  text-black text-sm  mb-2">
                      کد ملی
                    </label>
                    <Field
                      type="text"
                      name="nationalCode"
                      className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px]"
                      placeholder="کد ملی خود را وارد کنید"
                      value={form.values.nationalCode}
                    />
                    <ErrorMessage
                      name="nationalCode"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-row gap-4">
                <div className="w-1/2">
                  <label className="block font-yekan-600  text-black text-sm  mb-2">
                    تاریخ تولد
                  </label>
                  <div className="relative">
                    <Field
                      type="date"
                      name="birthday"
                      className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder="تاریخ تولد خود را وارد کنید"
                    />
                    <div className="absolute  pl-3 ">
                      <Calendar02Icon />
                    </div>
                  </div>
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block font-yekan-600  text-black text-sm  mb-2">
                    جنسیت
                  </label>
                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="text-gray-700 text-sm">مرد</label>
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 text-sm">زن</label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className=" text-[#3772FF] py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                      >
                        انتخاب کنید
                      </button>
                    </div>{" "}
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-yekan-600  text-black text-sm  mb-2">
                  ایمیل
                </label>
                <Field
                  type="email"
                  name="email"
                  className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                  placeholder="ایمیل خود را وارد کنید"
                  value={form.values.email}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <label className="block font-yekan-600  text-black text-sm  mb-2">
                  آدرس سکونت
                </label>
                <Field
                  type="text"
                  name="homeAddress"
                  className="border border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                  placeholder="آدرس محل سکونت خود را وارد کنید"
                  value={form.values.homeAddress}
                />
                <ErrorMessage
                  name="homeAddress"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <button
                type="submit"
                className="bg-[#3772FF] hover:bg-blue-700 text-white text-[12px] py-2 px-4 rounded-[40px] w-[125px] h-[48px] "
              >
                اعمال تغییرات
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UserInfo;
