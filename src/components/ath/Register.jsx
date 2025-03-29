import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import arrow from "../../assets/arrow.png";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const validationSchema = Yup.object().shape({
    code: Yup.string().required("کد الزامی است."),
  });
  return (
    <>
      <div className="flex flex-col">
        <Link to="/auth/login">
          <div className="flex gap-65 block md:hidden">
            <div className="w-[42px] h-[40px]">
              <img src={bahrLogo} />
            </div>
            <div className="border border-[#DCDCDC] w-[121px] h-[40px] rounded-[34px]">
              <div className="w-[24px] h-[24px] relative top-[8px] right-[90px]">
                <img src={arrow} alt="Vector" />
              </div>
              <h3 className="text-base font-medium text-[#3772FF] relative right-[16px] bottom-[18px]">
                بازگشت
              </h3>
            </div>
          </div>
        </Link>
        <div className="w-full   flex p-8 gap-0 md:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col ">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC] md:w-[246px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF]  md:w-[246px]  md:mr-[24px]"></div>
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
                  تایید کد دو مرحله‌ای!{" "}
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                  کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را
                  <br /> وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    navigate("/LogIn/Register");
                  }}
                >
                  {() => (
                    <Form>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="code"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          کد دو مرحله‌ای
                        </label>
                        <Field
                          name="code"
                          type="number"
                          placeholder="کد دو مرحله‌ای خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="code"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <Link to="/auth/Register">
                        <button
                          type="submit"
                          className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                        >
                          ورود به حساب
                        </button>
                      </Link>
                      <Link to="/auth/login">
                        <div className="border border-[#DCDCDC] w-[114px] h-[40px] rounded-[34px] relative top-[16px] right-[140px] hidden md:block">
                          <div className="w-[24px] h-[24px] relative top-[8px] right-[75px]">
                            <img src={arrow} />
                          </div>
                          <h3 className="text-base font-medium text-[#3772FF] relative right-[19px] bottom-[18px]">
                            بازگشت
                          </h3>
                        </div>
                      </Link>
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
