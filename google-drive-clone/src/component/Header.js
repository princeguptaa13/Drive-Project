import React from "react";
import "./Header.css";

function Header({ onSearch, user, onLogin, onLogout }) {
  return (
    <div className="header">
      <div className="header-left">
        <span className="logo">🩸 Prince Drive</span>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Search in Drive..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="header-right">
        {user ? (
          <div className="user-info">
            <img src={user.picture} alt="profile" />
            <span>{user.name}</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <button className="login-btn" onClick={onLogin}>
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
