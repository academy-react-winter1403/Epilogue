import http from'../../../../interceptor'

export const changePassword = async (newPassword) => {
    try {
        const response = await http.post("/Sign/Reset", newPassword)
        return response
    } catch (error) {
        throw error
    }
}