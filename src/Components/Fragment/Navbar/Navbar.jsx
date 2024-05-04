// import Link from "../../Element/Link/Link";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        <img src="image/Logo/PRL_logonamagede.svg" alt="Logo PT Pelita Rumah Langit" />
      </a>
      <div className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
