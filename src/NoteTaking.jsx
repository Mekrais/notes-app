import { useState, useEffect } from "react";
import useStore from "./store/store";
import NoteItem from "./NoteItem";

const NoteTaking = () => {
  const {
    courses,
    notes,
    CHARACTER_LIMIT,
    NEWLINE_LIMIT,
    sessionNotes,
    currentCourse,
    setCurrentCourse,
    addNote,
    resetSession,
    countNewlines,
    fetchCourses,
    fetchNotes,
  } = useStore();
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      id: notes.length + 1,
      text: noteText,
      timestamp: new Date().toISOString(),
      course: currentCourse,
    };

    addNote(newNote);
    setNoteText(""); // Clear input
  };

  const startNewSession = () => {
    resetSession();
    setNoteText(""); // Reset note text
  };

  useEffect(() => {
    resetSession();
  }, [resetSession]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Take Notes</h2>

      {/* Dropdown for selecting course */}
      {!currentCourse && (
        <select
          onChange={(e) =>
            setCurrentCourse(courses.find((c) => c.id === parseInt(e.target.value)))
          }
          className="border p-2 rounded-md mb-4 text-black"
        >
          <option value="">Select a Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      )}

      {/* Show current course */}
      {currentCourse && (
        <div>
          <p>Current Course: {currentCourse.name}</p>
          <button onClick={startNewSession} className="text-blue-500">
            Start New Session
          </button>
        </div>
      )}

      {/* Input for note text */}
      {currentCourse && (
        <>
          <textarea
            placeholder="Write your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="w-full border p-2 rounded-md mb-4 text-black"
          ></textarea>
          <button
            onClick={handleAddNote}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Note
          </button>
        </>
      )}

      {/* Display session notes */}
      {currentCourse && (
        <div>
          <h3 className="text-lg font-bold mt-4">Current Session Notes</h3>
          <ul className="space-y-4">
            {sessionNotes.map((note) => {
              const showToggle =
                note.text.length > CHARACTER_LIMIT ||
                countNewlines(note.text) > NEWLINE_LIMIT;

              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  showToggle={showToggle}
                  addTimestamp={false}
                  addDelete={false}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoteTaking;
