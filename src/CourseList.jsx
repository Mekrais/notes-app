import useStore from "./store/store";

const CourseList = () => {
  const { courses, setCurrentCourse } = useStore()

  return (
    <div>
      <h1>Courses</h1>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id} onClick={() => setCurrentCourse(course)}>
              {course.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
