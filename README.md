
# Task Management Application

A simple task management application built with React, Redux, Fastify, and MongoDB. This application allows users to create, view, update, and delete tasks. It includes basic session management using Redux and authentication for user login.


## Technology Used

- #### Frontend:  React, Redux, Material-UI
- #### Backend:  Node.js, Fastify
- #### Database:  MongoDB

## Getting Started
- ### Prerequisites

- Node.js (>= 14.0.0)
- MongoDB
- Yarn or npm


## Setup

- Clone the Repository

```bash
  git clone https://github.com/AmitDev15/task-manager.git
  cd Task Manager
```

- ### Setup the backend
  ### 1. Navigate to the backend directory:
  ```bash
    cd backend
  ```
  ### 2. Install backend dependencies:
  ```bash
    npm install
  ```
  ### 3. Start the Fastify server:
  ```bash
    node server.js
  ```
- ### Setup the frontend
  ### 1. Navigate to the frontend directory:
  ```bash
    cd frontend
  ```
  ### 2. Install frontend dependencies:
  ```bash
    npm install
  ```
  ### 3. Start the React application::
  ```bash
    npm run dev
  ```
  The app will be available at http://localhost:5173 by default.
### Usage
  #### 1. Login: Use the following credentials to log in for testing purposes:
  - Email: test@example.com
  - Password: password123
  #### 2. Task Management:
  - Add Task: Use the form to add new tasks.
  - Update Task: Click the "Edit" button next to a task to update it.
  - Delete Task: Tasks can be deleted using the "Delete" button in the task list.
  #### 3. Logout: Click the "Logout" button to end the session.
### Folder Structure
  #### Frontend (frontend)
  - src/components/: Contains React components (AddTask, TaskList, UpdateTask, Login, Logout).
  - src/redux/: Contains Redux slices and store configuration (authSlice, taskSlice, store.js).
  - src/App.jsx: Main application component.
  - src/main.jsx: Entry point of the React application.
  #### Backend (backend)
  - src/routes/: Contains route handlers for task CRUD operations.
  - src/models/: Contains Mongoose models for tasks.
  - src/index.js: Entry point of the Fastify server.
### Deployment
  #### For deploying the application:
  - Frontend: Build the React application using npm run build and deploy the static files to a hosting service.
  - Backend: Deploy the Fastify server to a cloud provider or hosting service that supports Node.js applications.
### Contributing
  - Fork the repository.
  - Create a new branch for your feature or fix.
  - Submit a pull request with a description of your changes.
