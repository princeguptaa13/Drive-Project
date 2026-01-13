
# 🚀 Drive Project (Google Drive Clone)

A full-stack **Google Drive–like cloud storage system** built using **Spring Boot (Backend)** and **React (Frontend)**.  
This project allows users to upload, download, delete, and manage files & folders, with **metadata stored in SQL** and **actual files stored on local disk**.

> ⚡ This is not a basic CRUD app — it is a real file storage system with proper backend architecture.

---

## 🧠 Features

✅ Upload files  
✅ Download files  
✅ Delete files  
✅ List all files  
✅ Folder support (parentFolderId)  
✅ SQL database for metadata  
✅ Local disk storage for actual files  
✅ React-based UI (Google Drive style)  
✅ REST API based architecture  

---

## 🏗️ Tech Stack

### 🔹 Backend
- Java + Spring Boot
- Spring Data JPA
- MySQL
- REST APIs
- Multipart File Upload
- Local File System Storage

### 🔹 Frontend
- React
- Axios
- CSS

---

## 📁 Project Structure

```

Drive/
├── Drive-BE/              # Spring Boot Backend
├── google-drive-clone/    # React Frontend
└── uploads/               # Local file storage (ignored by git)

```

## ⚙️ How It Works

- Files are stored in:
```

/uploads/ folder (local disk)

```
- File metadata (name, path, size, type, folder, etc) is stored in:
```

MySQL database

````
- Backend exposes REST APIs.
- Frontend consumes APIs using Axios.

---

## 🚀 How To Run Locally

### 1️⃣ Backend (Spring Boot)

- Open `Drive-BE` in IntelliJ
- Configure `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/drive_db
spring.datasource.username=root
spring.datasource.password=your_password
````

* Run the Spring Boot application

Backend runs on:

```
http://localhost:8080
```

---

### 2️⃣ Frontend (React)

```bash
cd google-drive-clone
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint                 | Description   |
| ------ | ------------------------ | ------------- |
| POST   | /api/files/upload        | Upload file   |
| GET    | /api/files/list          | List files    |
| GET    | /api/files/download/{id} | Download file |
| DELETE | /api/files/delete/{id}   | Delete file   |

---

## 🔐 Important Design Decision

> ❗ Files are NOT stored in database.
> ✅ Only metadata is stored in SQL.
> ✅ Actual files are stored on disk.

This is exactly how real systems work (Google Drive, Dropbox, etc).


## 🌱 Future Improvements

* Trash / Recycle bin
* File versioning
* Cloud storage (AWS S3 / GCP)
* Search & filters

## 👨‍💻 Author

**Prince Gupta**
Backend & Full Stack Developer
Built with ❤️ to learn real-world system design.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub 😄
