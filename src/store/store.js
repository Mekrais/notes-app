import { create } from "zustand";

const useStore = create((set, get) => ({
  courses: [],
  notes: [],
  sessionNotes: [],
  currentCourse: null,

  setCourses: (courses) => set({ courses }),
  setNotes: (notes) => set({ notes }),
  setCurrentCourse: (course) => set({ currentCourse: course }),

  addCourse: (newCourse) =>
    set((state) => ({ courses: [...state.courses, newCourse] })),
  addNote: (newNote) =>
    set((state) => ({
      notes: [...state.notes, newNote],
      sessionNotes: [...state.sessionNotes, newNote],
    })),
  resetSession: () => set({ currentCourse: null, sessionNotes: [] }),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),

  fetchCourses: async () => {
    try {
      const response = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
      );
      const data = await response.json();
      set((state) => {
        const newCourses = data.filter(
          (newCourse) =>
            !state.courses.some(
              (existingCourse) => existingCourse.id === newCourse.id
            )
        );
        return { courses: [...state.courses, ...newCourses] };
      });
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  },
  fetchNotes: async () => {
    try {
      const response = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
      );
      const data = await response.json();
      set({ notes: data });
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  },
}));

export default useStore;
