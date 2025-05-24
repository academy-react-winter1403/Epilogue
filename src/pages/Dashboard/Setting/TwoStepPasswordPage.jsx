import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TwoStepPasswordPage = () => {
  const { t } = useTranslation('dashboard');
  const handleSubmit = (values) => {
    console.log("Two-step verification code submitted:", values.verificationCode);
  };

  return (
    <div>
      <Formik
        initialValues={{
          verificationCode: "", 
        }}
        onSubmit={handleSubmit} 
      >
        <Form className="flex flex-col gap-10 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="verificationCode"
              className="text-[16px] font-yekan-600 text-black"
            >
              {t('verificationCode')} 
            </label>
            <Field
              type="text" 
              id="verificationCode" 
              name="verificationCode"
              placeholder={t('enterVerificationCode')}
              className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
            />
          </div>

          <button
            type="submit"
            className="w-[80px] h-[30px] rounded-[20px] text-white bg-[#3772FF]"
          >
            {t('submit')} 
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TwoStepPasswordPage;