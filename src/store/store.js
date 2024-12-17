import { create } from "zustand";

const useStore = create((set) => ({
  courses: [],
  notes: [],
  currentCourse: null,

  setCourses: (courses) => set({ courses }),
  setNotes: (notes) => set({ notes }),
  setCurrentCourse: (course) => set({ currentCourse: course }),

  addCourse: (newCourse) =>
    set((state) => ({ courses: [...state.courses, newCourse] })),
  addNote: (newNote) => set((state) => ({ notes: [...state.notes, newNote] })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),

  fetchCourses: async () => {
    try {
      const response = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
      );
      const data = await response.json();
      set({ courses: data });
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  },
  fetchNotes: async () => {
    const response = await fetch(
      "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
    );
    set({ notes: await response.json() });
  },
}));

export default useStore;
