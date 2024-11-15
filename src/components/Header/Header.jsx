import { Link } from "react-router-dom";
import img1 from "../../assets/climate.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-green-600 text-white shadow-lg">
      {/* Logo Section */}
      <div className="logo flex items-center space-x-2">
        <img
          src={img1}
          alt="Climate Change Logo"
          className="w-16 h-16 rounded-full border-4 border-white shadow-md"
        />
        <h1 className="text-xl font-bold">Climate Action</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-green-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/story/"
              className="hover:text-green-300 transition duration-300"
            >
              Content
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
