import { useState } from "react";
import useStore from "./store/store";

const AddCourse = () => {
  const { courses, addCourse } = useStore();
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = () => {
    if (courseName.trim() === "") return;

    const newCourse = {
      id: courses.length, // Generate a simple ID based on array length
      name: courseName,
    };

    addCourse(newCourse);
    setCourseName(""); // Clear input field
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Lisää Kurssi</h2>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Input field */}
          <input
            type="text"
            placeholder="Kurssin nimi"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full sm:w-auto flex-1 border border-gray-700 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Add course button */}
          <button
            onClick={handleAddCourse}
            className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Lisää Kurssi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
