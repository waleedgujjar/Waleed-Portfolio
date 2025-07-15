import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Github,
    Code,
}
from "lucide-react";

import {FiGithub,FiLinkedin,FiTwitter} from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/p1.png";
import PROJECT_IMG_2 from "../assets/p2.png";
import PROJECT_IMG_3 from "../assets/p3.png";
import PROJECT_IMG_6 from "../assets/p6.png";
import PROJECT_IMG_7 from "../assets/p7.png";
import PROJECT_IMG_8 from "../assets/p8.png";


export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills:[
            {name: "React",level:95,color:"bg-blue-500"},
            {name: "TypeScript",level:75,color:"bg-blue-600"},
            {name: "Next.js",level:80,color:"bg-blue-800"},
            {name: "Tailwind CSS",level:92,color:"bg-blue-500"},
            {name: "Framer Motion",level:85,color:"bg-blue-500"},
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust, scalable server-side applications",
        skills: [
            { name: "Node.js", level:90, color:"bg-green-600" },
            { name: "Express.js", level:85, color:"bg-gray-700" },
            { name: "GraphQL", level:75, color:"bg-pink-500" },
            { name: "REST API", level:88, color:"bg-orange-400" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Designing and managing efficient data storage solutions",
        skills: [
            { name: "MongoDB", level:85, color:"bg-green-700" },
            { name: "PostgreSQL", level:80, color:"bg-blue-700" },
            { name:"Redis",level:80,color:"bg-red-500"},
            { name:"Prisms",level:82,color:"bg-indigo-600"},
            { name: "MySQL", level:75, color:"bg-yellow-600" },
            { name: "Firebase", level:70, color:"bg-orange-500" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Automating deployment, scaling, and monitoring infrastructure",
        skills: [
            { name: "Docker", level:85, color:"bg-blue-400" },
            { name: "Kubernetes", level:75, color:"bg-blue-600" },
            { name: "AWS", level:80, color:"bg-yellow-400" },
            { name: "CI/CD", level:82, color:"bg-green-500" },
            { name: "Vercel", level:78, color:"bg-gray-600" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Shopify",
    "Sass",
    "webpack",
    "Vite",
    "Figma",
    "Jest",
    "Cypress",
    "Adobe XD",
    "Notion",
    "Slack",
];
export const STATS = [
    {number:"30+",label:"Projects Completed"},
    {number:"3+",label:"Years Experience"},
    {number:"20+",label:"Technologies"},
    {number:"100%",label:"Client Satisfaction"},
];
export const PROJECTS = [
    {
        id: 1,
        title: "Embiotix Landing Page",
        description: "A modern, responsive landing page designed for Embiotix, featuring interactive sections, smooth animations, and optimized for high conversion rates. Built with React and Tailwind CSS to ensure fast performance and seamless user experience.",
        image: PROJECT_IMG_1,
        tags: ["React","Tailwind CSS","Framer motion"],
        liveUrl: "https://embiotix.com/",
        Github: "#",
        featured:false,
        category:"Front End",
    },
    {
        id: 2,
        title: "AI Recruiter Voice Agent",
        description: "An AI-powered voice agent that automates candidate screening and interview scheduling for recruiters. Integrates advanced speech recognition and natural language processing to conduct real-time conversations, evaluate candidate responses, and streamline the hiring workflow. Built with React, Node.js, and cloud-based AI services.",
        image: PROJECT_IMG_2,
        tags: ["React", "Node.js", "Speech Recognition", "AI"],
        liveUrl: "https://airecruiter-app.vercel.app/",
        Github: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "LMS MERN Stack",
        description: "A full-featured Learning Management System (LMS) built with the MERN stack. Supports user authentication, course creation, progress tracking, quizzes, and admin dashboards. Designed for scalability and seamless user experience.",
        image: PROJECT_IMG_3,
        tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux"],
        liveUrl: "https://lms-gs.vercel.app/",
        Github: "#",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 4,
        title: "AI Mock Interview Web App",
        description: "A web application that simulates real-life technical interviews using the Google Gemini API. Users can practice coding and behavioral questions, receive instant AI-generated feedback, and track their progress. Built with React for the frontend and Node.js for backend integration with Gemini API.",
        image: PROJECT_IMG_6,
        tags: ["React", "TypeScript", "Google Gemini API", "Firebase", "Tailwind CSS"],
        liveUrl: "https://aimockinterview-seven.vercel.app/",
        Github: "#",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 5,
        title: "AI Quiz App With Next.js",
        description: "An interactive AI-powered quiz application built with Next.js. Users can take quizzes on various topics, receive instant feedback, and view detailed explanations powered by AI. Features include user authentication, real-time scoring, and a responsive UI for seamless experience across devices.",
        image: PROJECT_IMG_7,
        tags: ["Next.js", "React", "Google Gemini API", "Tailwind CSS"],
        liveUrl: "https://quizai-sigma.vercel.app/",
        Github: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 6,
        title: "AI Career Coach Using Next.js",
        description: "A personalized AI-powered career coaching platform built with Next.js. Users receive tailored career advice, resume feedback, and interview preparation tips through interactive chat powered by advanced AI models. Features include user authentication, progress tracking, and a modern, responsive UI.",
        image: PROJECT_IMG_8,
        tags: ["Next.js", "React", "AI", "Tailwind CSS"],
        liveUrl: "https://sensai-delta-flax.vercel.app/",
        Github: "#",
        featured: false,
        category: "Full Stack",
    }
];
export const JOURNEY_STEPS = [
    {
        year: "2022",
        title: "Started My Coding Journey",
        description: "Began learning programming fundamentals and web development, laying the foundation for a career in tech.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2023",
        title: "First Internship",
        company: "Hive SEO Pros",
        description: "Completed my first internship as a web developer, where I contributed to real-world projects, improved my coding skills, and gained valuable experience collaborating with a professional team.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2024",
        title: "Computer Science Degree",
        company: "Goverment University Faisalabad",
        description: "Graduated with a degree in Computer Science, deepening my understanding of algorithms, data structures, and software engineering principles while working on academic and personal projects.",
        icon: GraduationCap,
        color: "bg-purple-500",
    },
    {
        year: "2023",
        title: "Freelance & Open Source",
        company: "Independent",
        description: "Started working as a freelance developer and contributing to open source projects, expanding my skills and collaborating with the global developer community.",
        icon: Award,
        color: "bg-yellow-500",
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description:"Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turing Complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        icon: FiGithub,
        url: "https://github.com/waleedgujjar",
          label: "GitHub",
        hoverBg: "hover:bg-black",
       hoverText: "hover:text-white"
    },
    {
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/muhammad-waleed-software-engineer/",
        label: "LinkedIn",
         hoverBg: "hover:bg-[#0077B5]",
         hoverText: "hover:text-white",
    },
    {
        name: "Email",
        icon: Mail,
        url: "waleednisar43@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Islamabad, Pakistan",
    },
    {
        icon: Mail,
        label: "Email",
        value: "waleednisar43@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92-315-6164430"
    },
];