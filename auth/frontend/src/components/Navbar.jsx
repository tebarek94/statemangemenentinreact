import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2 className="logo">My Dashboard</h2>

      <div className="nav-right">
        <Link to="/profile" className="profile-link">
          <FaUserCircle size={25} />
          <span className="user">{user || "User"}</span>
        </Link>

        <button className="logout-btn" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
