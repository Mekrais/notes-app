import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AddCourse from "./AddCourse";
import Navbar from "./Navbar";
import NoteTaking from "./NoteTaking";
import NoteList from "./NoteList";
import AppWrapper from "./AppWrapper";
import Home from "./homePage";

const pageVariants = {
  initialhome: { opacity: 0, scale: 1 },
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<AppWrapper />}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initialhome"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                  transition={{ duration: 0.3 }}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/take-notes"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                  transition={{ duration: 0.3 }}>
                  <NoteTaking />
                </motion.div>
              }
            />
            <Route
              path="/all-notes"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                  transition={{ duration: 0.3 }}>
                  <NoteList />
                </motion.div>
              }
            />
            <Route
              path="/add-course"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                  transition={{ duration: 0.3 }}>
                  <AddCourse />
                </motion.div>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
