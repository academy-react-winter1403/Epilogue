import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useState } from "react";
import Vector from "../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import { loginStep2 } from "../../core/services/api/auth/login.api";
import { loginStep2Validation } from "../../core/validations/auth.validation";
import { setItem } from "../../core/utils/storage.services";
import toast, { Toaster } from "react-hot-toast";
import arrow from '../../assets/arrow.png'
import useStore from "../../core/Store/Zustand-Store";

export function LogInStep2() {
  const navigate = useNavigate();


  const {loginInfo} = useStore((state)=>state)

  const handleSubmit = async ({VerifyCode}) => {
    console.log(VerifyCode)
    const result = await loginStep2 (VerifyCode,loginInfo)

    // if (data.success) {
    //   setItem("token", data.token);
    //   toast.success("خوش آمدید");
    //   navigate("/dashboard/student-panel");
    // } else if (!data.success) {
    //   toast.error("خطا");
    // }
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
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC]  md:w-[246px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC]  py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF] md:w-[246px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base  py-[12px] mr-[99px] text-[#2F2F2F] md:mr-6.5">
                  تایید کد ارسال شده دو مرحله‌ای
                </h3>
                <h3 className="font-semibold text-sm text-[#2F2F2F] mr-[99px]  md:mr-6.5">
                  ( درصورت فعال بودن دو مرحله‌ای )
                </h3>
              </div>
            </div>
            <div className="flex-col mt-5">
              <div className="flex-col">
                <h1 className="text-2xl font-semibold  relative">
                  تایید کد دو مرحله‌ای!
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                  کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را
                  <br /> وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    VerifyCode: "",
                  }}
                  validationSchema={loginStep2Validation}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <Toaster />

                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="VerifyCode"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          کد دو مرحله‌ای
                        </label>
                        <Field
                        type="number"
                          name="VerifyCode"
                          placeholder="کد دو مرحله‌ای خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="VerifyCode"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-[398px] cursor-pointer bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                      >
                        ورود به حساب
                      </button>
                      <div className="border border-[#DCDCDC] w-[114px] h-[40px] rounded-[34px] relative top-[16px] right-[140px] hidden md:block">
                        <div className="w-[24px] h-[24px] relative top-[8px] right-[75px]">
                          <img src={arrow} />
                        </div>
                        <Link
                          to={"/auth/login"}
                          className="text-base font-medium text-[#3772FF] relative right-[19px] bottom-[18px]"
                        >
                          بازگشت
                        </Link>
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
