import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useState } from "react";
import Vector from "../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import { loginStep1 } from "../../core/services/api/auth/login.api";
import { loginValidation } from "../../core/validations/auth.validation";

export function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (value) => {
    console.log(value);
    const data = await loginStep1(value);
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
        <div className="flex gap-65  md:hidden">
          <div className="w-[42px] h-[40px]">
            <img src={bahrLogo} />
          </div>
          <div className="border border-[#DCDCDC] w-[141px] h-[40px] rounded-[34px]">
            <div className="w-[24px] h-[24px] relative top-[8px] right-[105px]">
              <img src={Vector} alt="Vector" />
            </div>
            <h3 className="text-base font-medium text-[#3772FF] relative right-[16px] bottom-[18px]">
              صفحه اصلی
            </h3>
          </div>
        </div>
        <div className="w-full   flex p-8 gap-0 md:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col ">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF] md:w-[246px]"></div>
                <h3 className="font-semibold text-base text-[#2F2F2F] py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#DCDCDC] md:w-[246px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[99px]  md:mr-6.5">
                  تایید کد ارسال شده دو مرحله‌ای
                </h3>
                <h3 className="font-semibold text-sm text-[#DCDCDC] mr-[99px]  md:mr-6.5">
                  ( درصورت فعال بودن دو مرحله‌ای )
                </h3>
              </div>
            </div>
            <div className="flex-col mt-5">
              <div className="flex-col">
                <h1 className="text-2xl font-semibold  relative">
                  خوش برگشتی!{" "}
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                  لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود
                  <br /> به حساب کاربری را وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    password: "",
                    phoneOrGmail: "",
                  }}
                  validationSchema={loginValidation}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="phoneOrGmail"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          شماره همراه یا ایمیل
                        </label>
                        <Field
                          name="phoneOrGmail"
                          placeholder="شماره همراه یا ایمیل خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="phoneOrGmail"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="password"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          رمز عبور
                        </label>
                        <div className="relative">
                          <Field
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="رمزعبور خود را وارد کنید"
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

                      <div className="flex items-center mt-[24px]">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          className="h-4 w-4 text-blue-600 rounded-[8px] border-[#DCDCDC] bg-[#DCDCDC] focus:ring-blue-500"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="mr-2 font-semibold text-base"
                        >
                          مرا به خاطر بسپار
                        </label>
                        <div className="w-[175px] h-[36px] mr-[82px] rounded-[40px] bg-[#F6F6F6] text-center">
                          <h3 className="text-[#3772FF] font-semibold text-sm mt-1.5">
                            رمزعبور را فراموش کردید؟
                          </h3>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                      >
                        ورود به حساب
                      </button>

                      <div className="flex w-[276px] h-[23px] relative right-14 top-[16px]">
                        <div className="w-2.75/5">
                          <h3 className="font-semibold text-base">
                            حساب کاربری ندارید؟
                          </h3>
                        </div>

                        <div className="w-2.25/5 text-center relative right-[8px]">
                          <h3 className="font-semibold text-base text-[#3772FF] underline">
                            ایجاد حساب کاربری
                          </h3>
                        </div>
                      </div>
                      <div className="border border-[#DCDCDC] w-[141px] h-[40px] rounded-[34px] relative top-[32px] right-[120px] hidden md:block">
                        <div className="w-[24px] h-[24px] relative top-[8px] right-[105px]">
                          <img src={Vector} alt="Vector" />
                        </div>
                        <h3 className="text-base font-medium text-[#3772FF] relative right-[16px] bottom-[18px]">
                          صفحه اصلی
                        </h3>
                      </div>
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
