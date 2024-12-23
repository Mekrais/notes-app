import { useState } from "react";
import useStore from "./store/store";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes, courses, fetchNotes, CHARACTER_LIMIT, NEWLINE_LIMIT } = useStore();
  const [selectedCourse, setSelectedCourse] = useState(null);

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
