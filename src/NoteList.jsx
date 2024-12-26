import { useState } from "react";
import useStore from "./store/store";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes, courses, fetchNotes, CHARACTER_LIMIT, NEWLINE_LIMIT } =
    useStore();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredNotes = selectedCourse
    ? notes.filter((note) => note.course.id === selectedCourse.id)
    : notes;

  return (
    <div className="mt-20 p-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Kaikki Muistiinpanot
      </h2>

      {/* Filtering Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2 text-lg font-medium">
          Suodata Kurssin Mukaan:
        </label>
        <select
          onChange={(e) =>
            setSelectedCourse(
              courses.find((c) => c.id === parseInt(e.target.value)) || null
            )
          }
          className="w-full border border-gray-700 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Kaikki Kurssit</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered notes */}
      {filteredNotes.length === 0 ? (
        <p className="text-gray-400 text-center">Ei muistiinpanoja!</p>
      ) : (
        <ul className="space-y-4">
          {filteredNotes.map((note) => {
            const countNewlines = (text) => (text.match(/\n/g) || []).length;
            const showToggle =
              note.text.length > CHARACTER_LIMIT ||
              countNewlines(note.text) > NEWLINE_LIMIT;

            return (
              <NoteItem
                key={note.id}
                note={note}
                showToggle={showToggle}
                addTimestamp={true}
                addDelete={true}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
