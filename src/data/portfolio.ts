export const profile = {
  name: "Mallika Singh",
  role: "Java Backend Engineer | Full Stack Developer | AI Engineer",
  badge: "Software Engineer Portfolio",
  heading: "Building scalable backend systems and intelligent AI-powered software.",
  subheading:
    "Hi, I'm Mallika Singh, a Computer Science Engineering graduate passionate about Java backend development, Spring Boot, Angular, Full Stack Engineering, and Generative AI. I enjoy designing enterprise applications, building REST APIs, and developing AI-powered software using modern LLM frameworks.",
  location: "India",
  email: "singhmallika1773@gmail.com",
  phone: "+91 9263663380",
  github: "https://github.com/MallikaSingh1773",
  linkedin: "https://www.linkedin.com/in/mallikasingh05",
  heroCards: [
    { label: "Current Focus", value: "Java backend engineering and Generative AI" },
    { label: "Experience", value: "Java Developer Intern at Intellect Design Arena" },
    { label: "Engineering", value: "REST APIs, Spring Boot, Agentic AI workflows" },
  ],
};

export const about = {
  heading: "A developer passionate about backend engineering, enterprise software, and AI.",
  intro:
    "I focus on building dependable enterprise systems and AI-powered products, combining strong engineering fundamentals with modern LLM tooling.",
  paragraphs: [
    "I'm a Computer Science Engineering graduate who enjoys solving complex engineering problems through scalable backend systems and AI-powered applications.",
    "My strongest skills lie in Java, Spring Boot, Angular, REST APIs, SQL, and Full Stack Development.",
    "Recently I've been exploring Generative AI by building Agentic AI systems using LangChain, LangGraph, vector databases, prompt engineering, and LLM workflows.",
    "I enjoy writing clean code, learning modern technologies, and building software that creates real-world impact.",
  ],
  miniCards: [
    {
      label: "Education",
      value: "B.Tech Computer Science Engineering, VIT Amaravati",
    },
    { label: "Core Stack", value: "Java, Spring Boot, Angular, Node.js, React, Python" },
    {
      label: "Interests",
      value: "Backend Engineering, Artificial Intelligence, System Design, Problem Solving",
    },
  ],
};

export const education = [
  {
    title: "B.Tech Computer Science Engineering",
    org: "VIT Amaravati",
    tags: ["2022 – 2026", "CGPA: 8.58"],
  },
  { title: "Class XII", org: "Higher Secondary Education", tags: ["School Education", "83%"] },
  { title: "Class X", org: "Secondary Education", tags: ["School Education", "91%"] },
];

export const skills = [
  { title: "Languages", icon: "code", items: ["Java", "Python", "JavaScript","SQL", "HTML", "CSS"] },
  {
    title: "Backend",
    icon: "server",
    items: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "REST APIs", "Node.js", "Express.js"],
  },
  { title: "Frontend", icon: "layout", items: ["Angular", "React", "Tailwind CSS", "Bootstrap"] },
  { title: "Databases", icon: "database", items: ["MySQL", "MongoDB"] },
  {
    title: "AI & Cloud",
    icon: "cloud",
    items: ["LangChain", "LangGraph", "Prompt Engineering", "RAG", "LLMs", "OpenAI API", "AWS"],
  },
  {
    title: "Core Concepts",
    icon: "cpu",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design", "Git","GitHub"],
  },
] as const;

export const projects = [
  {
    name: "CoderBuddy",
    subtitle: "Agentic AI Software Engineer",
    github: "https://github.com/MallikaSingh1773/CoderBuddy",
    description:
      "Developed a multi-agent AI system that converts natural language instructions into complete production-ready codebases using autonomous AI agents.",
    highlights: [
      "Built a multi-agent workflow using LangChain and LangGraph.",
      "Designed specialized AI coding agents using role-based prompting.",
      "Implemented a state-managed workflow with more than 15 transitions, reducing redundant LLM calls by 25%.",
      "Added secure file tools and real-time agent tracing, improving debugging speed and execution visibility by 30%.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Agentic AI", "LLMs", "Prompt Engineering"],
  },
  {
    name: "TrackNPrep",
    subtitle: "AI Powered Interview Preparation Platform",
    github: "https://github.com/MallikaSingh1773/TrackNPrep",
    description:
      "An AI-powered interview preparation platform that generates role-based interview questions, mock interviews, and personalized preparation workflows.",
    highlights: [
      "Built AI-powered mock interview platform using Google Gemini.",
      "Created role-specific interview simulations.",
      "Optimized AI response latency to approximately 2–4 seconds.",
      "Designed MongoDB session storage for fast retrieval of saved interview sessions.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Google Gemini API", "JavaScript", "REST APIs"],
  },
  {
    name: "Anime Recommendation System",
    subtitle: "Machine Learning Recommendation Engine",
    github: "https://github.com/MallikaSingh1773/AnimeRecommendation",
    description:
      "A collaborative filtering recommendation engine that suggests personalized anime using machine learning.",
    highlights: [
      "Processed over 12,000 anime records.",
      "Implemented KNN and cosine similarity.",
      "Improved recommendation precision by approximately 75%.",
      "Built an interactive Streamlit dashboard.",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning"],
  },
];

export const experience = [
  {
    role: "Java Developer Intern",
    company: "Intellect Design Arena",
    period: "June 2026 – August 2026",
    points: [
      "Gained hands-on experience with Purple Fabric, Intellect's Agentic AI platform, by building and deploying Agentic AI bots to automate enterprise workflows.",
      "Developed a full-stack Banking Customer Service Portal using Spring Boot, Angular, TypeScript, and REST APIs.",
      "Built RESTful APIs using Spring Boot, JPA/Hibernate, MySQL, and H2 while implementing CRUD operations, validation, and global exception handling.",
      "Collaborated within Agile teams using Git while debugging, testing, reviewing code, and enhancing application features.",
    ],
  },
  {
    role: "Freelance AI Data Specialist",
    company: "Deccan AI Experts",
    period: "April 2026 – Present",
    points: [
      "Evaluated AI-generated tools and API implementations.",
      "Reviewed Python and SQL backend functions.",
      "Conducted rubric-based quality assessments for LLM responses.",
      "Delivered structured feedback and corrections that improved model quality and reliability.",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Academy Cloud Architecting",
    org: "AWS",
    year: "2025",
    url: "https://drive.google.com/file/d/1F72ICZyEMYirJbWGVoaTEeKQQkWP_QPj/view",
  },
  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS",
    year: "2025",
    url: "https://drive.google.com/file/d/1B3abJ6HOvmOj1B1VdBHCuYijVBsqVjuv/view",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    org: "Microsoft",
    year: "2025",
    url: "https://drive.google.com/file/d/1znjYV7zi3Qk8cKpda0ZTZnjKaXSRtOvJ/view",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    org: "Oracle",
    year: "2025",
    url: "https://drive.google.com/file/d/1ebkozDdqO3LwuTwLvlQUSKOcGOkSSljE/view",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
