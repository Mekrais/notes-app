import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useStore from "./store/store";

const AppWrapper = () => {
  const { fetchCourses, fetchNotes } = useStore();

  useEffect(() => {
    fetchCourses();
    fetchNotes();
  }, [fetchCourses]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppWrapper;
