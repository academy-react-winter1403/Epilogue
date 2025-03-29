import http from "../../../../interceptor";

export const getConfigValue = async (configValue) => {
    try {
        const response = http.get("/Sign/Reset/" + configValue)
        return response
    } catch (error) {
        throw error
    }
}