import { clearStorage, removeItem } from "./storage.services";

export const logout = () => {
    clearStorage()
    removeItem('token');
    // window.location.pathname = '/'
    
}
