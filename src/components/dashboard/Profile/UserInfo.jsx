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
    userProfileInfo.append("gender", values.gender === "male");
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
            firstName: userProfile?.fName,
            lastName: userProfile?.lName || "",
            userAbout: userProfile?.userAbout || "",
            phoneNumber: userProfile?.phoneNumber || "",
            nationalCode: userProfile?.nationalCode || "",
            birthday: userProfile?.birthDay || "",
            gender: userProfile?.gender || "",
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
                    <p className="block font-yekan-600   text-sm  mb-2">
                      نام
                    </p>
                    <Field
                      type="text"
                      name="firstName"
                      className=" border themed-dash-input border-[#DCDCDC] rounded-3xl w-full  py-3 px-3 setuserprofile text-[12px] "
                      placeholder="نام خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                      نام خانوادگی
                    </p>
                    <Field
                      type="text"
                      name="lastName"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 setuserprofile text-[12px] "
                      placeholder="نام خانوادگی خود را وارد کنید"
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
                <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                  درباره من
                </p>
                <Field
                  as="textarea"
                  name="userAbout"
                  className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full h-[123px] py-3 px-3 setuserprofile text-[12px] "
                  placeholder="متنی درباره خود را وارد کنید"
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
                    <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                      شماره همراه
                    </p>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 setuserprofile text-[12px] "
                      placeholder="شماره همراه خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                      کد ملی
                    </p>
                    <Field
                      type="text"
                      name="nationalCode"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 setuserprofile text-[12px]"
                      placeholder="کد ملی خود را وارد کنید"
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
                  <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                    تاریخ تولد
                  </p>
                  <div className="relative">
                    <Field
                      type="date"
                      name="birthday"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 setuserprofile text-[12px] "
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
                  <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                    جنسیت
                  </p>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-700 text-sm">مرد</p>
                    <Field type="radio" name="gender" value="male" />
                    <p className="text-gray-700 text-sm">زن</p>
                    <Field type="radio" name="gender" value="female" />
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
                <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                  ایمیل
                </p>
                <Field
                  type="email"
                  name="email"
                  className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 setuserprofile text-[12px] "
                  placeholder="ایمیل خود را وارد کنید"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <p className="block font-yekan-600 setuserprofile text-sm  mb-2">
                  آدرس سکونت
                </p>
                <Field
                  type="text"
                  name="homeAddress"
                  className="border themed-dash-input border-[#DCDCDC]  rounded-3xl w-full py-3 px-3 setuserprofile text-[12px] "
                  placeholder="آدرس محل سکونت خود را وارد کنید"
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
