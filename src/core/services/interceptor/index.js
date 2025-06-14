import axios from "axios";

import { getItem } from "../common/storage.services";

import { logout } from "../../utils/logout.services";


const baseURL = "https://classapi.sepehracademy.ir/api"

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  
   return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {

  const token = localStorage.getItem("token")
  if (token) opt.headers.Authorization = `Bearer ${token}` ;
  return opt;
});


// export const checkAuth = () => {
//   const token = localStorage.getItem('token');
//   console.log(token)
//   if (!token) {
//     console.log('yam')
//     throw new Error('USER_NOT_LOGGED_IN');
//   }
//   return true;
// };

export default instance;
