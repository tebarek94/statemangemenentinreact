import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Username:</strong> {user}
        </p>
        {/* Add more profile fields here if needed */}
      </div>
    </div>
  );
}

export default Profile;
