import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Navbar</p>
      <div>
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
