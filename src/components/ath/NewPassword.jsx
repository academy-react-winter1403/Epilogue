import React, { useEffect } from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import arrow from "../../assets/arrow.png";
import { Link, useNavigate, useParams} from "react-router-dom";
import { getConfigValue } from "../../core/services/api/auth/ForgetPassword/ChangePassword/getConfigValue";
import { changePassword } from "../../core/services/api/auth/ForgetPassword/ChangePassword/ChangePassword";
import toast, { Toaster } from "react-hot-toast";

export function NewPassword() {
  const validationSchema = Yup.object().shape({
        NewPassword: Yup.string()
          .required("رمز عبور الزامی است."),
          NewPassword2: Yup.string()
          .required("رمز عبور الزامی است."),
  });

    const { configValue } = useParams()
    const navigate = useNavigate()

    const getUserConfig = async () => {
        const result = await getConfigValue(configValue)
    }

    const recoveryPassword = async (values) => {
        const data = {
            userId: userId,
            newPassword: values.password,
            resetValue: configValue
        }
        if (values.password === values.repeatPassword) {
            const result = await changePassword(data)
            if (result.success) {
                toast.success("رمز شما بازیابی شد!")
                navigate("/auth/login")
            }
        } else toast.error("مثل اینکه در تکرار رمز عبور اشتباهی پیش آمده!")
    }

    useEffect(() => {
        getUserConfig()
    }, [])

  return (
    <>
      <div className="flex flex-col">
        <Link to="/auth/ForgetPassword">
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
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px]  bg-[#DCDCDC] md:w-[246px]"></div>
                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[119px] md:mr-0">
                واردکردن ایمیل
                </h3>
              </div>
              <div className=" flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] text-[#2F2F2F] bg-[#3772FF] md:w-[246px]  md:mr-[24px]"></div>
                <h3 className="font-semibold text-base  py-[12px] mr-[99px]  md:mr-6.5">
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
                رمزعبور جدید!  {" "}
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative  top-[12px]">
                رمزعبور جدید خود را وارد کنید
                </h3>
              </div>
              <div className="relative  top-[48px]">
                <Formik
                  initialValues={{
                    password:"",
                    resetPassword: ""
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => 
                    recoveryPassword(values)
                  }
                >
                  {() => (
                    <Form>
                      <Toaster/>
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="NewPassword"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          رمزعبور جدید
                        </label>
                        <Field
                          name="NewPassword"
                          type="password"
                          placeholder="رمزعبور خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="NewPassword"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="mt-3 flex flex-col">
                        <label
                          htmlFor="NewPassword2"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          تکرار رمزعبور جدید
                        </label>
                        <Field
                          name="NewPassword2"
                          type="password"
                          placeholder="تکرار رمزعبور خود را وارد کنید"
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="NewPassword2"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <Link to="/auth/Register">
                        <button
                          type="submit"
                          className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                        >
                        تایید رمزعبور
                        </button>
                      </Link>
                      <Link to="/auth/ForgetPassword">
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
