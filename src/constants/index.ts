export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: "gym-pilot-pro",
    title: "GymPilotPro",
    description: "AI-powered gym management SaaS platform revolutionizing how fitness centers operate.",
    longDescription: "A comprehensive AI-driven ecosystem for gym owners. Featuring automated membership management, real-time analytics, AI-powered workout recommendations, and seamless trainer-client communication.",
    image: "/projects/gympilot.jpg", // Placeholder
    video: "/GymPilotPro Clip1 Voiceover 2.mp4",
    tags: ["SaaS", "AI", "Full Stack", "Next.js", "PostgreSQL"],
    links: {
      live: "https://gympilotpro.com",
      github: "https://github.com/yourusername/gympilotpro",
    },
    features: [
      "AI Assistant for workout plans",
      "QR Code Check-ins",
      "Automated Billing & Stripe Integration",
      "Trainer Dashboard",
      "Predictive Analytics for Retention",
    ],
    featured: true,
  },
  {
    id: "gonative",
    title: "GoNative Marketplace",
    description: "Modern marketplace platform with scalable ecommerce architecture.",
    image: "/projects/gonative.jpg",
    tags: ["Marketplace", "Node.js", "React Native", "Stripe"],
    links: {
      live: "https://gonative.market",
      github: "https://github.com/yourusername/gonative",
    },
    features: [
      "Multi-vendor support",
      "Real-time inventory tracking",
      "Native mobile app support",
      "Secure checkout flow",
    ],
  },
  {
    id: "reno-app",
    title: "Reno App",
    description: "Modern renovation and property management application for homeowners.",
    image: "/projects/reno.jpg",
    tags: ["Productivity", "Next.js", "Firebase", "Design"],
    links: {
      live: "https://renoapp.io",
      github: "https://github.com/yourusername/renoapp",
    },
    features: [
      "Project budgeting & tracking",
      "Contractor communication",
      "3D room visualizer",
      "Document management",
    ],
  },
  {
    id: "cecilia-abua",
    title: "Cecilia Abua Portfolio",
    description: "Personal portfolio and brand showcase for Cecilia Abua.",
    image: "/projects/cecilia.jpg",
    tags: ["Portfolio", "Web Design", "Next.js", "TailwindCSS"],
    links: {
      live: "https://www.ceciliaabua.com",
      github: "https://github.com/Sliver14/cecilia-abua", // Placeholder based on previous context
    },
    features: [
      "Responsive design",
      "Modern aesthetic",
      "Brand storytelling",
      "Interactive elements",
    ],
  },
  {
    id: "esther-odejobi",
    title: "Esther Odejobi Portfolio",
    description: "Personal brand and portfolio website for Esther Odejobi.",
    image: "/projects/esther.jpg",
    tags: ["Portfolio", "Frontend", "React", "Animations"],
    links: {
      live: "https://www.estherodejobi.com",
      github: "https://github.com/Sliver14/esther-odejobi", // Placeholder
    },
    features: [
      "Dynamic content",
      "Smooth animations",
      "Mobile optimized",
      "Contact integration",
    ],
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "SwiftUI"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "LangChain", "Python Scripts", "Vector DBs"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Terraform"],
  },
];

export const EXPERIENCE = [
  {
    role: "SaaS Founder",
    company: "GymPilotPro",
    period: "2023 - Present",
    description: "Built and scaled an AI gym management platform from zero to 50+ enterprise clients.",
    achievements: [
      "Integrated OpenAI for personalized fitness plans",
      "Optimized database performance by 40%",
      "Scaled to 10k+ monthly active users",
    ],
  },
  {
    role: "Full-Stack Product Engineer",
    company: "Freelance / Indie Hacker",
    period: "2021 - 2023",
    description: "Launched multiple successful micro-SaaS products and helped startups build MVP versions.",
    achievements: [
      "Shipped 5+ production-ready apps",
      "Handled full product lifecycle from UI/UX to DevOps",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "Gym Owner, FitLife",
    text: "GymPilotPro completely changed how we handle memberships. The AI assistant is a game changer.",
    avatar: "/avatars/alex.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, TechVibe",
    text: "Working with this developer was the best decision for our MVP. Clean code and brilliant UI.",
    avatar: "/avatars/sarah.jpg",
  },
];

export const CONTACT_INFO = {
  email: "hello@yourportfolio.com",
  socials: [
    { label: "Twitter", href: "https://twitter.com/yourusername" },
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ],
};
