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
    image: "/gympilotPro.jpeg",
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
    id: "gonative-market-app",
    title: "GoNative Market App",
    description: "Modern marketplace application connecting users with authentic local products and vendors.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80",
    tags: ["Marketplace", "Next.js", "Firebase", "E-commerce"],
    links: {
      live: "https://gonativemarket.com",
      github: "https://github.com/yourusername/gonative-market-app",
    },
    features: [
      "Vendor storefront management",
      "Secure online payments",
      "Real-time order tracking",
      "Product search & recommendations",
    ],
  },
  {
    id: "cecilia-abua",
    title: "Cecilia Abua Portfolio",
    description: "Personal portfolio and brand showcase for Cecilia Abua.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    tags: ["Portfolio", "Web Design", "Next.js", "TailwindCSS"],
    links: {
      live: "https://www.ceciliaabua.com",
      github: "https://github.com/Sliver14/cecilia-abua",
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
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    tags: ["Portfolio", "Frontend", "React", "Animations"],
    links: {
      live: "https://www.estherodejobi.com",
      github: "https://github.com/Sliver14/esther-odejobi",
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
    description: "Helping 50+ business owners automate operations and scale their brands through an AI-driven ecosystem.",
    achievements: [
      "Empowered gym owners with AI-personalized fitness plans",
      "Optimized operational efficiency for enterprise clients",
      "Scaled business infrastructure to 10k+ monthly active users",
    ],
  },
  {
    role: "Full-Stack Product Engineer",
    company: "Freelance / Indie Hacker",
    period: "2021 - 2023",
    description: "Partnering with business owners and brands to ship rapid, high-performance MVPs focused on ROI and strategic growth.",
    achievements: [
      "Shipped 5+ high-ROI products for diverse brands",
      "Consulted founders on product strategy and technical execution",
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
  email: "silverchristopher12@gmail.com",
  socials: [
    { label: "Twitter", href: "https://github.com/Sliver14" },
    { label: "GitHub", href: "https://github.com/Sliver14" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sylver-oyinaga-7409481a9" },
  ],
};
