import React, { useContext } from "react";
import { LoginContext } from "./ContextApi/LoginContext";

const Dashboard = () => {
  const { name } = useContext(LoginContext);
  return <div>Dashboard {name}</div>;
};

export default Dashboard;
