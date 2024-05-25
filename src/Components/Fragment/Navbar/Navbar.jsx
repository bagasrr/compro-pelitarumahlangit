// import Link from "../../Element/Link/Link";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggle, setToggle] = useState("burger-toggle");
  const navMenu = () => {
    active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu");
    toggle === "burger-toggle" ? setToggle("burger-toggle change") : setToggle("burger-toggle");
  };
  return (
    <div className="navbar">
      <a href="/" className="logo">
        <img src="image/Logo/PRL_logonamagede.svg" alt="Logo PT Pelita Rumah Langit" />
      </a>
      <div className={active}>
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
      <div onClick={navMenu} className={toggle}>
        <div className="toggle toggle1"></div>
        <div className="toggle toggle2"></div>
        <div className="toggle toggle3"></div>
      </div>
    </div>
  );
};
export default Navbar;

// const toggleStyle = () => {
//   const elemen = document.getElementsByClassName("burger-toggle");
//   elemen.classList.toggle("change");
// };
