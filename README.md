# 🚀 Yuvraj Singh Sisodiya — MERN Stack Portfolio

A full-stack personal portfolio built with **MongoDB, Express.js, React.js, and Node.js**.

---

## 📁 Project Structure

```
portfolio/
├── client/                     ← React frontend
│   ├── public/index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.js        Sticky nav with active section highlighting
│       │   ├── Hero.js          Animated typewriter hero section
│       │   ├── About.js         Personal intro, academics, qualities
│       │   ├── Skills.js        Animated skill bars (4 categories)
│       │   ├── Projects.js      Project cards with hover effects
│       │   ├── Education.js     Education timeline cards
│       │   ├── Certifications.js  Certificate grid
│       │   ├── Achievements.js  Achievement cards
│       │   ├── Extracurricular.js  Activity cards
│       │   ├── ResumeSection.js   PDF download section
│       │   ├── Contact.js       Contact form + links (saves to DB + email)
│       │   ├── Footer.js        Footer
│       │   └── CursorGlow.js   Cursor glow effect
│       ├── pages/
│       │   ├── Portfolio.js     Main page assembling all sections
│       │   └── PortfolioContext.js  Global data fetching context
│       ├── styles/global.css    CSS variables, shared styles
│       ├── App.js
│       └── index.js
│
├── server/                     ← Node.js + Express backend
│   ├── controllers/
│   │   ├── portfolioController.js  Serves & seeds portfolio data
│   │   └── contactController.js    Saves messages + sends email
│   ├── models/
│   │   ├── Portfolio.js        Mongoose schema — all portfolio data
│   │   └── Contact.js          Mongoose schema — contact messages
│   ├── routes/
│   │   ├── portfolio.js        GET /api/portfolio, POST /api/portfolio/seed
│   │   └── contact.js          POST /api/contact, GET /api/contact
│   ├── public/resume/          ← PUT YOUR PDF HERE
│   ├── index.js                Express app entry point
│   └── .env                    Environment variables
│
├── package.json                Runs both servers concurrently
└── README.md
```

---

## ⚡ Quick Start

### 1. Install all dependencies
```bash
npm run install-all
```

### 2. Configure environment — edit server/.env
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/yuvraj_portfolio
EMAIL_USER=yuvraj@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
```

### 3. Add resume PDF
```
server/public/resume/Yuvraj_Singh_Sisodiya_Resume_10.pdf
```

### 4. Run development servers
```bash
npm run dev
```
Frontend → http://localhost:3000
Backend  → http://localhost:5000

---

## 🌐 API Endpoints

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | /api/portfolio         | Fetch all portfolio data             |
| POST   | /api/portfolio/seed    | Reset & reseed portfolio data        |
| POST   | /api/contact           | Send contact message (rate-limited)  |
| GET    | /api/contact           | View all received messages           |
| GET    | /api/health            | Server health check                  |
| GET    | /resume/:filename      | Serve/download resume PDF            |

---

## 🛠️ Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Frontend   | React.js 18, Context API, Axios         |
| Backend    | Node.js, Express.js                     |
| Database   | MongoDB + Mongoose ODM                  |
| Email      | Nodemailer (Gmail SMTP)                 |
| Security   | express-rate-limit, CORS                |
| Dev Tools  | Concurrently, Nodemon                   |

---

## ☁️ Deployment

### MongoDB Atlas
```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/yuvraj_portfolio
```

### Frontend → Vercel
```bash
cd client && npm run build
```
Upload the build/ folder to Vercel.

### Backend → Render or Railway
- Root: server/
- Start command: node index.js
- Add all .env variables in dashboard

---

## ✉️ Gmail App Password
1. Google Account → Security → 2-Step Verification → App Passwords
2. Generate for "Mail"
3. Use as EMAIL_PASS in .env

---

Built with love by Yuvraj Singh Sisodiya
