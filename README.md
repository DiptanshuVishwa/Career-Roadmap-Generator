# Career Roadmap Generator

An AI-powered full-stack web application that generates personalized career roadmaps based on a user's target role, current skills, and experience level.

## Live Demo

Frontend: https://career-roadmap-generator-mu.vercel.app/

Backend: https://career-roadmap-backend-anlk.onrender.com

## Features

* Generate personalized career roadmaps using Google Gemini AI
* Store generated roadmaps in MongoDB Atlas
* View previously generated roadmaps
* Delete unwanted roadmaps
* Responsive and user-friendly interface
* Full-stack deployment using Vercel and Render

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Google Gemini API

## Project Structure

```
career-roadmap-generator/
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── services/
│
└── backend/
    ├── controllers/
    ├── routes/
    ├── models/
    ├── services/
    ├── middlewares/
    └── config/
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd career-roadmap-generator
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

## API Endpoints

### Generate Roadmap

```http
POST /roadmap/generate
```

### Get All Roadmaps

```http
GET /roadmap
```

### Delete Roadmap

```http
DELETE /roadmap/:id
```

## Author

Diptanshu Vishwa
