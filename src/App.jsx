import { Route, Routes } from 'react-router-dom'
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import Navbar from './Navbar';
import NoteTaking from "./NoteTaking";
import NoteList from "./NoteList";
import AppWrapper from './AppWrapper';

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route element={<AppWrapper />}>
            <Route path="/" element={<CourseList />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/notes" element={<NoteTaking />} />
            <Route path="/all-notes" element={<NoteList />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
