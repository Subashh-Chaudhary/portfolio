export const seo = {
  siteName: "Subash Tharu - Node.js Backend Engineer & Full Stack Developer",
  siteUrl: "https://subashtharu.com.np",
  siteDescription:
    "Portfolio of Subash Tharu — Node.js Backend Engineer and Full Stack Developer from Nepal. 2.5 years building scalable REST APIs, microservices, and production-grade systems using NestJS, TypeScript, PostgreSQL, and Docker.",
 
  defaultKeywords: [
    // Identity
    "Subash Tharu", "Subash C Tharu", "Subash Chaudhary", "SubashhChaudhary",
    "Subash Tharu Developer", "Subash Tharu Nepal", "subashtharu.com.np",
 
    // Core role keywords
    "Node.js Developer Nepal", "Node.js Backend Developer Nepal",
    "Backend Developer Nepal", "Backend Engineer Nepal",
    "Full Stack Developer Nepal", "Full Stack Engineer Nepal",
    "NestJS Developer Nepal", "Express.js Developer Nepal",
    "TypeScript Developer Nepal", "JavaScript Developer Nepal",
    "REST API Developer Nepal", "API Engineer Nepal",
 
    // Specific tech stack
    "NestJS Developer", "Node.js NestJS Developer",
    "PostgreSQL Developer Nepal", "Docker Developer Nepal",
    "Microservices Developer Nepal", "PostGIS Developer Nepal",
    "React.js Developer Nepal", "Next.js Developer Nepal",
    "React Native Developer Nepal",
 
    // Hiring intent
    "Hire Node.js Developer Nepal", "Hire Backend Developer Nepal",
    "Hire Full Stack Developer Nepal", "Hire NestJS Developer",
    "Hire Remote Developer Nepal", "Hire TypeScript Developer Nepal",
    "Remote Backend Engineer Nepal", "Remote Software Engineer Nepal",
    "Freelance Backend Developer Nepal", "Freelance Node.js Developer",
    "Offshore Developer Nepal", "Nepal Developer for Hire",
 
    // Specialization
    "REST API Design Nepal", "Microservices Architecture Nepal",
    "Scalable Backend Nepal", "Database Optimization Nepal",
    "Government Platform Developer Nepal", "GeoSpatial Developer Nepal",
    "PostGIS Elasticsearch Developer", "Docker Nginx Deployment Nepal",
 
    // AI / ML intersection
    "AI Integration Developer Nepal", "ML Backend Developer Nepal",
    "FastAPI NestJS Integration", "AI/ML Enthusiast Nepal",
    "Crop Disease Detection AI Nepal", "AgriTech Developer Nepal",
 
    // DevOps
    "Docker Developer Nepal", "Linux Server Deployment Nepal",
    "Nginx Reverse Proxy Nepal", "CI/CD Developer Nepal",
    "DevOps Engineer Nepal", "Server Deployment Nepal",
 
    // Portfolio & career
    "Backend Developer Portfolio Nepal", "Node.js Portfolio Nepal",
    "Full Stack Portfolio Nepal", "Software Engineer Portfolio Nepal",
    "Developer Portfolio Nepal", "Engineering Portfolio Nepal",
    "IT Professional Nepal", "Tech Talent Nepal",
    "Software Development Nepal", "Startup Developer Nepal",
    "SaaS Developer Nepal", "MERN Developer Nepal",
  ] as string[],
 
  author: {
    name: "Subash Tharu",
    url: "https://subashtharu.com.np",
    twitter: "https://x.com/Suv_Aas",
    github: "https://github.com/Subashh-Chaudhary",
    linkedin: "https://www.linkedin.com/in/developer-subash/",
  },
 
  // OG images and logo paths (Next.js will prepend the base URL from metadataBase)
  ogImage: "/images/og/og-image.jpg",
  twitterImage: "/images/og/twitter-card.jpg",
  logo: "/android-chrome-512x512.png",
  socialBanner: "/images/og/social-banner.jpg",
 
  pages: {
    home: {
      title: "Subash Tharu — Node.js Backend Engineer & Full Stack Developer",
      description:
        "Node.js backend engineer from Nepal with 2.5 years building scalable REST APIs, microservices, and full stack systems. Specializing in NestJS, TypeScript, PostgreSQL, and Docker. Explore my projects and experience.",
      keywords: [
        "nodejs backend developer portfolio nepal",
        "nestjs developer portfolio",
        "full stack developer portfolio nepal",
        "typescript developer nepal portfolio",
        "backend engineer portfolio nepal",
        "subash tharu portfolio",
      ] as string[],
    },
 
    about: {
      title: "About Subash Tharu — Node.js Backend Engineer, Nepal",
      description:
        "Backend engineer who started in frontend and evolved into scalable systems — NestJS, PostgreSQL, Docker, and microservices. Building government platforms, AI tools, and geospatial infrastructure in Nepal.",
      keywords: [
        "subash tharu about",
        "node.js backend engineer nepal bio",
        "full stack developer nepal background",
        "software engineer profile nepal",
        "backend developer journey nepal",
        "nestjs developer background",
      ] as string[],
    },
 
    work: {
      title: "Projects & Work — Subash Tharu",
      description:
        "Production projects including AgriVision AI (crop disease detection in 60s), Nepal GeoSearch (1M+ OSM records, PostGIS + Elasticsearch), and government citizen platforms serving 5,000+ users.",
      keywords: [
        "nodejs backend projects nepal",
        "nestjs api projects",
        "agrivision ai crop disease detection",
        "nepal geosearch osm postGIS",
        "government platform developer nepal",
        "full stack projects portfolio nepal",
        "docker microservices projects",
      ] as string[],
    },
 
    experience: {
      title: "Work Experience — Subash Tharu",
      description:
        "2.5 years of professional experience at Ninja Infosys Pvt. Ltd. — building REST APIs, microservices, and full stack applications for government clients across Nepal.",
      keywords: [
        "subash tharu work experience",
        "ninja infosys developer nepal",
        "backend developer experience nepal",
        "node.js developer experience",
        "government platform developer nepal",
        "software engineer work history nepal",
      ] as string[],
    },
 
    skills: {
      title: "Skills & Tech Stack — Subash Tharu",
      description:
        "Node.js · NestJS · Express.js · TypeScript · PostgreSQL · MySQL · Redis · PostGIS · Elasticsearch · React.js · Next.js · Docker · Nginx · Linux · Go · FastAPI · JWT · REST APIs.",
      keywords: [
        "node.js nestjs typescript skills",
        "postgresql docker nginx skills nepal",
        "backend developer tech stack nepal",
        "full stack skills nepal",
        "rest api microservices skills",
        "react next.js developer skills",
      ] as string[],
    },
 
    contact: {
      title: "Hire or Contact Subash Tharu — Backend & Full Stack Developer",
      description:
        "Available for full-time, freelance, and remote backend or full stack roles. Based in Lalitpur, Nepal. Reach out to discuss Node.js, NestJS, REST APIs, or full stack projects.",
      keywords: [
        "hire node.js developer nepal",
        "hire backend developer nepal",
        "hire nestjs developer",
        "hire remote developer nepal",
        "contact subash tharu",
        "freelance backend developer nepal",
        "hire full stack developer nepal",
      ] as string[],
    },
  },
};
 
export type SEOConfig = typeof seo;