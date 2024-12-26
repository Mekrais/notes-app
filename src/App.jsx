import { Route, Routes, useLocation } from "react-router-dom";
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import Navbar from "./Navbar";
import NoteTaking from "./NoteTaking";
import NoteList from "./NoteList";
import AppWrapper from "./AppWrapper";
import Home from "./homePage";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route element={<AppWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/take-notes" element={<NoteTaking />} />
          <Route path="/all-notes" element={<NoteList />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Route>
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
