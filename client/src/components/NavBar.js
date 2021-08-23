import { Link } from "react-router-dom";

const NavBar = ({ currentPage }) => {
  return (
    <nav className="flex flex-wrap items-center  justify-between p-5 bg-black shadow-xl">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-3xl text-white">
          TEKJUMP.IO
        </Link>
      </div>

      <div className=" flex-col block md:inline space-x-5 md:flex-row w-full md:w-auto text-bold mt-5 md:mt-0 border-t-2 md:border-none">
        <Link
          to="/about"
          className={`${
            currentPage === "/about"
              ? " text-xl md:rounded bg-gradient-to-r hover:from-green-500 hover:to-blue-400 from-purple-500 to-red-600 text-black md:p-2" //  from-green-500 to-blue-400
              : "text-xl md:rounded bg-gradient-to-r from-green-500 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-600 text-black md:p-2"
          }`}
        >
          About Us
        </Link>
        <Link
          to="/program"
          className={`${
            currentPage === "/program"
              ? " text-xl md:rounded bg-gradient-to-r hover:from-green-500 hover:to-blue-400 from-purple-500 to-red-600 text-black md:p-2" //  from-green-500 to-blue-400
              : "text-xl md:rounded bg-gradient-to-r from-green-500 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-600 text-black md:p-2"
          }`}
        >
          Program
        </Link>
      </div>
      <Link
        to="/register"
        className={`${
          currentPage === "/register"
            ? " text-xl md:rounded bg-gradient-to-r hover:from-green-500 hover:to-blue-400 from-purple-500 to-red-600 text-black md:p-2" //  from-green-500 to-blue-400
            : "text-xl md:rounded bg-gradient-to-r from-green-500 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-600 text-black md:p-2"
        }`}
      >
        Register
      </Link>
    </nav>
  );
};

export default NavBar;
