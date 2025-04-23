import { create } from "zustand";

const useStore = create((set) => ({
  pageNumber: 1,
  teacherId: null,
  technologies: null,
  techCount: 0,
  setPageNumber: (pageNumber) => set({ pageNumber }),
  setTeacherId: (teacherId) => set({ teacherId }),
  setTechnologies: (technologies) => set((prev) => ({...prev, technologies })),
  setTechCount: (techCount) => set({ techCount }),
}));

export default useStore;
