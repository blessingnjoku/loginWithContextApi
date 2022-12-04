import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./Dashboard";
import Main from "./Main";
import { LoginContext } from "../src/ContextApi/LoginContext";

function App() {
  const [dashboard, setDashboard] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="">
      <LoginContext.Provider value={{ name, setName, setDashboard }}>
        {dashboard ? <Dashboard /> : <Login />}
      </LoginContext.Provider>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
