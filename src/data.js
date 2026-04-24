import { Server, LayoutTemplate, Smartphone } from 'lucide-react';

export const SKILLS = {
  languages: ['Go', 'TypeScript', 'JavaScript', 'C#', 'PHP', 'Python', 'C', 'SQL'],
  frameworks: ['ASP.NET Core', 'React.js', 'NestJS', 'Next.js', 'Laravel', 'LangChain', 'Tailwind CSS'],
  tools: ['Docker', 'Git & GitHub', 'gRPC', 'Redis', 'PostgreSQL', 'Nginx', 'Vercel', 'Postman']
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Ecommerce Microservice',
    description: 'A scalable e-commerce platform built with microservice architecture. Features user auth, product catalog, cart, order management, and Midtrans payment integration.',
    image: '/img/microservices.png',
    tags: ['Go', 'gRPC', 'Redis', 'Docker', 'PostgreSQL', 'Nginx'],
    link: 'https://github.com/RenoAji/ecommerce-microservice'
  },
  {
    id: 2,
    title: 'Peminjaman Ruangan',
    description: 'A full-stack room booking system with backend API, frontend web app, mobile app, and Docker-based infrastructure. Features room management and booking workflows.',
    image: '/img/peminjaman_ruangan.png',
    tags: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/RenoAji/2026-peminjaman-ruangan-docs'
  },
  {
    id: 3,
    title: 'CodeSync',
    description: 'A real-time collaborative code editor with multi-user support, Monaco Editor integration, and conflict-free synchronization using Yjs CRDT over WebSocket.',
    image: '/img/codesync.png',
    tags: ['React', 'TypeScript', 'NestJS', 'Yjs CRDT', 'WebSocket'],
    link: 'https://github.com/RenoAji/codesync'
  },
  {
    id: 4,
    title: 'Info Vault',
    description: 'A knowledge base assistant that lets users chat about their documents with RAG, generate notes, and generate mindmaps.',
    image: '/img/ss-infovault.png',
    tags: ['Next.js', 'LangChain', 'Chroma DB'],
    link: 'https://github.com/RenoAji/info-vault'
  },
  {
    id: 5,
    title: 'Learning Camp',
    description: 'Prototype platform where admin can manage courses, and students can access their courses after registration. Includes payments for premium courses.',
    image: '/img/ss-learningcamp.png',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'Midtrans API'],
    link: 'https://github.com/RenoAji/learning-camp-deploy'
  },
  {
    id: 6,
    title: '24 Game',
    description: 'A simple number game with a real-time leaderboard powered by Redis sorted sets and WebSocket for live score updates.',
    image: '/img/24_game.png',
    tags: ['Vue.js', 'JavaScript', 'Redis', 'WebSocket', 'Docker'],
    link: 'https://github.com/RenoAji/24_game'
  },
  {
    id: 7,
    title: 'Otak Atik',
    description: 'Website for gadget repairment business, allowing users to book repair appointments and view service details. Also includes an admin dashboard for managing bookings and services.',
    image: '/img/Otak_Atik_Logo.jpeg',
    tags: ['Web App', 'Netlify'],
    link: 'https://otak-atik.netlify.app',
    isLive: true
  },
  {
    id: 8,
    title: 'Ebook App',
    description: 'An application for reading and managing ebooks, featuring user authentication and ebook borrowing.',
    image: '/img/ss-ebook.png',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/RenoAji/ebook-app'
  },
  {
    id: 9,
    title: 'ESP32 TFT To-Do List',
    description: 'An embedded to-do list project built on ESP32 + TFT Screen that integrates with Google Tasks API through Google Apps Script.',
    image: '/img/esp32-todolist.jpeg',
    tags: ['ESP32', 'TFT Display', 'Embedded'],
    link: 'https://github.com/RenoAji/todo-list-esp32-tft'
  }
];

export const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Building interactive, modern, and user-friendly user interfaces (UI) using the latest technologies like React, and Tailwind CSS.',
    icon: LayoutTemplate
  },
  {
    title: 'Backend Development',
    description: 'Designing and developing reliable server-side applications, including RESTful APIs, microservice architectures, and database management with Go, ASP.NET Core, Node.js, Laravel, and PostgreSQL.',
    icon: Server
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring your website looks perfect on all devices, from desktop, tablet, to smartphone, with a mobile-first approach.',
    icon: Smartphone
  }
];
