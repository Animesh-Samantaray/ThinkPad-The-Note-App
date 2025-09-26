# 📝 MERN Notes App

A simple **MERN (MongoDB, Express, React, Node.js)** application to create, read, update, and delete notes.  
Frontend built with **React** and **TailwindCSS**. Backend with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

### Backend
- 🆕 Create new notes (title + content)  
- 📄 Read all notes or a single note  
- ✏️ Update and delete notes  
- ⏱ Auto timestamps (`createdAt`, `updatedAt`)  
- ⚠️ Proper error handling with HTTP status codes  

### Frontend
- 🎨 Responsive UI with **TailwindCSS**  
- 🌙 Dark-themed interface  
- 📝 Create, edit, delete notes  
- 📦 View all notes in a grid  
- 📱 Mobile-friendly layout  

---

## 🛠 Tech Stack

| Layer       | Technology                       |
|------------|---------------------------------|
| Frontend   | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white), TailwindCSS, React Router, Axios, react-hot-toast |
| Backend    | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white), Express.js, MongoDB (Mongoose) |
| Environment | dotenv                          |
| Version Control | Git & GitHub                  |

---

## 🔗 API Endpoints

| Endpoint           | Method | Description                       |
|------------------|--------|-----------------------------------|
| `/api/notes`      | GET    | Fetch all notes                   |
| `/api/notes`      | POST   | Create a new note (title + content) |
| `/api/notes/:id`  | GET    | Fetch a single note by ID         |
| `/api/notes/:id`  | PUT    | Update a note by ID               |
| `/api/notes/:id`  | DELETE | Delete a note by ID               |

---

## ⚡ Sample Request & Response

**GET /api/notes/:id**

```json
{
  "success": true,
  "data": {
    "_id": "68d6a3c4af324d6746dc1b65",
    "title": "Sample Note",
    "content": "This is a sample note content.",
    "createdAt": "2025-09-26T14:31:32.644Z",
    "updatedAt": "2025-09-26T14:31:32.644Z",
    "__v": 0
  }
}
