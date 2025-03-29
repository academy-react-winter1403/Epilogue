import { create } from "zustand";

const useStore = create((set) => ({
  phoneNumber: '',
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
}));

export default useStore;