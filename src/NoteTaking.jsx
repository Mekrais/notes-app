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
    setNoteText("");
  };

  const startNewSession = () => {
    resetSession();
    setNoteText("");
  };

  useEffect(() => {
    resetSession();
  }, [resetSession]);

  return (
    <div className="mt-20 p-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Tee Muistiinpanoja
      </h2>

      {/* Dropdown for selecting course */}
      {!currentCourse && (
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-lg font-medium">
            Valitse Kurssi:
          </label>
          <select
            onChange={(e) =>
              setCurrentCourse(
                courses.find((c) => c.id === parseInt(e.target.value))
              )
            }
            className="w-full border border-gray-700 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Valitse Kurssi</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Show current course */}
      {currentCourse && (
        <div className="mb-6">
          <p className="text-lg">
            <span className="font-bold text-blue-400">Valittu Kurssi:</span>{" "}
            {currentCourse.name}
          </p>
          <button
            onClick={startNewSession}
            className="mt-2 text-blue-500 hover:underline">
            Uusi Sessio
          </button>
        </div>
      )}

      {/* Input for note text */}
      {currentCourse && (
        <>
          <textarea
            placeholder="Kirjoita muistiinpanoja..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button
            onClick={handleAddNote}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Lisää Muistiinpano
          </button>
        </>
      )}

      {/* Scrollable notes section */}
      {currentCourse && (
        <div className="mt-8 overflow-y-auto max-h-[50vh]">
          <h3 className="text-xl font-bold mb-4 text-blue-400">
            Session Muistiinpanot
          </h3>
          {sessionNotes.length === 0 ? (
            <p className="text-gray-400 text-center">Ei muistiinpanoja!</p>
          ) : (
            <ul className="space-y-4">
              {sessionNotes.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NoteTaking;
