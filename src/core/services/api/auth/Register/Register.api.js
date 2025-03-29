import http from "../../../interceptor";
export const RegisterStep1 = async (body) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Sign/SendVerifyMessage`,body);

    localStorage.setItem('token',result.token)

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
