# TeamTaskManager
This project is a Full Stack MERN Team Task Manager application that allows users to create projects, assign tasks, and track progress with role-based access control. The application includes authentication, dashboard management, task tracking, and project management features.

# Project Structure

```text
TeamTaskManager/
├── Backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── Dashboard.js
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

# Features
- User Signup & Login
- JWT Authentication
- Role-Based Access Control
- Project Creation & Management
- Task Assignment & Tracking
- Dashboard with Task Status
- MongoDB Database Integration
- REST API Implementation
- Frontend & Backend Deployment

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

### Frontend
- React.js
- Axios
- React Router DOM

---

# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Frontend
- React.js
- Axios
- React Router DOM

---

# How to Run

## Clone the Repository

```bash
git clone https://github.com/Varshasrii/TeamTaskManager.git
cd TeamTaskManager
```

---

## Backend Setup

Move into the Backend folder and install dependencies.

```bash
cd Backend
npm install
npm start
```

---

## Frontend Setup

Move into the frontend folder and install dependencies.

```bash
cd frontend
npm install
npm start
```

---

# Application Access

## Local Development URL
```text
http://localhost:3000/
```

## Live Application URL
```text
https://team-task-manager-3m0ctcz4p-varshasri-s-projects.vercel.app/
```

---

# Deployment

- Frontend deployed using Vercel
- Backend deployed using Railway
- Database hosted on MongoDB Atlas

---

# GitHub Repository

```text
https://github.com/Varshasrii/TeamTaskManager
```
