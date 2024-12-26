import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-2 text-white bg-gray-900">
        <Link
          to="/"
          className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl transition-all duration-75">
          Kotisivu
        </Link>
        <Link
          to="/take-notes"
          className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl transition-all duration-75">
          Tee Muistiinpanoja
        </Link>
        <Link
          to="/all-notes"
          className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl transition-all duration-75">
          Muistiinpanot
        </Link>
        <Link
          to="/add-course"
          className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl transition-all duration-75">
          Lisää Kurssi
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
