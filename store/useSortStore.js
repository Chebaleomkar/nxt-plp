import { create } from 'zustand';

const useSortStore = create((set) => ({
  sortOrder: 'recommended',
  setSortOrder: (order) => set({ sortOrder: order }),
}));

export default useSortStore; 