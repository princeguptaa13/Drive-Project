import React, { useRef } from "react";
import "./Sidebar.css";

function Sidebar({ onFileSelect }) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="sidebar">
      <button className="new-btn" onClick={handleClick}>
        ⬆ Upload
      </button>

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />

      <ul>
        <li className="active">📁 My Drive</li>
        <li>🕒 Recent</li>
        <li>⭐ Starred</li>
        <li>🗑️ Trash</li>
        <li>💾 Storage</li>
      </ul>
    </div>
  );
}

export default Sidebar;
