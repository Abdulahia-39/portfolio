import aiHome from "@/assets/projectpics/aihome.jpeg";
import aiChat from "@/assets/projectpics/aichat.jpeg";
import aiexpense from "@/assets/projectpics/aiexpense.jpeg";
import aiGoals from "@/assets/projectpics/ai1.jpeg";
import shabahero from "@/assets/projectpics/shabahero.png";
import shabaproject from "@/assets/projectpics/shabaproject.png";
import shabablog from "@/assets/projectpics/shabablog.png";
import shabaarticle from "@/assets/projectpics/shabaarticle.png";
import baallogin from "@/assets/projectpics/baallogin.png";
import baaldash from "@/assets/projectpics/baaldash.png";
import baalorders from "@/assets/projectpics/baalorders.png";
import baalinvoice from "@/assets/projectpics/baalinvoice.png";

export const projects = [
  {
    id: 1,
    slug: "ai-finance-assistant",
    title: "AI Finance Assistant",
    category: "Mobile App",
    imgs: [aiHome, aiChat, aiexpense, aiGoals],
    size: "md:col-span-2",
    color: "from-blue-500/20",
    isMobile: true,
    summary:
      "Intelligent personal finance companion that orchestrates AI-assisted budget monitoring and automated goal tracking.",
    timeline: "2026",
    role: "Full stack, Mobile development",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Groq API",
      "Nativewind",
    ],
    highlights: [
      "Implemented a 30% Safety Buffer logic to automate 'Safe-to-Spend' reporting, reducing the risk of monthly overspending.",
      "Engineered a JWT-authenticated REST API to secure financial data across real-time dashboard and goal-tracking modules.",
      "Designed a mobile-first savings vault with dynamic progress visualization and manual fund allocation for goal orchestration.",
    ],
  },
  {
    id: 2,
    slug: "shaba",
    title: "Shaba water company",
    category: "Website",
    imgs: [shabahero, shabaproject, shabablog, shabaarticle],
    isMobile: false,
    size: "md:col-span-1",
    color: "from-purple-500/20",
    summary:
      "This is the website for SHABA, a Public-Private Partnership (PPP) water supply company in Borama, a rapidly expanding city in Somaliland’s Awdal region.",
    timeline: "2025",
    role: "Web development",
    tech: ["Nextjs", "Mongodb", "Tailwindcss", "Strapi CMS"],
    highlights: [
      "Reduced hosting costs by 60% by migrating from the older hostinger wordpress setup to a modern Jamstack architecture with Next.js and Strapi CMS.",
      "Increase performance by eliminating wordpress plugins and themes, optimizing images, and implementing server-side rendering with Next.js.",
      "Added custom blog section with dynamic routing and SEO optimization to improve content discoverability and user engagement.",
    ],
  },
  {
    id: 3,
    slug: "baal-tailor",
    title: "Baal Tailor - Loola ai",
    category: "Desktop",
    size: "md:col-span-1",
    imgs: [baallogin, baaldash, baalorders, baalinvoice],
    isMobile: false,
    color: "from-orange-500/20",
    summary:
      "Baal tailor software is a desktop application designed to streamline the operations of tailoring businesses. It offers features such as customer management, order tracking, inventory management, and invoicing to enhance efficiency and organization. Developed by Loola Ai.",
    timeline: "2026",
    role: "Desktop application development",
    tech: ["Flutter", "Sqlite", "Dart"],
    highlights: [
      "Implemented the invoice generation generation feature using Dart",
      "Developed a robust backup and restore feature to safeguard user data",
      "Worked in a team environment following agile methodologies to ensure timely delivery of project milestones",
    ],
  },
  {
    id: 4,
    slug: "baal-tailor",
    title: "Baal Tailor - Loola ai",
    category: "Desktop",
    size: "md:col-span-2",
    imgs: [baallogin, baaldash, baalorders, baalinvoice],
    isMobile: false,
    color: "from-green-500/20",
    summary:
      "Baal tailor software is a desktop application designed to streamline the operations of tailoring businesses. It offers features such as customer management, order tracking, inventory management, and invoicing to enhance efficiency and organization. Developed by Loola Ai.",
    timeline: "2026",
    role: "Desktop application development",
    tech: ["Flutter", "Sqlite", "Dart"],
    highlights: [
      "Implemented the invoice generation generation feature using Dart",
      "Developed a robust backup and restore feature to safeguard user data",
      "Worked in a team environment following agile methodologies to ensure timely delivery of project milestones",
    ],
  },
];
