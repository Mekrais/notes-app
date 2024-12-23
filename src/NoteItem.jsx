import React, { useState } from "react";
import useStore from "./store/store";

const NoteItem = ({ note, showToggle, addTimestamp, addDelete }) => {
  const { CHARACTER_LIMIT, NEWLINE_LIMIT, truncateText, deleteNote } = useStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const textToRender = isExpanded || !showToggle
    ? note.text
    : truncateText(note.text, CHARACTER_LIMIT, NEWLINE_LIMIT);

  return (
    <li className="bg-gray-800 p-4 rounded-md text-wrap break-words relative">

      {addDelete && (
      <button
        onClick={() => deleteNote(note.id)}
        className="absolute p-1 top-2 right-2 rounded-xl bg-red-500 hover:bg-red-700 text-xl"
      >
        🗑️
      </button>
      )}

      <p className="mb-2 whitespace-pre-line pr-8">
        {textToRender.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      <div className="flex justify-between items-center">
        {addTimestamp &&
        <small>
          {note.course.name} (ID: {note.course.id}) -{" "}
          {new Date(note.timestamp).toLocaleString("fi-FI")}
        </small>
        }

        {showToggle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline text-sm"
          >
            {isExpanded ? "Näytä vähemmän ↑" : "Näytä enemmän ↓"}
          </button>
        )}
      </div>
    </li>
  );
};

export default NoteItem;
