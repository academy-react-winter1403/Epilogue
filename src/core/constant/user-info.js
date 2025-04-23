import { create } from "zustand";

const useUserStore = create((set) => ({
    userProfile: "",
    setUserProfile: (userProfile) => set({ userProfile })
}));

export default useUserStore;
