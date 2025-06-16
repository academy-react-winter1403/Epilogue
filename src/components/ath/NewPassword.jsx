import React, { useEffect } from "react";
import bahrLogo from "../../assets/bahe-logo.png";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import arrow from "../../assets/arrow.png";
import { Link, useNavigate, useParams} from "react-router-dom";
import { getConfigValue } from "../../core/services/api/auth/ForgetPassword/ChangePassword/getConfigValue";
import { changePassword } from "../../core/services/api/auth/ForgetPassword/ChangePassword/ChangePassword";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

export function NewPassword() {
    const { t } = useTranslation('auth');
    let userId = '';

    const validationSchema = Yup.object().shape({
        NewPassword: Yup.string()
            .required(t('newPasswordRequired')), 
        NewPassword2: Yup.string()
            .required(t('newPasswordRequired')) 
            .oneOf([Yup.ref('NewPassword'), null], t('passwordMismatch')) 
    });

    const { configValue } = useParams()
    const navigate = useNavigate()

    const getUserConfig = async () => {
        const result = await getConfigValue(configValue);
    };

    const recoveryPassword = async (values) => {
        const data = {
            userId: userId, 
            newPassword: values.NewPassword, 
            resetValue: configValue
        };
        if (values.NewPassword === values.NewPassword2) {
            const result = await changePassword(data);
            if (result.success) {
                toast.success(t('passwordResetSuccess')); 
                navigate("/auth/login");
            } else {
                toast.error(t('passwordRecoveryError')); 
            }
        } else {
            toast.error(t('passwordMismatch')); 
        }
    };

    useEffect(() => {
        getUserConfig();
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <Link to="/auth/ForgetPassword">
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
                                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] bg-[#DCDCDC] md:w-[246px]"></div>
                                <h3 className="font-semibold text-base text-[#DCDCDC] py-[12px] mr-[119px] md:mr-0">
                                    {t('enterEmail')}
                                </h3>
                            </div>
                            <div className="flex-col">
                                <div className="w-[400px] h-[8px] mt-5 rounded-[9px] text-[#2F2F2F] bg-[#3772FF] md:w-[246px] md:mr-[24px]"></div>
                                <h3 className="font-semibold text-base py-[12px] mr-[99px] md:mr-6.5">
                                    {t('twoStepVerification')} 
                                </h3>
                                <h3 className="font-semibold text-sm text-[#2F2F2F] mr-[99px] md:mr-6.5">
                                    {t('ifTwoStepActive')} 
                                </h3>
                            </div>
                        </div>
                        <div className="flex-col mt-5">
                            <div className="flex-col">
                                <h1 className="text-2xl font-semibold relative">
                                    {t('newPassword')}{" "} 
                                </h1>
                                <h3 className="font-medium text-base text-[#707070] relative top-[12px]">
                                    {t('enterNewPassword')} 
                                </h3>
                            </div>
                            <div className="relative top-[48px]">
                                <Formik
                                    initialValues={{
                                        NewPassword: "",
                                        NewPassword2: ""
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
                                                    {t('newPassword')} 
                                                </label>
                                                <Field
                                                    name="NewPassword"
                                                    type="password"
                                                    placeholder={t('enterYourPassword')} 
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
                                                    {t('repeatNewPassword')} 
                                                </label>
                                                <Field
                                                    name="NewPassword2"
                                                    type="password"
                                                    placeholder={t('repeatNewPasswordPlaceholder')}
                                                    className="mt-2 w-[398px] h-[48px] p-2 border border-[#DCDCDC] rounded-[24px]"
                                                />
                                                <ErrorMessage
                                                    name="NewPassword2"
                                                    component="div"
                                                    className="text-red-600 text-sm"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-[398px] bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600 mt-[31px]"
                                            >
                                                {t('loginToAccount')} 
                                            </button>
                                            <Link to="/auth/ForgetPassword">
                                                <div className="border border-[#DCDCDC] w-[114px] h-[40px] rounded-[34px] relative top-[16px] right-[140px] hidden md:block">
                                                    <div className="w-[24px] h-[24px] relative top-[8px] right-[75px]">
                                                        <img src={arrow} alt="Return Arrow" /> 
                                                    </div>
                                                    <h3 className="text-base font-medium text-[#3772FF] relative right-[19px] bottom-[18px]">
                                                        {t('return')} 
                                                    </h3>
                                                </div>
                                            </Link>
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