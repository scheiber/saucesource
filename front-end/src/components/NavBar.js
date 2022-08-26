import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="nav header">
    <Link to="/">
      <div>
        <img
          className="nav-logo"
          alt="SauceSource logo"
          src={require("../images/navlogo.png")}
        />
      </div>
    </Link>
    <Link to="/sauces">
      <div className="nav-link">All Sauces</div>
    </Link>
    <Link to="/sauces/new">
      <div className="nav-link">Add a Sauce</div>
    </Link>
    <Link to="/about">
      <div className="nav-link">About</div>
    </Link>
  </nav>
);

export default NavBar;
