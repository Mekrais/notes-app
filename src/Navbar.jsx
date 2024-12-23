import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-2 text-white bg-gray-900">
        <Link to="/" className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl">Kotisivu</Link>
        <Link to="/notes" className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl">Tee Muistiinpanoja</Link>
        <Link to="/all-notes" className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl">Muistiinpanot</Link>
        <Link to="/add-course" className="text-white font-bold p-2 hover:bg-gray-700 rounded-xl">Lisää Opintojakso</Link>
      </nav>
    </>
  );
};

export default Navbar;
