import http from "../../interceptor"; //axios//

export const getLandingReport = async () => {
    try {
        const result = await http.get(`/Home/LandingReport`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};