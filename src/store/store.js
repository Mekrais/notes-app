import { create } from "zustand";

const useStore = create((set, get) => ({
  courses: [],
  notes: [],
  sessionNotes: [],
  currentCourse: null,

  CHARACTER_LIMIT: 500,
  NEWLINE_LIMIT: 2,

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

  countNewlines: (text) => (text.match(/\n/g) || []).length,

  truncateText: (text, CHARACTER_LIMIT, NEWLINE_LIMIT) => {
    const newlines = text.split("\n");
    const newlineCount = newlines.length - 1;

    if (newlineCount > NEWLINE_LIMIT) {
      return newlines.slice(0, NEWLINE_LIMIT + 1).join("\n") + "...";
    } else if (text.length > CHARACTER_LIMIT) {
      return text.slice(0, CHARACTER_LIMIT) + "...";
    }
    return text;
  },

  getFilteredNotes: () => {
    const { notes, currentCourse } = get();
    return currentCourse
      ? notes.filter((note) => note.course.id === currentCourse.id)
      : notes;
  },
}));

export default useStore;
