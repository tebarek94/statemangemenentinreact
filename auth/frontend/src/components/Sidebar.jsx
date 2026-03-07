import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUser /> Profile
          </Link>
        </li>

        <li>
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
