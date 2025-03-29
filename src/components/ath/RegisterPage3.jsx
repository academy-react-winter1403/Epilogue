import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Vector from "../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../core/constant/store/zustand-store";
import { RegisterStep3 } from "../../core/services/api/auth/Register/RegisterStep3.api";

export function RegisterPage3() {
  const PhoneNumber = useStore((state) => state.phoneNumber);
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("رمز عبور الزامی است"),
    email: Yup.string()
      .email("ایمیل نامعتبر است.")
      .required("ایمیل الزامی است."),
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

    const handleSubmit = async (value) => {
      console.log(value);
      const data = await RegisterStep3({
        phoneNumber: PhoneNumber,
        email:value.email,
        password:value.password
      });
      console.log(data)
      if (data.success) {
        //navigate
      } else {
        // error
      }
    };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-65 block md:hidden">
          <div className="w-[42px] h-[40px]">
            <img src={bahrLogo} />
          </div>
        </div>
        <div className="w-full   flex p-8 gap-0 md:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col ">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC] md:w-[157px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#DCDCDC]  md:w-[157px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base  text-[#DCDCDC]  py-[12px] mr-[99px]  md:mr-6.5">
                  تایید کد ارسال شده
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF] md:w-[157px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base text-[#2F2F2F] py-[12px] mr-[99px]  md:mr-6.5">
                  واردکردن اطلاعات شخصی
                </h3>
              </div>
            </div>
            <div className="flex-col mt-5">
              <div className="flex-col">
                <h1 className="text-2xl font-semibold  relative">
                وارد کردن اطلاعات شخصی{" "}
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                لطفا اطلاعات اولیه خواسته شده را وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="email"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                           ایمیل
                        </label>
                        <Field
                          name="email"
                          type="email"
                          placeholder=" ایمیل خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="password"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          رمزعبور جدید
                        </label>
                        <div className="relative">
                          <Field
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="رمزعبور جدید خود را وارد کنید"
                            className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-85 top-3 flex items-center pr-3"
                          >
                            {showPassword ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 12c1.39 0 2.78-.52 4-1.5 1.25.84 2.89 1.5 4 1.5s2.75-.66 4-1.5c1.22 0 2.61.53 4 1.5M3 12s2-5 9-5 9 5 9 5-2 5-9 5-9-5-9-5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13.875 18.825A8.623 8.623 0 005 12c3-5 11-5 18 0a8.623 8.623 0 00-1.875 6.825M9.227 10.183a2.75 2.75 0 103.543 3.543m-3.543-3.543a2.75 2.75 0 00-3.543 3.543m3.543-3.543a2.75 2.75 0 013.543 3.543m6.86-6.86a15.055 15.055 0 014.953 7.337M3 3l18 18"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                        <button
                          type="submit"
                          className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                        >
                          تایید
                        </button>

                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          {/* <Side /> */}
        </div>
      </div>
    </>
  );
}
