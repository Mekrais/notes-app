import { create } from "zustand";

const useStore = create((set, get) => ({
  courses: [],
  notes: [],
  sessionNotes: [],
  currentCourse: null,
  loaded: false,

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

      // Append only new courses to the existing list
      set((state) => ({
        courses: [
          ...state.courses,
          ...data.filter(
            (course) => !state.courses.some((n) => n.id === course.id)
          ),
        ],
      }));
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  },

  fetchNotes: async () => {
    const { loaded } = get();
    if (loaded) return;

    try {
      const response = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
      );
      const data = await response.json();
      set((state) => ({
        notes: [
          ...state.notes,
          ...data.filter((note) => !state.notes.some((n) => n.id === note.id)),
        ],
        loaded: true,
      }));
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  },

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
