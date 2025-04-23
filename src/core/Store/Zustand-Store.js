import { create } from "zustand";

const useStore = create((set) => ({
  pageNumber: 1,
  teacherId: null,
  technologies: null,
  techCount: 0,
  levelName: null,
  priceRange: [0, 100000000],
  SortCol: null,
  SortType: null,
    theme: "default",
  setTheme: (newTheme) => set({ theme: newTheme }),
  setPageNumber: (pageNumber) => set({ pageNumber }),
  setTeacherId: (teacherId) => set({ teacherId }),
  setTechnologies: (technologies) => set((prev) => ({ ...prev, technologies })),
  setLevelName: (levelName) => set((prev) => ({ ...prev, levelName })),
  setTechCount: (techCount) => set({ techCount }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setSortCol: (SortCol) => set({ SortCol }),
  setSortType: (SortType) => set({ SortType }),
}));

export default useStore;