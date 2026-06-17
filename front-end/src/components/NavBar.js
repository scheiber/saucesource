import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const NavBar = ({ theme, toggleTheme }) => (
  <nav className="nav header">
    <NavLink to="/">
      <div>
        <img
          className="nav-logo"
          alt="SauceSource logo"
          src={require("../images/navlogo.png")}
        />
      </div>
    </NavLink>
    <NavLink end to="/sauces" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}>
      All Sauces
    </NavLink>
    <NavLink to="/sauces/new" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}>
      Add a Sauce
    </NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}>
      About
    </NavLink>
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  </nav>
);

export default NavBar;
