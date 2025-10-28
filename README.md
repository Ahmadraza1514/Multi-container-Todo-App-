# 🐳 Multi-Container Todo Application

A full-stack todo application built with React, Node.js, MongoDB and containerized using Docker with complete CI/CD pipeline.

## 📋 Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Docker Services](#docker-services)
- [CI/CD Pipeline](#cicd-pipeline)
- [Development](#development)

## ✨ Features

- ✅ Add and view todos
- 🐳 Docker containerization
- 🔄 Multi-container architecture
- 🗄️ MongoDB database
- ⚡ React frontend
- 🛠️ Node.js backend
- 🌐 REST API
- 🔁 CI/CD with GitHub Actions
- 🚀 Automated testing & deployment

## 🏗️ Architecture
👤 User Browser (localhost:3000)
↓
🖥️ Frontend Container (React + Nginx)
↓
⚙️ Backend Container (Node.js + Express)
↓
🗄️ MongoDB Container (Database)

text

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**DevOps & CI/CD:**
- Docker
- Docker Compose
- Nginx
- GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Docker
- Docker Compose

### Installation & Running

1. **Clone the project**
```bash
git clone <your-repo-url>
cd Multi-container-Todo-App-Project
Build and run containers

bash
docker-compose up --build
Access the application

Frontend: http://localhost:3000

Backend API: http://localhost:5000

Health Check: http://localhost:5000/health

Stop the application

bash
docker-compose down
📡 API Documentation
Base URL
text
http://localhost:5000
Endpoints
Method	Endpoint	Description
GET	/	API information
GET	/health	Health check
GET	/todos	Get all todos
POST	/todos	Create new todo
Example Usage
Create a todo:

bash
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Docker Compose"}'
Get all todos:

bash
curl http://localhost:5000/todos
📁 Project Structure
text
multi-todo-app/
├── backend/
│   ├── Dockerfile          # Backend container config
│   ├── package.json        # Backend dependencies
│   └── server.js          # Express server
├── frontend/
│   ├── Dockerfile          # Frontend container config
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Build configuration
│   ├── index.html          # HTML template
│   └── src/
│       ├── main.jsx        # React entry
│       └── App.jsx         # Main component
├── .github/workflows/      # CI/CD workflows
│   └── ci-pipeline.yml     # GitHub Actions CI pipeline
└── docker-compose.yml      # Multi-container setup
🐳 Docker Services
Service	Port	Description
frontend	3000	React application
backend	5000	Node.js API
mongodb	27017	MongoDB database
Service Details
Frontend:

Built with multi-stage Dockerfile

React app built with Vite

Served by Nginx

Port: 3000 (host) → 80 (container)

Backend:

Node.js runtime

Express.js framework

MongoDB integration

Port: 5000 (host) → 5000 (container)

Database:

MongoDB official image

Data persistence with volumes

Port: 27017 (host) → 27017 (container)

🔁 CI/CD Pipeline
This project includes a complete CI/CD pipeline using GitHub Actions:

CI Pipeline Features:
✅ Automatic testing on every code push

✅ Docker image building

✅ Service health checks

✅ Integration testing

Pipeline Workflow:
text
Code Push → GitHub Actions → Build & Test → Results
View CI Results:
Go to your GitHub repository

Click on "Actions" tab

See the pipeline execution status

Manual Trigger:
The pipeline automatically runs on:

Push to main branch

Pull requests to main branch

🔧 Development
Run Services Individually
Backend:

bash
cd backend
npm install
npm start
Frontend:

bash
cd frontend
npm install
npm run dev
Docker Commands
View running containers:

bash
docker ps
View logs:

bash
docker-compose logs
docker-compose logs frontend
docker-compose logs backend
Rebuild specific service:

bash
docker-compose build frontend
⚙️ Environment Variables
Backend:

env
DB_HOST=mongodb
DB_PORT=27017
DB_NAME=todoapp
PORT=5000
Frontend:

env
REACT_APP_API_URL=http://localhost:5000
🗃️ Database Schema
javascript
{
  title: String,
  completed: Boolean,
  createdAt: Date
}
🔄 Workflow
User adds todo in frontend

Frontend sends POST request to backend

Backend saves data to MongoDB

Backend returns response

Frontend updates UI

🐛 Troubleshooting
Common Issues
Port already in use:

bash
# Find process using port
netstat -ano | findstr :3000
# Kill process
taskkill /PID <PID> /F
Docker build issues:

bash
# Clean build
docker-compose build --no-cache
Container conflicts:

bash
# Stop and remove all containers
docker-compose down
docker system prune -f
Debugging
Check container status:

bash
docker-compose ps
View container logs:

bash
docker logs todo_frontend
docker logs todo_backend
Access container shell:

bash
docker exec -it todo_frontend sh
📊 Monitoring
Check resource usage:

bash
docker stats
Service status:

bash
docker-compose ps
🎯 Learning Outcomes
This project demonstrates:

Multi-container Docker applications

Docker Compose orchestration

React + Node.js full-stack development

MongoDB integration

Container networking

Microservices basics

CI/CD with GitHub Actions

Automated testing pipelines

👨‍💻 Developer
Muhammad Ahmed
DevOps Learning Journey

