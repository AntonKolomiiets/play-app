import "./Nav.css";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <nav className="Nav">
      <Link to="/home" className="title">
        Home
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="Link2">Task</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
