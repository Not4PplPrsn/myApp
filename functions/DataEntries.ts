import { create } from 'zustand';

type CourseEntry = {
  id: string;
  courseName: string;
  duration: string;
  price: number;
};

type EntryStore = {
  entries: CourseEntry[];
  addEntry: (entry: CourseEntry) => void;
};

export const useEntries = create<EntryStore>((set, get) => ({
  entries: [],
  addEntry: (entry) => {
    const currentEntries = get().entries;
    if (currentEntries.length >= 6) {
      console.warn('Maximum of 6 courses reached');
      return;
    }
    set({ entries: [...currentEntries, entry] });
  },
}));