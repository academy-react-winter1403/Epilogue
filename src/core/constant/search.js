import { create } from 'zustand';

const useSearchStore = create((set) => ({
  SearchInput: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useSearchStore;