import React, { useState } from "react";
import useStore from "./store/store";

const NoteList = () => {
  const { notes, courses } = useStore();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedNotes, setExpandedNotes] = useState({});

  const CHARACTER_LIMIT = 500;

  const filteredNotes = selectedCourse
    ? notes.filter((note) => note.course.id === selectedCourse.id)
    : notes;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Kaikki Muistiinpanot</h2>

      {/* Dropdown for filtering by course */}
      <select
        onChange={(e) =>
          setSelectedCourse(
            courses.find((c) => c.id === parseInt(e.target.value)) || null
          )
        }
        className="border p-2 rounded-md mb-4 text-black"
      >
        <option value="">Kaikki kurssit</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>

      {/* Display filtered notes */}
      {filteredNotes.length === 0 ? (
        <p>Ei muistiinpanoja!</p>
      ) : (
        <ul className="space-y-4">
          {filteredNotes.map((note) => {
            const isExpanded = expandedNotes[note.id];
            const showToggle = note.text.length > CHARACTER_LIMIT;

            return (
              <li key={note.id} className="bg-gray-800 p-4 rounded-md text-wrap break-words">
                <p className="mb-2">
                  {/* Limits note text length if not expanded */}
                  {isExpanded || !showToggle
                    ? note.text
                    : `${note.text.slice(0, CHARACTER_LIMIT)}...`}
                </p>

                <div className="flex justify-between items-center">
                  <small>
                    {note.course.name} (ID: {note.course.id}) -{" "}
                    {new Date(note.timestamp).toLocaleString()}
                  </small>

                  {showToggle && (
                    <button
                      onClick={() =>
                        setExpandedNotes((prev) => ({
                          ...prev,
                          [note.id]: !isExpanded,
                        }))
                      }
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {isExpanded ? "Näytä vähemmän ↑" : "Näytä enemmän ↓"}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
