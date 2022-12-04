import React, { useState, useContext } from "react";
import "../App.css";
import { LoginContext } from "../ContextApi/LoginContext";

const Login = () => {
  const { setName, setDashboard } = useContext(LoginContext);
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>UserName</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter UserName.."
        />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Enter password.." required />
        <br></br>
        <input type="submit" value="Login" onClick={() => setDashboard(true)} />
      </form>
    </div>
  );
};

export default Login;
