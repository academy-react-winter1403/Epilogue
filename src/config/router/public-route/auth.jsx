import { LayOut } from "../../../components/layOut/LayOut";
import { LogIn } from "../../../components/ath/LogIn";
import { Register } from "../../../components/ath/Register";
import { ForgetPassword } from "../../../components/ath/ForgetPassword";
import { NewPassword } from "../../../components/ath/NewPassword";
import { RegisterPage } from "../../../components/ath/RegisterPage";
import { RegisterPage2 } from "../../../components/ath/RegisterPage2";
import { RegisterPage3 } from "../../../components/ath/RegisterPage3";

export const authRoute = {
  path: "/auth",
  element: <LayOut />,
  children: [
    { path: "/auth/login", element: <LogIn /> },
    { path: "/auth/login2", element: <Register /> },
    { path: "/auth/forgetPassword", element: <ForgetPassword /> },
    { path: "/auth/forgetPassword/NewPassword", element: <NewPassword /> },
    { path: "/auth/RegisterPage", element: <RegisterPage /> },
    { path:"/auth/RegisterPage/RegisterPage2" , element:<RegisterPage2/>},
    { path:"/auth/RegisterPage/RegisterPage3" , element:<RegisterPage3/>},
  ],
};
