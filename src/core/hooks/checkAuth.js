import toast from "react-hot-toast";
import { getItem } from "../utils/storage.services";

export const checkAuth = () => {
  if (!localStorage.getItem("token")) {
    toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید");
    throw new Error("USER_NOT_LOGGED_IN");
  }
};