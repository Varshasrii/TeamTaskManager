# TeamTaskManager
This project is a Full Stack MERN Team Task Manager application that allows users to create projects, assign tasks, and track progress with role-based access control. The application includes authentication, dashboard management, task tracking, and project management features.

# Project Structure
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

# How to Run
## Clone the repository

```bash
git clone https://github.com/Varshasrii/TeamTaskManager.git
cd TeamTaskManager

## Backend Setup
Move into the Backend folder, install all required dependencies, and start the backend server.

```bash
cd Backend
npm install
npm start

## Frontend setup

```bash
cd frontend
npm install
npm start

##Application Access
After running both frontend and backend servers, the application can be accessed through the local development server or the deployed live application URL.

##Local Development URL
http://localhost:3000/
##Live Application URL
https://team-task-manager-3m0ctcz4p-varshasri-s-projects.vercel.app/

## Features
- User Signup & Login
- JWT Authentication
- Role-Based Access Control
- Project Management
- Task Creation & Tracking
- Dashboard Management

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

#Deployment
The frontend of the application is deployed using Vercel, while the backend server is deployed using Railway. The project is fully connected with MongoDB Atlas for cloud database storage.
