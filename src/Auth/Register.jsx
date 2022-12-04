import React, { useState } from "react";
import "../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <label>Name</label>
        <br></br>
        <input type="text" placeholder="Enter Name.." />
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="email" placeholder="Enter Email.." />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Enter password.." required />
        <br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
