import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../assets/styles/dashboard.css";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <Navbar onLogout={handleLogout} />

      <div className="dashboard-body">
        <Sidebar />

        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard 🎉</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
