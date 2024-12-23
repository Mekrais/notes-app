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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Add Course</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="border p-2 rounded-md text-black"
        />
        <button
          onClick={handleAddCourse}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Course
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
