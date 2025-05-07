export const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('USER_NOT_LOGGED_IN');
    }
    return true;
};
  