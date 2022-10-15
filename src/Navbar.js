import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const history = useHistory()
  return (
    <nav className="navbar">
      <h1 role="button" onClick={() => history.push("/")}>React Weather App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
