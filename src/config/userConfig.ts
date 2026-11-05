/**
 * USER_CONFIG (Portfolio Content & Data)
 * 
 * WHY THIS CODE EXISTS:
 * This file acts as the central "database" for the entire portfolio. 
 * Hardcoding data directly inside React components makes the code messy and difficult to update. 
 * By separating the data into this configuration file, you achieve a clean separation of concerns.
 * 
 * WHAT IT DOES:
 * 1. Exports a single JSON-like object (`USER_CONFIG`) that holds all personal information, projects, skills, and gallery items.
 * 2. React components import this object (via PortfolioConfigContext) and map over the arrays to dynamically generate the UI.
 * 3. To update any text, image, or link on the website, you only need to modify this file instead of hunting through JSX code.
 */
export const USER_CONFIG = {
  profile: {
    name: "DHRUB MAHAJAN",
    title: "Information Science Engineering Student & Full-Stack Developer",
    roles: [
      "Full-Stack Developer",
      "MERN Stack Developer",
      "Backend Engineer",
      "Django Developer",
      "Software Engineer",
      "Software Developer"
    ],
    avatarUrl: "/avatar.png",
    bio: "Aspiring developer who builds end-to-end web applications with Node.js, React, Express.js, MongoDB, and Django. Skilled in full stack development, database schema design, API integration, and application logic, with a focus on scalable applications that solve real-world problems.",
    resumeUrl: "/Dhrub_Mahajan_resume.pdf",
    email: "dhruvmahajan5174@gmail.com",
    phone: "+91 9858048963",
  },

  usernames: {
    github: "Dhrub404",
    leetcode: "dhrubmahajan174",
    codeforces: "dhrubmahajan174",
    codechef: "dhruv174",
    geeksforgeeks: "dhrub404",
    linkedin: "dhrub-mahajan-232664292",
  },

  // High-fidelity fallback stats for offline/rate-limit use
  fallbackStats: {
    github: {
      repositories: 18,
      stars: 42,
      forks: 9,
      commitsThisYear: 320,
      streak: 22,
      contributions: []
    },
    leetcode: {
      solved: 184,
      easy: 70,
      medium: 98,
      hard: 16,
      rank: 125000,
      streak: 42,
      badges: ["100 Days Badge 2025", "Daily Streak"]
    },
    codeforces: {
      rating: 1240,
      maxRating: 1280,
      rank: "Newbie",
      maxRank: "Newbie",
      solvedCount: 26,
      contestsCount: 14
    },
    codechef: {
      rating: 1420,
      stars: "1★",
      globalRank: 124500,
      countryRank: 42000,
      solvedCount: 54
    },
    geeksforgeeks: {
      solved: 245,
      score: 780,
      streak: 40,
      rank: 40 // Top 40 Institution rank
    }
  },

  education: [
    {
      degree: "Bachelor of Engineering",
      specialization: "Information Science & Engineering",
      institution: "PES College of Engineering, Mandya",
      duration: "2023 - 2027",
      cgpa: "8.42 CGPA",
      courses: [
        "Object-Oriented Programming",
        "Computer Networks",
        "Database Management Systems",
        "Web Application Development",
        "Data Structures & Algorithms",
        "Operating System"
      ]
    },
    {
      degree: "JK BOARD Class XII (12th Grade)",
      specialization: "Physics, Chemistry, Mathematics (PCM)",
      institution: "G.B.H.S.S. Jammu",
      duration: "Passed 2023",
      cgpa: "87.8% Marks",
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English"
      ]
    },
    {
      degree: "JK BOARD Class X (10th Grade)",
      specialization: "General Secondary Education",
      institution: "Pavanatma Convent School, Manwal",
      duration: "Passed 2021",
      cgpa: "84.2% Marks",
      courses: [
        "Mathematics",
        "Science",
        "Social Sciences",
        "English",
        "Hindi"
      ]
    }
  ],

  skills: {
    categories: [
      { id: "languages", name: "Languages" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },
      { id: "database", name: "Databases" },
      { id: "dev-tools", name: "DevTools" }
    ],
    items: [
      // Languages
      { name: "Python", category: "languages", level: "Intermediate", value: 82, icon: "python", desc: "Backend development with Django, scripting, and problem solving." },
      { name: "C++", category: "languages", level: "Expert", value: 90, icon: "cpp", desc: "Primary language for algorithmic logic and data structures." },
      // { name: "Java", category: "languages", level: "Intermediate", value: 76, icon: "java", desc: "Object-oriented programming and core CS fundamentals." },
      { name: "JavaScript", category: "languages", level: "Expert", value: 88, icon: "javascript", desc: "Asynchronous programming, DOM handling, and full MERN stack development." },
      { name: "SQL", category: "languages", level: "Expert", value: 86, icon: "database", desc: "Writing optimized queries, joins, and relational database operations." },

      // Frontend
      { name: "HTML & CSS", category: "frontend", level: "Intermediate", value: 84, icon: "web", desc: "Building responsive layouts and clean, accessible interfaces." },
      { name: "React", category: "frontend", level: "Expert", value: 88, icon: "react", desc: "Component-based UIs, hooks, state management, and routing." },

      // Backend
      { name: "Django", category: "backend", level: "Intermediate", value: 78, icon: "django", desc: "Building web apps and REST APIs with models, views, and the ORM." },
      { name: "Node.js", category: "backend", level: "Intermediate", value: 80, icon: "nodejs", desc: "Server-side JavaScript and scalable backend services." },
      { name: "Express.js", category: "backend", level: "Expert", value: 87, icon: "express", desc: "Designing REST APIs, middleware, and authentication flows." },

      // Databases
      { name: "MongoDB", category: "database", level: "Expert", value: 88, icon: "mongodb", desc: "NoSQL schema design, aggregation pipelines, and Mongoose integration." },
      { name: "MySQL", category: "database", level: "Intermediate", value: 80, icon: "mysql", desc: "Relational schema design, indexing, and transactions." },
      { name: "SQLite", category: "database", level: "Intermediate", value: 78, icon: "sqlite", desc: "Lightweight relational storage used with Django's ORM." },

      // Developer Tools
      { name: "Git and GitHub", category: "dev-tools", level: "Expert", value: 90, icon: "git", desc: "Version control, branching, pull requests, and project workflows." },
      { name: "API Testing", category: "dev-tools", level: "Intermediate", value: 80, icon: "api", desc: "Testing and validating REST endpoints with Postman." },
      { name: "Vercel & Render", category: "dev-tools", level: "Expert", value: 86, icon: "cloud", desc: "Deploying and hosting frontend and backend applications." }
    ]
  },

  experiences: [],

   projects: [
    {
      id: "algomentor",
      title: "AlgoMentor: An Adaptive Coding Mentor",
      category: "Full-Stack MERN",
      shortDesc: "An adaptive competitive programming platform that finds your weak topics and builds a personalised practice path.",
      longDesc: "AlgoMentor is a MERN-stack platform that adapts to each learner. Five backend engines (weakness, unlock, practice, roadmap, and revision) analyse performance, unlock topics progressively, recommend problems, generate roadmaps, and schedule revisions. It integrates live LeetCode and Codeforces APIs to pull real problem-solving data.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "LeetCode API", "Codeforces API"],
      github: "https://github.com/dhrub404/algomentor",
      demo: "https://algomentor-dusky.vercel.app/",
      demoImage: "/projects/algomentor.png",
      featured: true,
      status: "Live v1.0",
      metrics: { backendEngines: "5", platformsIntegrated: "4", stack: "MERN" },
      challenges: "Designing five engines that share one user performance model without duplicating logic or slowing API responses.",
      learnings: "Structuring MongoDB schemas and service layers so each engine stays independent while feeding the same learner profile."
    },
    {
  id: "ai-job-finder",
  title: "AI Job Finder: Automated Job Discovery Bot",
  category: "Automation & AI",
  shortDesc: "An automated AI-powered job discovery platform that collects tech openings daily, filters India-eligible opportunities, and delivers personalized job updates through Telegram.",
  longDesc: "AI Job Finder is an automated job aggregation and notification platform that collects technology job openings from  multiple company career pages, job portals, and remote job boards. It normalizes job listings, filters opportunities based on location, experience, and work mode, and delivers ranked daily job digests to subscribers through a Telegram bot. The platform uses Python-based job scraping adapters, Turso (hosted SQLite) for persistent storage, GitHub Actions for scheduled daily collection, and Vercel serverless functions with Telegram webhooks for real-time bot interactions. It also supports AI-powered personalized job matching using Claude, allowing users to receive relevant opportunities based on their skills, experience, and resumes.",
  techStack: [
    "Python",
    "Telegram Bot API",
    "Claude AI",
    "GitHub Actions",
    "Turso (SQLite)",
    "Vercel",
    "YAML",
    "REST API",
    "Pytest"
  ],
  github: "https://github.com/Dhrub404/ai-job-finder",
  demoImage: "/projects/aiJobFinder.png",
  featured: true,
  status: "v1.0",
  metrics: {
    jobSources: "20+ Job Platforms & Career Sites",
    automation: "Daily at 6:45 AM IST",
    delivery: "Telegram Bot",
    infrastructure: "GitHub Actions + Turso + Vercel",
    aiMatching: "Claude-Powered Personalization"
  },
  challenges: "Building a reliable multi-source job aggregation pipeline that handles different career-site structures, normalizes inconsistent job data, filters India-eligible opportunities, and prevents duplicate notifications while running on free-tier cloud infrastructure.",
  learnings: "Designing an automated serverless architecture using GitHub Actions, Turso, and Vercel; building scalable Python scraping adapters; integrating Telegram webhooks; and implementing AI-powered job matching with persistent user preferences."
},
        {
      id: "resume-ai",
      title: "Resume AI: Intelligent Career Builder",
      category: "Full-Stack & AI",
      shortDesc: "An AI-powered resume builder that scores your resume, rewrites weak bullet points, and previews changes live.",
      longDesc: "Resume AI is a full-stack platform for building and improving resumes. Users pick a template (Modern, Executive, Classic), edit content with a live preview, and use the OpenAI API to get a resume score with improvement tips or to rewrite bullet points and fix grammar. The React frontend has an interactive Three.js 3D login with a reactive starfield, and the Django REST backend handles JWT-secured accounts and resume data.",
      techStack: ["React.js", "Vite", "Three.js", "Framer Motion", "Django REST", "JWT", "OpenAI API", "SQLite"],
      github: "https://github.com/Dhrub404/Resume-AI",
      demoImage: "/projects/resumeAI.png",
      featured: true,
      status: "v1.0",
      metrics: { aiFeatures: "Analysis + Rewriting", templates: "Modern, Executive, Classic", auth: "JWT" },
      challenges: "Connecting the OpenAI API to the resume editor so suggestions arrive quickly and apply cleanly to the content being edited.",
      learnings: "Building a decoupled React and Django REST stack with JWT authentication, and integrating an LLM API into a real product workflow."
    },
    {
      id: "ecommerce-platform",
      title: "VoltCart E-Commerce Platform",
      category: "Full-Stack Web App",
      shortDesc: "A full-stack online store with a React frontend and a Django REST backend.",
      longDesc: "A full-stack e-commerce application with product browsing, cart, and secure user authentication. The React frontend talks to a Django REST Framework backend through JWT-protected APIs.",
      techStack: ["React.js", "Django REST", "JWT", "Python"],
      github: "",
      demo: "",
      demoImage: "/projects/ecommerce_demo.png",
      featured: true,
      status: "Live v1.0",
      metrics: { frontend: "React", backend: "Django REST", auth: "JWT" },
      challenges: "Keeping the React frontend and Django API in sync across authentication, cart state, and product data.",
      learnings: "Designing clean REST endpoints and handling JWT-based authentication across a decoupled frontend and backend."
    },
    
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      category: "Web Apps",
      shortDesc: "A dynamic portfolio showcasing projects, skills, certifications, and contact information.",
      longDesc: "A personal brand website presenting my projects, technical skills, and certifications in a modern, interactive layout. All content comes from one central configuration file, so updating the portfolio is quick.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      github: "https://github.com/Dhrub404/Portfolio",
      demo: "/",
      demoImage: "/projects/portfolio-website.svg",
      featured: true,
      status: "Live Portfolio",
      metrics: { content: "Config-driven", animations: "Framer Motion", language: "TypeScript" },
      challenges: "Keeping a polished animated UI fast while making content easy to update.",
      learnings: "Using a centralised configuration model so adding a project or certificate is a one-file change."
    }
  ],
  achievements: [],

  certifications: [
    {
      title: "Object-Oriented Design",
      issuer: "Coursera",
      date: "June 2026",
      credentialId: "COURSERA-UALBERTA-OOD",
      credentialUrl: "https://coursera.org/share/62c33d6ef21ab79a0de9da7cacdc42e0",
      pdfUrl: "https://coursera.org/share/62c33d6ef21ab79a0de9da7cacdc42e0",
      skillsGained: ["Object-Oriented Design", "UML Class Diagrams", "Design Patterns", "SOLID Principles", "Software Architecture"],
      badgeColor: "#007C41"
    },
    {
      title: "Agile Project Management",
      issuer: "Coursera",
      date: "December 2025",
      credentialId: "COURSERA-CUBOULDER-AGILE",
      credentialUrl: "https://coursera.org/share/418bcb853c4e828adf0affee36beb5f2",
      pdfUrl: "https://coursera.org/share/418bcb853c4e828adf0affee36beb5f2",
      skillsGained: ["Agile Methodologies", "Scrum", "Sprint Planning", "Project Planning", "Stakeholder Communication"],
      badgeColor: "#CFB87C"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      date: "January 2026",
      credentialId: "COURSERA-GOOGLE-NETWORKING",
      credentialUrl: "https://coursera.org/share/5234a3fd8cf6e03023c19840777c6fe1",
      pdfUrl: "https://coursera.org/share/5234a3fd8cf6e03023c19840777c6fe1",
      skillsGained: ["TCP/IP", "OSI Model", "DNS", "Network Protocols", "Subnetting"],
      badgeColor: "#4285F4"
    }
  ],

  leadership: []
};
