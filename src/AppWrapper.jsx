import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useStore from "./store/store";

const AppWrapper = () => {
  const { fetchCourses } = useStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppWrapper;
