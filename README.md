JobCon – Full Stack Job Portal (MERN)

JobCon is a full-stack job portal built using the MERN stack. 
It allows users to browse jobs, apply for positions, and manage applications with secure authentication and role-based access.

🚀 Features

🔐 Authentication
User registration & login
JWT-based authentication
httpOnly cookie session management
Protected routes

👤 User Functionality
Browse available jobs
Filter jobs by role, location, type
Apply for jobs (login required)
Contact form with validation

🛠️ Admin Features
View all applications (protected API)
Secure middleware-based authorization


💻Tech Stack
Frontend: React, React Router, CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Auth: JWT + Cookies
Deployment: Vercel (Frontend), Render (Backend)

🌐 Live Demo
Frontend: https://lnkd.in/dbEiHJcj
Backend API: https://jobcon-gofl.onrender.com

⚙️ Installation (Local Setup)
git clone https://github.com/Yourusername/jobcon.git

Backend setup
cd backend
npm install
npm run dev

create .env(IMP)
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

Frontend setup
cd frontend
npm install
npm run dev

🔐 API Routes
POST /api/auth/register – Register user
POST /api/auth/login – Login user
GET /api/auth/me – Get logged-in user
POST /api/jobs/apply – Apply for job (protected)
GET /api/application/all – Admin only

🧠 Key Learnings
MERN full-stack architecture
JWT authentication flow
Protected routes with middleware
Deployment with separate frontend/backend
Handling CORS & cookie-based auth


🚀 Future Improvements
Recruiter dashboard
Email notifications
Resume upload system
Advanced admin analytics
