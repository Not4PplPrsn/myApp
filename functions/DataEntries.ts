import { create } from 'zustand';// This function allow for the add button to work and tranfer th information to the calculate screen 

type CourseEntry = {
  id: string;
  courseName: string;
  duration: string;
  price: number;
};

type EntryStore = {
  entries: CourseEntry[];
  addEntry: (entry: CourseEntry) => void;//These are meant to store the item names an attributes 
  removeEntry: (id: string) => void;// Will also stor the id of the course
  getTotal: (price: number) => void ; // will store the toi
};

export const useEntries = create<EntryStore>((set, get) /*This is how the datat is transfered to the calculate screen  */=> ({
  entries: [],
  addEntry: (entry) => {
    const currentEntries = get().entries;
    if (currentEntries.length >= 6) {
      console.warn('Maximum of 6 courses reached');
      return;/*Limits the user from entering more than six items  */
    }
      const alreadyExists = currentEntries.some(e => e.id === entry.id);
  if (alreadyExists) {
    console.warn(`Course with ID ${entry.id} already exists`);
    return;
  }

    set({ entries: [...currentEntries, entry] })/*This is the package for he next screen  */;
  },
    removeEntry: (id:any) => {
    const currentEntries = get().entries;
    const updatedEntries = currentEntries.filter(entry => entry.id !== id);
    set({ entries: updatedEntries });
  },
    getTotal: () => {//Adds the discount and calculates what discount the user should get
    const entries = get().entries;
    const total = entries.reduce((sum, entry) => sum + entry.price, 0);

    let discount = 0;
    if (entries.length >= 2) discount = 0.05;
    if (entries.length === 3) discount = 0.10;
    if (entries.length > 3) discount = 0.15;

    return total - total * discount;
  },/**/

  
}));