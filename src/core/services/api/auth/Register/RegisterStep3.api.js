import http from "../../../interceptor";
export const RegisterStep3 = async (credintials) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Sign/Register`,credintials);

    localStorage.setItem('token',result.token)

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
