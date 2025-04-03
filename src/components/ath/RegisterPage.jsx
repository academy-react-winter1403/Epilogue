import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { RegisterStep1 } from "../../core/services/api/auth/Register/Register.api";
import Vector from "../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../core/constant/store/zustand-store";

export function RegisterPage() {

  const setPhoneNumber = useStore((state) => state.setPhoneNumber);
  const  phoneNumber= useStore((state) => state.phoneNumber);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("ایمیل الزامی است."),
  });

  const handleSubmit = async (value) => {
    console.log(value);
    const data = await RegisterStep1({phoneNumber : value.phoneNumber});
    console.log(data);
    setPhoneNumber(value.phoneNumber);

    if (data.success) {
      if(data.message !== "درخواست نامعتبر است") {
        navigate("/auth/RegisterPage/RegisterPage2");
      }
    } else {
      console.error(data.message);
    }
  };


  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-65 block md:hidden">
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
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF] md:w-[157px]"></div>
                <h3 className="font-semibold text-base text-[#2F2F2F] py-[12px] mr-[119px] md:mr-0">
                  واردکردن شماره همراه
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#DCDCDC] md:w-[157px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[99px]  md:mr-6.5">
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
                  خوش اومدی!{" "}
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                  لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما
                  <br /> ارسال شود
                </h3>
              </div>
              
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    phoneNumber: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="phoneNumber"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          شماره همراه
                        </label>
                        <Field
                          name="phoneNumber"
                          placeholder="شماره همراه خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-[398px] bg-blue-500 cursor-pointer text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                      >
                        ارسال کد تایید
                      </button>
                      <div className="flex w-[276px] h-[23px] relative right-14 top-[16px]">
                        <div className="w-2.75/5">
                          <h3 className="font-semibold text-base text-nowrap">
                            حساب کاربری دارید؟
                          </h3>
                        </div>

                        <div className="w-2.25/5 text-center relative right-[8px]">
                          <Link to={"/auth/login"} className="font-semibold text-base text-nowrap text-[#3772FF] underline">
                            ورود به حساب کاربری
                          </Link>
                        </div>
                      </div>
                      <div className="border border-[#DCDCDC] w-[141px] h-[40px] rounded-[34px] relative top-[32px] right-[120px] hidden md:block">
                        <div className="w-[24px] h-[24px] relative top-[8px] right-[105px]">
                          <img src={Vector} alt="Vector" />
                        </div>
                        <Link to={"/"} className="text-base font-medium text-[#3772FF] relative right-[16px] bottom-[18px]">
                          صفحه اصلی
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
