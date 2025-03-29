import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import arrow from "../../assets/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { RegisterStep2 } from "../../core/services/api/auth/Register/RegisterStep2.api";
import useStore from "../../core/constant/store/zustand-store";

export function RegisterPage2() {
  const PhoneNumber = useStore((state) => state.phoneNumber);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    verifyCode: Yup.string().required("کد تایید الزامی است."),
  });
  const handleSubmit = async (value) => {
    const data = await RegisterStep2({
      phoneNumber: PhoneNumber,
      verifyCode: value.verifyCode,
    });
    console.log(data);
    if (data.success) {
      if(data.message !== "درخواست نامعتبر است") {
        navigate("/auth/RegisterPage/RegisterPage3");
      }
    } else {
      console.error(data.message);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <Link to="/auth/RegisterPage">
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
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC] md:w-[157px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#3772FF] md:w-[157px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base text-[#2F2F2F]  py-[12px] mr-[99px]  md:mr-6.5">
                  تایید کد ارسال شده
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#DCDCDC] md:w-[157px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[99px]  md:mr-6.5">
                  واردکردن اطلاعات شخصی
                </h3>
              </div>
            </div>
            <div className="flex-col mt-5">
              <div className="flex-col">
                <h1 className="text-2xl font-semibold  relative">
                  تایید کد ارسال شده
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                  لطفا کد ارسال شده به شماره همراه 09381235486 را <br />
                  وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    verifyCode: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="verifyCode"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          کد تایید
                        </label>
                        <Field
                          name="verifyCode"
                          placeholder="کد تایید خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="verifyCode"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <button className="w-[190px] h-[36px] bg-[#F6F6F6] mt-2 rounded-10 text-[#3772FF]">
                        ارسال مجدد کد تایید
                      </button>
                      <button
                        type="submit"
                        className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                      >
                        تایید
                      </button>
                      <Link to="/auth/RegisterPage">
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
