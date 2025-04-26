import React from "react";
import { Formik, Form, Field } from "formik";
const Links = () => {
  return (
    <div >
      <Formik
        initialValues={{ telegram: "", linkedin: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-10 p-4 md:p-6 lg:p-8">
            {/* Telegram Section */}
            <div className="flex flex-col gap-2">
              <p
                className="text-[16px] font-yekan-600   text-black"
              >
                تلگرام
              </p>
              <Field
                type="text"
                id="telegram"
                name="telegram"
                placeholder="لینک تلگرام خود را وارد کنید"
                className="border border-[#DCDCDC] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
              />
            </div>

            {/* LinkedIn Section */}
            <div className="flex flex-col gap-2">
              <p
                htmlFor="linkedin"
                className="text-[16px] font-yekan-600  text-black"
              >
                لینکدین
              </p>
              <Field
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="لینک لینکدین خود را وارد کنید"
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
