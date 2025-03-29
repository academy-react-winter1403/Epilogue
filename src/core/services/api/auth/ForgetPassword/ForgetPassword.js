import http from "../../../interceptor";

export const forgetPassword = async (email) => {
    try {
        const response = await http.post("/Sign/ForgetPassword", email)
        return response
    } catch (error) {
        throw error
    }
}