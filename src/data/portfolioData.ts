import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Rivera",
    headline: "Senior Full-Stack Engineer & Distributed Systems Architect",
    bio: "Building resilient distributed architectures, real-time reactive platforms, and ultra-crisp web experiences. Obsessed with sub-50ms latency, developer ergonomics, and micro-interactions.",
    availabilityStatus: "Open to full-time staff engineering roles & advisory",
    location: "San Francisco, CA (or Remote)",
    email: "alex.rivera.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#experience",
  },
  metrics: [
    { label: "Production RPS", value: "138,400" },
    { label: "P99 Latency SLA", value: "<18ms" },
    { label: "GitHub Stars", value: "4,820" },
    { label: "Lighthouse Score", value: "99.4" },
  ],
  projects: [
    {
      id: "project-1",
      title: "HyperPulse: Distributed Stream Engine",
      description:
        "High-throughput real-time telemetry processing pipeline capable of ingesting and deduplicating 250,000 events/sec with sub-10ms delivery latency.",
      impactMetrics: "Reduced p99 pipeline latency by 64% and cut infrastructure compute costs by $180k/yr.",
      technologies: ["Go", "Apache Kafka", "ClickHouse", "Rust", "Docker", "gRPC"],
      githubUrl: "https://github.com/example/hyperpulse",
      liveUrl: "https://hyperpulse.demo",
      featured: true,
      bentoSpan: "col-span-2",
    },
    {
      id: "project-2",
      title: "ChronosDB: Time-Series Vector DB",
      description:
        "Specialized hybrid storage engine coupling embeddings index with time-series indexing for instant multi-modal semantic retrieval.",
      impactMetrics: "10.4x faster cosine similarity lookups over 52M high-dimensional vectors.",
      technologies: ["Rust", "PostgreSQL", "pgvector", "TypeScript", "Next.js"],
      githubUrl: "https://github.com/example/chronos-db",
      liveUrl: "https://chronos.demo",
      featured: true,
      bentoSpan: "col-span-1",
    },
    {
      id: "project-3",
      title: "Aura UI: Precision Design System",
      description:
        "Zero-runtime headless component library with spring physics, full keyboard navigation, accessible ARIA primitives, and fluid gestures.",
      impactMetrics: "Adopted across 14 enterprise micro-frontends with 99.8% test coverage.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      githubUrl: "https://github.com/example/aura-ui",
      liveUrl: "https://aura-ui.demo",
      featured: true,
      bentoSpan: "col-span-1",
    },
    {
      id: "project-4",
      title: "Synthetix Cloud: Multi-Tenant AI Gateway",
      description:
        "Unified proxy orchestration layer with semantic prompt caching, token rate limiting, fallback circuit breakers, and streaming evaluations.",
      impactMetrics: "Maintained 99.96% uptime across 3 global regions with 42.8% LLM API spend reduction.",
      technologies: ["Next.js 14", "Node.js", "Redis", "Cloudflare Workers", "OpenAI"],
      githubUrl: "https://github.com/example/synthetix-cloud",
      liveUrl: "https://synthetix.demo",
      featured: true,
      bentoSpan: "col-span-2",
    },
    {
      id: "project-5",
      title: "DevGraph: Codebase Visualizer",
      description:
        "Interactive AST dependency graph mapping imports, cyclic dependencies, and bundle weight hot-spots in real-time WebGL canvas.",
      impactMetrics: "Visualizes monorepos with 100k+ modules in under 1.8 seconds at 60 FPS.",
      technologies: ["TypeScript", "Three.js", "WebGL", "Vite", "D3.js"],
      githubUrl: "https://github.com/example/devgraph",
      liveUrl: "https://devgraph.demo",
      featured: false,
      bentoSpan: "col-span-3",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React 19 / Next.js 14", proficiency: "Expert", iconName: "Atom" },
        { name: "TypeScript (Strict)", proficiency: "Expert", iconName: "Code2" },
        { name: "Tailwind CSS / Shading", proficiency: "Expert", iconName: "Palette" },
        { name: "Framer Motion & WebGL", proficiency: "Advanced", iconName: "Sparkles" },
        { name: "Performance & Web Vitals", proficiency: "Expert", iconName: "Gauge" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js / Express / Fastify", proficiency: "Expert", iconName: "Server" },
        { name: "Go (Golang)", proficiency: "Advanced", iconName: "Cpu" },
        { name: "Rust (Async)", proficiency: "Intermediate", iconName: "Cog" },
        { name: "GraphQL & RESTful APIs", proficiency: "Expert", iconName: "Network" },
        { name: "Microservices & gRPC", proficiency: "Advanced", iconName: "Workflow" },
      ],
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "PostgreSQL & Prisma / Drizzle", proficiency: "Expert", iconName: "Database" },
        { name: "Redis Caching & PubSub", proficiency: "Expert", iconName: "Layers" },
        { name: "ClickHouse & Timescale", proficiency: "Advanced", iconName: "BarChart3" },
        { name: "AWS (ECS, Lambda, SQS, S3)", proficiency: "Advanced", iconName: "Cloud" },
        { name: "Cloudflare Edge / Vercel", proficiency: "Expert", iconName: "Globe" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker & Containerization", proficiency: "Expert", iconName: "Box" },
        { name: "Kubernetes & Helm", proficiency: "Intermediate", iconName: "Boxes" },
        { name: "CI/CD (GitHub Actions)", proficiency: "Expert", iconName: "GitBranch" },
        { name: "Testing (Vitest, Playwright)", proficiency: "Expert", iconName: "CheckCircle2" },
        { name: "Monitoring (Datadog, OpenTelemetry)", proficiency: "Advanced", iconName: "Activity" },
      ],
    },
  ],
  experience: [
    {
      company: "Kinesis Data Platforms",
      role: "Staff Full-Stack Engineer",
      period: "2023 - Present",
      location: "San Francisco, CA (Hybrid)",
      highlights: [
        "Architected multi-tenant model orchestration engine serving 120M daily inferences with dynamic load balancing.",
        "Engineered the enterprise analytics dashboard using Next.js App Router, decreasing TTI from 4.1s to 750ms.",
        "Mentored a team of 9 full-stack engineers and established strict CI quality gates and automated security scanning.",
      ],
      techUsed: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Kafka", "Tailwind CSS"],
    },
    {
      company: "Stratosphere Cloud Corp",
      role: "Senior Full-Stack Developer",
      period: "2020 - 2023",
      location: "Austin, TX (Remote)",
      highlights: [
        "Led migration from legacy monolithic Rails platform to modern microservices with Go and Next.js, saving 35% in cloud overhead.",
        "Designed real-time collaborative workspace with operational transforms and WebSocket sync supporting 5k concurrent collaborators per room.",
        "Built extensible design system and reusable component registry utilized across 8 production web applications.",
      ],
      techUsed: ["React", "Node.js", "TypeScript", "Redis", "Docker", "AWS"],
    },
    {
      company: "Meridian Labs",
      role: "Full-Stack Software Engineer",
      period: "2018 - 2020",
      location: "Seattle, WA",
      highlights: [
        "Delivered 12+ mission-critical client platforms spanning fintech, healthtech, and logistics with zero security vulnerabilities.",
        "Implemented end-to-end automated testing suites with Playwright and Jest, increasing test coverage from 42% to 91%.",
        "Pioneered responsive mobile-first architecture standards adopted across all company web deliverables.",
      ],
      techUsed: ["JavaScript", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker"],
    },
  ],
};
