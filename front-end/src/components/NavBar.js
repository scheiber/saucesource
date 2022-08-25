import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="nav">
    <Link to="/">
      <div>
        <img
          className="nav-logo"
          alt="Home"
          title="Get lost in the sauce."
          src={require("../images/navlogo.png")}
        />
      </div>
    </Link>
    <Link to="/about">
      <div className="nav-link">About</div>
    </Link>
    <Link to="/sauces">
      <div className="nav-link">All Sauces</div>
    </Link>
    <Link to="/sauces/new">
      <div className="nav-link">Add a Sauce</div>
    </Link>
  </nav>
);

export default NavBar;
