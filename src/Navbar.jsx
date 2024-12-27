import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial="hidden"
      animate={location.pathname !== "/" ? "visible" : "hidden"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center p-2 text-white bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
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
    </motion.nav>
  );
};

export default Navbar;
