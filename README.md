# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Task Manager Web App
A responsive, role-based Task Management Web App built using React.js, Material UI (MUI), and FullCalendar.

Designed as part of a UI Developer Assignment, this app allows:

Users to create and submit tasks with images

Admins to review, approve/reject tasks

Everyone to view tasks in a calendar

Live progress tracking of tasks

🚀 Features
👥 User Roles
User

Can log in and submit tasks

Can upload images to each task

Can view personal task history and calendar

Admin

Can view all tasks submitted

Can approve, reject, or delete any task

Can comment while approving/rejecting

📋 Task Management
Title, description, progress percentage, deadline

Upload one or more images per task

View progress bar per task

Submit for approval

🧑‍💼 Profile Management
Each user has a profile with:

Full name

Mobile number

Profile photo

Role (not editable)

Editable from the Profile page

🗓️ Calendar View (FullCalendar)
Shows tasks color-coded by status:

🟢 Approved = Green

🔴 Rejected = Red

🟠 Pending = Orange

Admins see all users' tasks

Users see only their own tasks

🌟 Bonus Features
Light/Dark mode toggle (in-progress)

Toast notifications (optional)

Fully responsive design

Vite-powered fast build system

🧠 Tech Stack
Layer	Technology
Frontend	React.js (via Vite)
UI Components	Material UI (MUI v5)
Calendar	FullCalendar (React Plugin)
Routing	React Router DOM
State Mgmt	React Context API
File Upload	Native input, Image Preview
Dev Server	Vite
Deployment	Vercel (or localhost:5173)
📁 Folder Structure
bash
Copy
Edit
src/
│
├── components/          # Shared UI components (e.g. Sidebar)
├── context/             # UserContext for global user data
├── data/                # In-memory task storage
├── pages/               # Route-level pages (Dashboard, Profile, etc.)
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── TaskForm.jsx
│   ├── CalendarPage.jsx
│   └── AdminPanel.jsx
├── App.jsx              # App Router
├── main.jsx             # Entry point
📦 Installation & Setup
🔧 Prerequisites
Node.js installed

Git installed

🛠 Installation
bash
Copy
Edit
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
npm install
🚀 Start Development Server
bash
Copy
Edit
npm run dev
App runs at http://localhost:5173

🧪 Usage Instructions
Start the app

You'll see a Login Page

Enter your name, mobile number, and choose role: User or Admin

As User:

Go to Create Task

Fill in task details, upload image(s), submit

See tasks on Dashboard or Calendar

As Admin:

Log in with role = Admin

Visit Admin Panel from sidebar

Approve, Reject or Delete submitted tasks

View them on Dashboard/Calendar

🌍 Deployment
Deployed live using Vercel:

👉 Live Link: https://your-vercel-app.vercel.app
(Add once deployed)

🔧 To Deploy:
Push your repo to GitHub

Go to https://vercel.com

Click New Project

Import your GitHub repo

It automatically detects Vite → Deploy!

🔍 Known Issues / Improvements
Task storage is currently in-memory only (resets on refresh)

No user authentication (no real login/signup yet)

Role switching requires re-login

Toasts and dark/light toggle to be added soon

💡 Future Enhancements
Firebase or MongoDB for backend

Login & Signup with authentication

Persistent task storage

Real-time notifications

Mobile-first UI polish

🙏 Thanks
Thanks for reviewing my submission. I’m passionate about building clean, functional UIs using modern technologies like React, MUI, and Vite.
This was a great assignment to showcase my frontend skills!

If you have any questions or feedback, feel free to connect with me.






