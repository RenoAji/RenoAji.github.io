import { Server, LayoutTemplate, Smartphone } from "lucide-react";

export const SKILLS = {
  languages: [
    "Go",
    "C#",
    "Python",
    "SQL",
    "TypeScript",
    "JavaScript",
    "PHP",
    "C",
  ],
  frameworks: ["ASP.NET Core", "NestJS", "gRPC", "Laravel"],
  tools: [
    "Redis (Streams & Sorted Sets)",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Linux Environments",
    "Nginx",
    "Git",
    "Postman",
    "LangChain",
    "Vector Databases (ChromaDB)",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Monorepo E-Commerce Microservices",
    description:
      "A highly scalable, decoupled e-commerce ecosystem leveraging asynchronous communication and structured data streaming. Implements standard flows like user auth, dynamic product catalogs, cart mechanics, and transactional billing through Midtrans gateway integration.",
    image: "/img/microservices.png",
    tags: [
      "Go (Monorepo)",
      "gRPC",
      "Redis Streams",
      "Docker Compose",
      "PostgreSQL",
      "Nginx",
    ],
    link: "https://github.com/RenoAji/ecommerce-microservice",
  },
  {
    id: 2,
    title: "Peminjaman Ruangan Docs",
    description:
      "A secure enterprise-grade booking and management resource API infrastructure. Built with a strict database-first approach featuring relational workflow optimizations and object storage integration.",
    image: "/img/peminjaman_ruangan.png",
    tags: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Supabase",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://github.com/RenoAji/2026-peminjaman-ruangan-docs",
  },
  {
    id: 3,
    title: "CodeSync - Real-Time Collaborative Engine",
    description:
      "A backend-heavy real-time synchronization server supporting multi-user code editing. Handles complex conflict-free resolution mechanisms and event-driven data distribution.",
    image: "/img/codesync.png",
    tags: ["NestJS", "Yjs CRDT", "WebSockets", "TypeScript", "React"],
    link: "https://github.com/RenoAji/codesync",
  },
  {
    id: 4,
    title: "Info Vault - RAG Knowledge Base Assistant",
    description:
      "An AI-powered document intelligence service that implements Retrieval-Augmented Generation (RAG) to allow contextual querying, dynamic note construction, and programmatic mindmap generation.",
    image: "/img/ss-infovault.png",
    tags: ["Next.js", "LangChain", "Chroma DB", "Python/TypeScript Ecosystem"],
    link: "https://github.com/RenoAji/info-vault",
  },
  {
    id: 5,
    title: "Learning Camp",
    description:
      "Prototype platform where admin can manage courses, and students can access their courses after registration. Includes payments for premium courses.",
    image: "/img/ss-learningcamp.png",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Midtrans API"],
    link: "https://github.com/RenoAji/learning-camp-deploy",
  },
  {
    id: 6,
    title: "24 Game",
    description:
      "A simple number game with a real-time leaderboard powered by Redis sorted sets and WebSocket for live score updates.",
    image: "/img/24_game.png",
    tags: ["Vue.js", "JavaScript", "Redis", "WebSocket", "Docker"],
    link: "https://game-24-f78900180232.herokuapp.com/",
    isLive: true,
  },
  {
    id: 7,
    title: "Otak Atik",
    description:
      "Website for gadget repairment business, allowing users to book repair appointments and view service details. Also includes an admin dashboard for managing bookings and services.",
    image: "/img/Otak_Atik_Logo.jpeg",
    tags: ["Web App", "Netlify"],
    link: "https://otak-atik.netlify.app",
    isLive: true,
  },
  {
    id: 8,
    title: "Ebook App",
    description:
      "An application for reading and managing ebooks, featuring user authentication and ebook borrowing.",
    image: "/img/ss-ebook.png",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    link: "https://github.com/RenoAji/ebook-app",
  },
  {
    id: 9,
    title: "ESP32 TFT To-Do List",
    description:
      "An embedded to-do list project built on ESP32 + TFT Screen that integrates with Google Tasks API through Google Apps Script.",
    image: "/img/esp32-todolist.jpeg",
    tags: ["ESP32", "TFT Display", "Embedded"],
    link: "https://github.com/RenoAji/todo-list-esp32-tft",
  },
];

export const SERVICES = [
  {
    title: "Backend & API Engineering",
    description:
      "Architecting robust, type-safe RESTful endpoints, gRPC communication channels, and high-performance server architectures using Go and .NET.",
    icon: Server,
  },
  {
    title: "Distributed Systems & Messaging",
    description:
      "Implementing event-driven patterns, message streaming via Redis Streams, caching layers, and decoupled multi-service infrastructure.",
    icon: LayoutTemplate,
  },
  {
    title: "Systems Exploration & Homelabbing",
    description:
      "Configuring networks, building isolated testing environments, and managing local virtualization setups to understand exactly what happens below the application layer.",
    icon: Smartphone,
  },
];
