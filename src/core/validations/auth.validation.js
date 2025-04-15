import * as Yup from "yup";


export const loginValidation = Yup.object().shape({
    password: Yup.string().required("رمز عبور الزامی است"),
    phoneOrGmail: Yup.string()
      .required("ایمیل الزامی است."),
  });

  export const loginStep2Validation = Yup.object().shape({
    VerifyCode: Yup.string()
      .required("کد تایید نا معتبر است"),
  });