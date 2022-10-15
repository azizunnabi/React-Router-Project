import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-50 h-[70px] flex justify-center items-center">
      <div className="max-w-screen-lg w-full ">
        <Link to="/" className="capitalize font-medium ml-2.5">
          home
        </Link>
        <Link to="/register" className="capitalize font-medium ml-2.5">
          register
        </Link>
        <Link to="/login" className="capitalize font-medium ml-2.5">
          login
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
