import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/mongodb.png";
import Tools10 from "/assets/tools/python.png";
import Tools11 from "/assets/tools/express.png";
import Tools12 from "/assets/tools/restapi.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/ts.png";
import Tools16 from "/assets/tools/vite.png";
import Tools17 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React.js",
    ket: "Frontend Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next.js",
    ket: "React Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node.js",
    ket: "JavaScript Runtime",
    dad: "700",
  },
  { id: 8, gambar: Tools8, nama: "GitHub", ket: "Code Repository", dad: "800" },
  { id: 9, gambar: Tools9, nama: "MongoDB", ket: "Database", dad: "900" },
  {
    id: 10,
    gambar: Tools10,
    nama: "Python",
    ket: "Programming Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Express.js",
    ket: "Backend Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "REST API",
    ket: "API Architecture",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Markup Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "CSS",
    ket: "Style Sheet Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "TypeScript",
    ket: "Programming Language",
    dad: "1500",
  },
  { id: 16, gambar: Tools16, nama: "Vite", ket: "Build Tool", dad: "1600" },
  { id: 17, gambar: Tools17, nama: "MySQL", ket: "Database", dad: "1700" },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Recipe Finder Web App",
    subtitle: "A full-featured recipe finder built with React and Vite...",
    fullDescription:
      "A full-featured Recipe Finder web app built using React and Vite, integrating TheMealDB REST API to serve real-time recipe data. Features dynamic search with loading states, a detailed recipe view with ingredients and step-by-step instructions, and a Favorites system using localStorage for persistent storage. Built with a fully responsive UI using Tailwind CSS, client-side navigation via React Router, and Axios for API integration with graceful error handling.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    sourceCode: "https://github.com/sebinjohn20/Find_Recipe", // ✅ GitHub
    url: "https://find-recipe-lake.vercel.app/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "MERN Auth System",
    subtitle:
      "A full stack authentication system with JWT and OTP verification...",
    fullDescription:
      "A full stack authentication system built on the MERN stack featuring secure user registration, login, and session management. Implements JWT-based authentication with token validation, protected routes, and persistent auth state in React. Includes email OTP verification for account activation and a password reset flow with time-limited tokens. RESTful APIs built with Node.js and Express.js, paired with a responsive Tailwind CSS UI.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    sourceCode: "https://github.com/sebinjohn20/Fullstack-Expense-Tracker", // ✅ GitHub
    url: null,
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Nike Clone – E-Commerce UI",
    subtitle:
      "A pixel-accurate, responsive e-commerce frontend replicating Nike...",
    fullDescription:
      "A pixel-accurate, responsive e-commerce UI replicating Nike's storefront built with React.js and a component-based architecture. Features dynamic product filtering, reusable UI components, and performance-optimized rendering using React hooks. Demonstrates advanced frontend skills in layout precision, state management, and modern JavaScript patterns.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    sourceCode: "https://github.com/sebinjohn20/Nike",
    url: "https://nike-puce-nine.vercel.app/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive portfolio showcasing skills and projects...",
    fullDescription:
      "An interactive web portfolio showcasing professional journey, skills, and projects. Built with React.js and Vite, featuring animated UI components, Aurora background, and smooth scroll animations using AOS. Reflects both technical expertise in modern web development and a clean, modern aesthetic.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    sourceCode: "https://github.com/sebinjohn20", // ✅ GitHub
    url: null,
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Task Management App – Next.js",
    subtitle:
      "A responsive task manager with add, edit, and delete functionality...",
    fullDescription:
      "A modern task management application built using Next.js with a clean and responsive UI. Features include adding new tasks, editing existing tasks, and deleting tasks with real-time updates. Utilizes component-based architecture, efficient state management, and optimized rendering for smooth user experience. Demonstrates strong frontend development skills, CRUD operations, and practical use of Next.js features.",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    sourceCode: "https://github.com/sebinjohn20",
    url: "https://tasks-management-pearl.vercel.app",
    dad: "300",
  },
];
