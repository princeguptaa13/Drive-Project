import React, { useState, useEffect } from "react";
import Sidebar from "../src/component/Sidebar";
import Header from "../src/component/Header";
import FileCard from "../src/component/FileCard";
import "./DriveApp.css";
import axios from "axios";

// VERY IMPORTANT: allow cookies for OAuth session
axios.defaults.withCredentials = true;

function DriveApp() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null); // 👈 ADD USER STATE

  // 🔹 Fetch files
  useEffect(() => {
    fetchFiles();
    fetchUser(); 
  }, []);

  // 🔹 Get logged-in user from backend
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/me");
      setUser(res.data);
    } catch (err) {
      setUser(null);
    }
  };

  const fetchFiles = async () => {
    const res = await axios.get("http://localhost:8080/api/files/list", { withCredentials: true });
    setFiles(res.data);
  };

  // 🔹 Login with Google
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  // 🔹 Logout
  const handleLogout = () => {
    window.location.href = "http://localhost:8080/logout";
  };

  // 🔹 Upload
  const handleUploadFromSidebar = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://localhost:8080/api/files/upload", formData, { withCredentials: true });
    fetchFiles();
  };

  const handleDownload = (id) => {
    window.location.href = `http://localhost:8080/api/files/download/${id}`;
  };

  const handleDelete = async (id, fileName) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete "${fileName}"?`
  );
  if (!confirmed) return;

  await axios.delete(`http://localhost:8080/api/files/delete/${id}`, {
    withCredentials: true
  });

  fetchFiles();
};


  // 🔹 Search filter
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-layout">
      <Sidebar onFileSelect={handleUploadFromSidebar} />

      <div className="content-area">
        <Header
          onSearch={setSearchTerm}
          user={user}
          onLogin={handleGoogleLogin}
          onLogout={handleLogout}
        />

        {filteredFiles.length === 0 ? (
          <div className="empty-state">
            <img src="/default.svg" alt="No Files" style={{ width: "500px" }} />
            <p>
              Drag your files and folders here or use the “New” button to upload
            </p>
          </div>
        ) : (
          <div className="files-grid">
            {filteredFiles.map((file) => (
              <FileCard
                key={file.id}
                file={file}
                onDownload={handleDownload}
                onDelete={() => handleDelete(file.id, file.name)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DriveApp;
