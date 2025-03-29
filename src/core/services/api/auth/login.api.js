import http from "../../interceptor";
export const loginStep1 = async (credintials) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Sign/Login`,credintials);

    localStorage.setItem('token',result.token)

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
