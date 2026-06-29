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
1. Clone the repository
2. Install dependencies
3. Run backend & frontend

Backend setup
cd backend
npm install
npm run dev

create .env(IMP)

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
<img width="1906" height="1006" alt="Screenshot 2026-06-29 094302" src="https://github.com/user-attachments/assets/72bd3590-853b-480a-a82b-730e9c449b1f" />
<img width="1920" height="1020" alt="Screenshot 2026-06-29 100438" src="https://github.com/user-attachments/assets/fb8b9f42-c118-4fbe-b864-6da4e4db7aa6" />
<img width="1906" height="1006" alt="Screenshot 2026-06-29 094320" src="https://github.com/user-attachments/assets/6c8bb08f-d2ad-4264-b736-6a502655f665" />
<img width="1906" height="1006" alt="Screenshot 2026-06-29 094327" src="https://github.com/user-attachments/assets/ce397201-3cb5-4974-a7bb-abaa20c6770b" />
<img width="1906" height="1006" alt="Screenshot 2026-06-29 094340" src="https://github.com/user-attachments/assets/037996da-cf5f-4449-97d9-2ac9b0f6e8be" />
<img width="1906" height="1006" alt="Screenshot 2026-06-29 094346" src="https://github.com/user-attachments/assets/7e07a35b-3da5-4740-86c5-c4843a62854e" />

