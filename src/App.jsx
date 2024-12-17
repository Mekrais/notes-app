import './App.css'
import { Route, Routes } from 'react-router-dom'
import CourseList from "./CourseList";
// import AddCourse from "./AddCourse";
// import NoteTaking from "./NoteTaking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      {/* <Route path="/add-course" element={<AddCourse />} /> */}
      {/* <Route path="/notes" element={<NoteTaking />} /> */}
    </Routes>
  )
}

export default App
