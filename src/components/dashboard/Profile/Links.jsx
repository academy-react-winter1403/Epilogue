import React from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from 'react-i18next';

const Links = () => {
  const { t } = useTranslation('dashboard'); 

  return (
    <div>
      <Formik
        initialValues={{ telegram: "", linkedin: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-10 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-2">
              <p
                className="text-[16px] font-yekan-600 text-black"
              >
                {t('telegram')}
              </p>
              <Field
                type="text"
                id="telegram"
                name="telegram"
                placeholder={t('enterTelegramLink')} 
                className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
              />
            </div>

            <div className="flex flex-col gap-2">
             
              <label
                htmlFor="linkedin"
                className="text-[16px] font-yekan-600 text-black"
              >
                {t('linkedin')}
              </label>
              <Field
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder={t('enterLinkedinLink')}
                className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Links;