// Portfolio data for Hamman Muraya
// Based on ULTIMATE CV content

export const PROFILE_DATA = {
  name: "Hamman Muraya",
  title: "Senior Software Engineer & AI Specialist",
  tagline: "Ph.D. in Software Engineering specializing in RLHF, LLMs, and scalable distributed systems",
  email: "hammanmuraya1@gmail.com",
  phone: "+254 758 627046",
  location: "Nairobi, Kenya",
  availability: "Available for immediate employment",
  bio: "I'm a Senior Software Engineer and AI Training Specialist with extensive experience in building scalable systems, training large language models, and developing full-stack applications. My expertise spans Python, JavaScript/TypeScript, Elixir, and modern AI/ML technologies. I have a proven track record of delivering high-quality code, improving model performance, and leading complex technical projects.",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  social: {
    github: "https://github.com/MurayaSoftTouch",
    linkedin: "https://linkedin.com/in/hamman-muraya",
    twitter: "https://twitter.com/HammanMuraya1"
  }
};

export const SKILLS_DATA = [
  { name: "Python (Django, Flask)", icon: "fa-brands fa-python", level: 95, color: "#4B8BBE", emoji: "🐍" },
  { name: "JavaScript/TypeScript", icon: "fa-brands fa-js", level: 92, color: "#F7DF1E", emoji: "⚡" },
  { name: "React & React Native", icon: "fa-brands fa-react", level: 90, color: "#61DAFB", emoji: "⚛️" },
  { name: "Node.js", icon: "fa-brands fa-node", level: 88, color: "#339933", emoji: "📦" },
  { name: "Elixir/Phoenix", icon: "fa-solid fa-bolt", level: 85, color: "#4B275F", emoji: "💜" },
  { name: "SQL/PostgreSQL", icon: "fa-solid fa-database", level: 93, color: "#336791", emoji: "🗄️" },
  { name: "RLHF & SFT", icon: "fa-solid fa-brain", level: 94, color: "#8B5CF6", emoji: "🧠" },
  { name: "LLM Evaluation", icon: "fa-solid fa-microchip", level: 91, color: "#10B981", emoji: "📊" },
  { name: "Prompt Engineering", icon: "fa-solid fa-wand-magic-sparkles", level: 96, color: "#F59E0B", emoji: "✨" },
  { name: "AWS Cloud", icon: "fa-brands fa-aws", level: 87, color: "#FF9900", emoji: "☁️" },
  { name: "Docker/Kubernetes", icon: "fa-brands fa-docker", level: 84, color: "#2496ED", emoji: "🐳" },
  { name: "Redis", icon: "fa-solid fa-memory", level: 86, color: "#DC382D", emoji: "🔴" },
  { name: "Code Review", icon: "fa-solid fa-code", level: 95, color: "#06B6D4", emoji: "🔍" },
  { name: "System Design", icon: "fa-solid fa-sitemap", level: 89, color: "#EC4899", emoji: "🏗️" },
  { name: "CI/CD Pipelines", icon: "fa-solid fa-infinity", level: 83, color: "#14B8A6", emoji: "🔄" },
  { name: "Data Annotation", icon: "fa-solid fa-tags", level: 97, color: "#84CC16", emoji: "🏷️" }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "TELUS International AI",
    role: "Senior AI Trainer & Software Engineer",
    location: "Remote",
    start_date: "2023-01-01",
    end_date: null,
    current: true,
    description: "Leading AI model training initiatives focusing on RLHF, SFT, and code quality improvement for large language models. Developing evaluation frameworks and creating high-quality training data.",
    achievements: [
      "Improved model code generation accuracy by 35% through targeted RLHF interventions",
      "Created comprehensive evaluation frameworks for assessing LLM performance",
      "Developed complex prompts for stumping models and identifying edge cases",
      "Mentored junior annotators on best practices for AI training"
    ],
    technologies: ["RLHF", "SFT", "Python", "LLM Evaluation", "Prompt Engineering"]
  },
  {
    id: 2,
    company: "Outlier AI",
    role: "AI Data Trainer - Code Generation",
    location: "Remote",
    start_date: "2022-06-01",
    end_date: "2023-12-31",
    current: false,
    description: "Specialized in training AI models for code generation tasks across multiple programming languages. Created high-quality datasets and evaluation metrics.",
    achievements: [
      "Achieved 98% quality score on code annotation tasks",
      "Developed test cases for evaluating code correctness and efficiency",
      "Contributed to improving model performance on complex algorithmic tasks"
    ],
    technologies: ["Python", "JavaScript", "Code Review", "Data Annotation"]
  },
  {
    id: 3,
    company: "Scale AI",
    role: "Machine Learning Data Specialist",
    location: "Remote",
    start_date: "2021-03-01",
    end_date: "2022-05-31",
    current: false,
    description: "Worked on data annotation and model evaluation for various ML projects including NLP, computer vision, and code generation.",
    achievements: [
      "Annotated over 10,000+ data points with 99% accuracy",
      "Developed quality assurance processes for data validation",
      "Collaborated with ML engineers to improve annotation guidelines"
    ],
    technologies: ["Data Annotation", "NLP", "Quality Assurance"]
  },
  {
    id: 4,
    company: "Freelance",
    role: "Full-Stack Developer",
    location: "Nairobi, Kenya",
    start_date: "2020-01-01",
    end_date: "2021-02-28",
    current: false,
    description: "Developed custom web applications for clients across various industries including e-commerce, healthcare, and education.",
    achievements: [
      "Built 15+ production applications using React, Node.js, and Python",
      "Implemented secure payment processing and user authentication systems",
      "Delivered projects on time with 100% client satisfaction"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    id: 5,
    company: "Tech Solutions Ltd",
    role: "Software Developer",
    location: "Nairobi, Kenya",
    start_date: "2018-06-01",
    end_date: "2019-12-31",
    current: false,
    description: "Developed and maintained enterprise applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Implemented automated testing reducing bugs by 40%",
      "Led migration of legacy systems to modern architecture"
    ],
    technologies: ["JavaScript", "Python", "SQL", "Git"]
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    name: "AI-Powered Livestock Biometrics System",
    description: "Award-winning computer vision system using muzzle print biometrics for livestock identification. Implements LBP feature extraction and CNN-inspired matching algorithms.",
    image: "https://images.pexels.com/photos/591/animal-countryside-agriculture-farm.jpg",
    tags: ["Computer Vision", "AI/ML", "Image Processing", "React", "Biometrics"],
    featured: true,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: "#"
  },
  {
    id: 2,
    name: "Full-Stack Automotive Service Platform",
    description: "Comprehensive automotive service management system with booking wizard, inventory management, customer dashboards, and secure authentication.",
    image: "https://images.pexels.com/photos/4480448/pexels-photo-4480448.jpeg",
    tags: ["React", "Full-Stack", "REST API", "Authentication"],
    featured: true,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: "https://brianjones.netlify.app/"
  },
  {
    id: 3,
    name: "Emergency Incident Reporting System",
    description: "Geolocation-based emergency reporting platform enabling citizens to report incidents with multimedia data and real-time notifications to authorities.",
    image: "https://images.pexels.com/photos/12002262/pexels-photo-12002262.jpeg",
    tags: ["React", "Redux", "Python", "Flask", "Google Maps API"],
    featured: false,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: null
  },
  {
    id: 4,
    name: "Artisan E-Commerce Marketplace",
    description: "Custom marketplace platform connecting artisans to global markets with secure payments, inventory management, and international shipping support.",
    image: "https://images.pexels.com/photos/13033124/pexels-photo-13033124.jpeg",
    tags: ["E-commerce", "Payments", "Inventory", "Full-Stack"],
    featured: false,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: null
  },
  {
    id: 5,
    name: "Professional Portfolio Platform",
    description: "Modern responsive portfolio website with 3D animations, smooth transitions, and dynamic content management using React and Supabase.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "3D"],
    featured: true,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: "https://hamanmuraya1.netlify.app/"
  },
  {
    id: 6,
    name: "LLM Evaluation Framework",
    description: "Comprehensive framework for evaluating large language model performance across multiple dimensions including accuracy, safety, and helpfulness.",
    image: "https://images.pexels.com/photos/6303596/pexels-photo-6303596.jpeg",
    tags: ["AI/ML", "Python", "LLM", "Evaluation", "Data Science"],
    featured: false,
    github_url: "https://github.com/MurayaSoftTouch",
    live_url: null
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Ph.D. in Software Engineering",
    institution: "Dedan Kimathi University of Technology",
    field: "Software Engineering",
    grade: "Distinction",
    start_date: "2020-01-01",
    end_date: "2024-12-31"
  },
  {
    id: 2,
    degree: "M.Sc. in Computer Science",
    institution: "Dedan Kimathi University of Technology",
    field: "Computer Science",
    grade: "First Class Honors",
    start_date: "2017-01-01",
    end_date: "2019-12-31"
  },
  {
    id: 3,
    degree: "B.Sc. in Computer Science",
    institution: "Dedan Kimathi University of Technology",
    field: "Computer Science",
    grade: "Second Class Upper",
    start_date: "2013-01-01",
    end_date: "2016-12-31"
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-06-01",
    credential_id: "AWS-SA-2023"
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022-09-01",
    credential_id: "PSM-I-2022"
  },
  {
    id: 3,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022-03-01",
    credential_id: "TF-2022"
  }
];
