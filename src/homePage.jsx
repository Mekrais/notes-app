import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Take Notes */}
        <Link
          to="/take-notes"
          className="bg-gray-800 text-white p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition transform hover:scale-105">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold">Tee Muistiinpanoja</h2>
        </Link>

        {/* View All Notes */}
        <Link
          to="/all-notes"
          className="bg-gray-800 text-white p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition transform hover:scale-105">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-2xl font-bold">Muistiinpanot</h2>
        </Link>

        {/* Add Courses */}
        <Link
          to="/add-course"
          className="bg-gray-800 text-white p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition transform hover:scale-105">
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold">Lisää Kurssi</h2>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
