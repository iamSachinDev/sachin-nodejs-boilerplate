# 🚀 express-mongo-ecs-boilerplate

[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)](https://www.mongodb.com/)
[![Code Style: Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com)
[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://www.docker.com/)
[![AWS ECS](https://img.shields.io/badge/AWS%20ECS-ready-orange.svg)](https://aws.amazon.com/ecs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A **scalable Node.js boilerplate** built with **Express**, **MongoDB**, **Pino Logger**, **Swagger**, and **Docker** —  
ready for **AWS ECS** deployment (`ap-south-1`).

---

## 📘 Table of Contents
- [🧱 Overview](#-overview)
- [⚙️ Tech Stack](#️-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [📘 API Endpoints](#-api-endpoints)
- [🧪 Linting & Git Hooks](#-linting--git-hooks)
- [🐳 Docker Setup](#-docker-setup)
- [☁️ AWS ECS Deployment](#️-aws-ecs-deployment)
- [📦 NPM Scripts](#-npm-scripts)
- [💡 Contributing](#-contributing)
- [🧾 License](#-license)
- [✨ Author](#-author)

---

## 🧱 Overview

This is a **production-grade Node.js backend starter** featuring:

- ⚡ **Express 5** — lightweight web framework  
- 🧠 **MongoDB (Mongoose)** — schema-based models  
- 🪵 **Pino Logger** — high-performance structured logging  
- 📘 **Swagger Docs** — self-documented REST APIs  
- 🧹 **StandardJS** — enforced linting and formatting  
- 🐳 **Docker + Compose** — full local containerization  
- ☁️ **AWS ECS Templates** — ready for deployment (Fargate, ap-south-1)  

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Runtime | Node.js (v24+) |
| Framework | Express 5 |
| Database | MongoDB (Mongoose) |
| Logger | Pino + Pretty |
| Linter | StandardJS |
| API Docs | Swagger (`swagger-jsdoc`, `swagger-ui-express`) |
| Deployment | Docker / AWS ECS |

---

## 📂 Folder Structure

```
express-mongo-ecs-boilerplate/
├── src/
│   ├── apis/              # Feature modules (User, etc.)
│   ├── config/            # Env & DB setup
│   ├── docs/              # Swagger setup
│   ├── helpers/           # Error handling & responses
│   ├── lib/               # Logger, middlewares
│   ├── routes/            # Route definitions
│   ├── App.js             # Express app initialization
│   └── Server.js          # Entry point
├── ecs/                   # AWS ECS templates
├── docker-compose.yml     # Local Docker setup
├── Dockerfile             # Production image
├── .husky/                # Git pre-commit hooks
├── .env.example           # Example environment file
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/express-mongo-ecs-boilerplate.git
cd express-mongo-ecs-boilerplate
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment
Copy `.env.example` to `.env` and update values:
```bash
MONGO_URI=mongodb://localhost:27017/myProject
PORT=3000
NODE_ENV=development
```

### 4️⃣ Run MongoDB
**Option 1: Local Mongo (Homebrew)**
```bash
brew services start mongodb-community@7.0
```

**Option 2: Docker**
```bash
docker compose up --build
```

### 5️⃣ Start the server
```bash
npm run dev
```

✅ Server: [http://localhost:3000](http://localhost:3000)  
📘 Swagger Docs: [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 📘 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/api/users` | Fetch all users |
| `POST` | `/api/users` | Create a new user |

Example:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Sachin Talekar", "email": "sachin@example.com"}'
```

---

## 🧪 Linting & Git Hooks

This repo uses **StandardJS** with **Husky** + **lint-staged** to auto-lint every commit.

Run manually:
```bash
npm run lint
npm run lint:fix
```

Husky runs automatically before each commit:
```bash
git add .
git commit -m "fix: linted files"
```

---

## 🐳 Docker Setup

Run API + MongoDB locally:
```bash
docker compose up --build
```

Access:
- API → http://localhost:3000  
- MongoDB → mongodb://localhost:27017/myProject  

---

## ☁️ AWS ECS Deployment

The `ecs/` directory includes templates for **AWS ECS Fargate** deployment (`ap-south-1`).

### Register Task Definition
```bash
aws ecs register-task-definition \
  --cli-input-json file://ecs/task-definition.json \
  --region ap-south-1
```

### Update Service
```bash
aws ecs update-service \
  --cluster myProject-cluster \
  --service myProject-service \
  --region ap-south-1 \
  --force-new-deployment
```

✅ Logs are automatically streamed to **AWS CloudWatch**.

---

## 📦 NPM Scripts

| Script | Description |
|---------|-------------|
| `npm run dev` | Start in development (nodemon) |
| `npm start` | Run production build |
| `npm run lint` | Check for lint issues |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run prepare` | Setup Husky Git hooks |

---

## 💡 Contributing

1. Fork this repo  
2. Create your branch (`git checkout -b feat/awesome-feature`)  
3. Commit changes (`git commit -m 'feat: add awesome feature'`)  
4. Push branch (`git push origin feat/awesome-feature`)  
5. Create a Pull Request 🚀  

---

## 🧾 License

This project is licensed under the **MIT License**.

---

## ✨ Author

**👨‍💻 Sachin Talekar**  
📧 [sachin.talekar08@gmail.com](mailto:sachin.talekar08@gmail.com)  
🌍 [GitHub: iamSachinDev](https://github.com/iamSachinDev)

> Built with ❤️ and clean code — scalable, testable, and production-ready.
