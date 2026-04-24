import { Project } from '@/types'
 
export const projects: Project[] = [
    {
        id: '1',
        title: 'AgriVision AI — Crop Disease Detection Platform',
        slug: 'agrivision-ai-crop-disease-detection',
        description: 'End-to-end agricultural AI platform where farmers upload crop images and receive ML-powered disease diagnoses in under 60 seconds',
        longDescription: 'AgriVision AI is a full-stack agricultural decision-support system built to reduce crop disease diagnosis time from days to under 60 seconds. Farmers upload crop images through a React frontend, which triggers a Node.js (NestJS) backend to orchestrate ML inference via a Python FastAPI service running an EfficientNet model trained on 38+ disease classes. Diagnosis results include confidence scores and expert verification flows. The backend features 8 domain-separated service modules, JWT authentication with RBAC for farmer and expert roles, email verification, password reset, and composite-indexed PostgreSQL schemas optimized for scan history, disease records, and reporting.',
        category: 'fullstack',
        tags: ['Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Docker', 'TypeScript', 'Python', 'AI/ML'],
        images: ['/images/projects/agrivision-1.jpg', '/images/projects/agrivision-2.jpg'],
        thumbnail: '/images/projects/agrivision-thumb.jpg',
        githubUrl: 'https://github.com/Subashh-Chaudhary/fyp',
        featured: true,
        completedAt: '2025-06-01',
        technologies: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'JWT', 'EfficientNet'],
        role: 'Full Stack Developer',
        challenges: [
            'Orchestrating HTTP multipart calls from Node.js to FastAPI ML inference service reliably under varying image sizes',
            'Designing role-based access control (farmer/expert) with email verification and password reset flows from scratch',
            'Building composite-indexed PostgreSQL schemas for disease records, scan history, and reports to keep query performance fast at scale',
        ],
        outcomes: [
            'Reduced crop disease diagnosis turnaround from several days to under 60 seconds',
            'Achieved zero authentication-related vulnerabilities across automated security scans',
            'Cut p95 API response time by 35% through parameterized queries and composite indexes on scan and prediction tables',
            'Integrated ML inference service covering 38+ disease classes via EfficientNet/timm model',
        ],
    },
    {
        id: '2',
        title: 'Nepal GeoSearch — OSM Location Resolution Infrastructure',
        slug: 'nepal-geosearch-location-resolution',
        description: 'Containerized microservices platform normalizing 1M+ OpenStreetMap records for Nepal into a structured REST API and embeddable location search widget',
        longDescription: 'Nepal GeoSearch is a geospatial infrastructure platform built to ingest, normalize, and serve OpenStreetMap data for Nepal across a 6-service microservices architecture. Raw OSM planet tables are transformed into 4 clean domain schemas — admin_boundaries, places, named_roads, and POI — via normalization SQL, then annotated with Nepal\'s full 4-level administrative hierarchy (province, district, municipality, ward) covering all 77 districts and 753 local government units using PostGIS spatial enrichment. Location search is served through a REST API layer backed by Elasticsearch, with a Traefik reverse proxy routing between services. An embeddable React.js widget exposes structured location resolution to external consumers.',
        category: 'api',
        tags: ['Python', 'Go', 'PostGIS', 'Elasticsearch', 'Docker', 'Traefik', 'React.js', 'OpenStreetMap'],
        images: ['/images/projects/geosearch-1.jpg', '/images/projects/geosearch-2.jpg'],
        thumbnail: '/images/projects/geosearch-thumb.jpg',
        githubUrl: 'https://github.com/Subashh-Chaudhary/nepal-location-resolution-service',
        featured: true,
        completedAt: '2025-03-01',
        technologies: ['Python', 'Go', 'React.js', 'PostgreSQL', 'PostGIS', 'Elasticsearch', 'Docker', 'Traefik', 'osm2pgsql'],
        role: 'Backend & Infrastructure Engineer',
        challenges: [
            'Designing health-aware startup dependencies across 6 services (REST API, async sync worker, Elasticsearch, PostGIS, Traefik, React widget)',
            'Writing normalization SQL to transform raw OSM planet tables into 4 clean, query-optimized domain schemas',
            'Annotating 1M+ location records with Nepal\'s full 4-level administrative hierarchy using PostGIS spatial joins',
        ],
        outcomes: [
            'Normalized 1M+ OpenStreetMap geospatial records into structured, queryable domain schemas',
            'Cut average spatial query execution time by ~70% using GiST, GIN, and B-tree indexes with pg_trgm trigram support',
            'Covered all 77 districts and 753 local government units of Nepal with spatial hierarchy annotation',
            'Delivered embeddable React.js location search widget consumable by external applications',
        ],
    },
    {
        id: '3',
        title: 'Brain Tumor Detection System',
        slug: 'brain-tumor-detection-system',
        description: 'AI-assisted full-stack diagnostic platform where users upload MRI scans and receive YOLO-powered tumor detection with confidence scores and annotated output images',
        longDescription: 'Brain Tumor Detection System is an AI-assisted medical imaging platform combining a Next.js frontend, a NestJS API, and a Python FastAPI + YOLO inference microservice. Authenticated users upload brain scan images which are stored in Cloudinary, forwarded to the ML service for YOLO-based tumor detection, and returned with confidence scores and bounding-box-annotated output images. The backend orchestrates the full pipeline — Cloudinary upload, ML inference request, result persistence in PostgreSQL via TypeORM — and exposes modular REST API domains for scans, predictions, reports, histories, treatments, experts, and users. Auth includes JWT, Google OAuth hooks, email verification, and password reset flows.',
        category: 'fullstack',
        tags: ['NestJS', 'Next.js', 'FastAPI', 'YOLO', 'PostgreSQL', 'Cloudinary', 'TypeScript', 'Python'],
        images: ['/images/projects/btds-1.jpg', '/images/projects/btds-2.jpg'],
        thumbnail: '/images/projects/btds-thumb.jpg',
        githubUrl: 'https://github.com/Subashh-Chaudhary/BTDS',
        featured: true,
        completedAt: '2025-09-01',
        technologies: ['Next.js', 'NestJS', 'TypeScript', 'FastAPI', 'Python', 'YOLO', 'PostgreSQL', 'TypeORM', 'Cloudinary', 'JWT', 'Passport.js', 'Zustand', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        challenges: [
            'Orchestrating a multi-step inference pipeline: Cloudinary upload → ML inference → output image re-upload → database persistence in a single request lifecycle',
            'Implementing production-style auth (JWT, Google OAuth, email verification, password reset, refresh tokens) with centralized response handling and global exception filters',
            'Designing modular NestJS domain architecture across 8+ entities (scans, predictions, reports, histories, treatments, experts, users) with paginated and filterable endpoints',
        ],
        outcomes: [
            'Delivered end-to-end scan-to-prediction pipeline from upload to annotated result in a single user interaction',
            'Implemented complete auth suite: JWT, Google OAuth, email verification, password reset, and refresh token rotation',
            'Structured REST API surface with 30+ endpoints across modular clinical domains',
            'Integrated YOLO inference service returning tumor class, confidence score, and bounding-box output image per scan',
        ],
    },
    {
        id: '4',
        title: 'Integrated Content Management System (ICMS)',
        slug: 'integrated-content-management-system',
        description: 'Government-grade CMS built with NestJS and Next.js, reducing manual content update cycles by ~60% for public service information across 5,000+ citizen users',
        longDescription: 'The ICMS was built at Ninja Infosys for a government agency client to streamline how public service content is created, updated, and published. The system replaced a manual, error-prone update process with a structured NestJS backend and Next.js frontend, enabling role-based content management across multiple teams. The backend features multi-tenant data isolation, JWT authentication, RBAC across 3 user roles, and optimized PostgreSQL schemas. The frontend provides an intuitive admin interface for non-technical government staff.',
        category: 'fullstack',
        tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT', 'RBAC'],
        images: ['/images/projects/icms-1.jpg'],
        thumbnail: '/images/projects/icms-thumb.jpg',
        featured: false,
        completedAt: '2025-01-01',
        technologies: ['Node.js', 'NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Nginx', 'JWT'],
        role: 'Backend Lead / Full Stack Developer',
        challenges: [
            'Designing multi-tenant data isolation across 3 distinct user roles with zero cross-tenant data leakage',
            'Replacing a fully manual content update workflow with an automated CMS without disrupting live government services',
            'Maintaining 99%+ uptime on production Ubuntu server with Nginx reverse proxy during iterative deployments',
        ],
        outcomes: [
            'Reduced manual content update cycles by approximately 60%',
            'Served 5,000+ citizen users with zero reported security incidents post-deployment',
            'Sustained 99%+ uptime across the hosted service on production infrastructure',
        ],
    },
    {
        id: '5',
        title: 'Citizen Charter Platform',
        slug: 'citizen-charter-platform',
        description: 'Digital government service platform built with Go and React.js, exposing 20+ REST API endpoints across 15+ workflows and cutting citizen inquiry resolution time by ~40%',
        longDescription: 'The Citizen Charter Platform was built at Ninja Infosys to digitize and streamline how citizens interact with government services. The Go backend exposes a clean REST API surface of 20+ endpoints covering 15+ distinct government service workflows. The React.js frontend allows citizens to browse available services and complete inquiries digitally rather than in person. The platform significantly reduced the average time to resolve a citizen inquiry through structured workflows and digital request routing.',
        category: 'fullstack',
        tags: ['Go', 'React.js', 'REST API', 'PostgreSQL', 'Docker'],
        images: ['/images/projects/citizen-charter-1.jpg'],
        thumbnail: '/images/projects/citizen-charter-thumb.jpg',
        featured: false,
        completedAt: '2024-10-01',
        technologies: ['Go', 'React.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Nginx'],
        role: 'Full Stack Developer',
        challenges: [
            'Modeling 15+ varied government service workflows into a unified, extensible API data model',
            'Building the Go REST API backend from scratch while simultaneously shipping the React.js frontend under sprint deadlines',
        ],
        outcomes: [
            'Reduced average citizen inquiry resolution time by approximately 40%',
            'Delivered 20+ RESTful API endpoints covering 15+ government service workflows',
            'Shipped within a single sprint cycle as part of a two-person team',
        ],
    },
]
 
export const featuredProjects = projects.filter((project) => project.featured)
 
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug)
}
 
export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter((project) => project.category === category)
}