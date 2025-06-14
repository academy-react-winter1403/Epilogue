import React from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import arrow from "../../assets/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../../core/services/api/auth/ForgetPassword/ForgetPassword";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next'; 

export function ForgetPassword() {
  const { t } = useTranslation('auth'); 
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('emailInvalid')) 
      .required(t('emailRequired')), 
  });

  const recoveryUserPassword = async (values) => {
    const data = {
      email: values.email,
      baseUrl: "https://localhost:5173/auth/forgetPassword/NewPassword",
    };
    const result = await forgetPassword(data);
    if (result.success) {
      toast.success(t('passwordRecoverySuccess')); 
      navigate("/auth/forgetPassword/NewPassword");
    } else {
      toast.error(t('passwordRecoveryError')); 
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <Link to="/auth/login">
          <div className="flex gap-65 block md:hidden">
            <div className="w-[42px] h-[40px]">
              <img src={bahrLogo} alt="Bahr Logo" /> 
            </div>
            <div className="border border-[#DCDCDC] w-[121px] h-[40px] rounded-[34px]">
              <div className="w-[24px] h-[24px] relative top-[8px] right-[90px]">
                <img src={arrow} alt="Return Arrow" /> 
              </div>
              <h3 className="text-base font-medium text-[#3772FF] relative right-[16px] bottom-[18px]">
                {t('return')} 
              </h3>
            </div>
          </div>
        </Link>
        <div className="w-full flex p-8 gap-0 md:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#3772FF] md:w-[246px]"></div>
                <h3 className="font-semibold text-base text-[#2F2F2F] py-[12px] mr-[119px] md:mr-0">
                  {t('enterEmail')} 
                </h3>
              </div>
              <div className="flex-col">
                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC] md:w-[246px] md:mr-[24px]"></div>
                <h3 className="font-semibold text-base py-[12px] mr-[99px] text-[#DCDCDC] md:mr-6.5">
                  {t('twoStepVerification')} 
                </h3>
                <h3 className="font-semibold text-sm text-[#DCDCDC] mr-[99px] md:mr-6.5">
                  {t('ifTwoStepActive')}
                </h3>
              </div>
            </div>
            <div className="flex-col mt-5">
              <div className="flex-col">
                <h1 className="text-2xl font-semibold relative">
                  {t('forgotPassword')}{" "} 
                </h1>
                <h3 className="font-medium text-base text-[#707070] relative top-[12px]">
                  {t('forgotPasswordDescription')} 
                </h3>
              </div>
              <div className="relative top-[48px]">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => recoveryUserPassword(values)}
                >
                  {() => (
                    <Form>
                      <Toaster />
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="email"
                          className="font-semibold text-base text-[#2F2F2F]"
                        >
                          {t('email')}
                        </label>
                        <Field
                          name="email"
                          type="email"
                          placeholder={t('enterYourEmail')} 
                          className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-[398px] cursor-pointer bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                      >
                        {t('sendLink')} 
                      </button>
                      <div className="border border-[#DCDCDC] w-[114px] h-[40px] rounded-[34px] relative top-[16px] right-[140px] hidden md:block">
                        <div className="w-[24px] h-[24px] relative top-[8px] right-[75px]">
                          <img src={arrow} alt="Return Arrow" /> 
                        </div>
                        <Link to={"/auth/login"} className="text-base font-medium text-[#3772FF] relative right-[19px] bottom-[18px]">
                          {t('return')} 
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}