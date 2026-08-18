export interface Project {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'Web Development' | 'Mobile App' | 'Platform Engineering' | 'AI/ML' | 'Game Development' | 'SaaS'
  status: 'Live' | 'In Development' | 'Completed'
  url?: string
  github?: string
  image?: string
  highlights: string[]
  period: string
}

export const projects: Project[] = [
  {
    title: "BTS Infrastructure Platform",
    description: "Production Kubernetes platform on bare-metal Proxmox, fully managed via GitOps from a single Git repository.",
    longDescription: "Designed and built a production-grade Kubernetes platform running on a 3-node Proxmox cluster. The entire stack is declaratively managed via Flux CD GitOps, with infrastructure-as-code for VM provisioning and SOPS/age encryption for secrets. Supports self-hosted GitLab CI/CD, Vaultwarden, PostgreSQL, S3-compatible object storage, and a full observability stack.",
    technologies: [
      "Kubernetes",
      "Talos Linux",
      "Proxmox",
      "Flux CD",
      "Terraform/CDKTF",
      "Helm",
      "SOPS/age",
      "MetalLB",
      "Traefik",
      "Longhorn",
      "CloudNativePG",
      "Prometheus",
      "Grafana"
    ],
    category: "Platform Engineering",
    status: "Live",
    github: "https://github.com/bwads001/bts-infra",
    highlights: [
      "7-node Talos Linux Kubernetes cluster with 3 HA control planes across 3 bare-metal Proxmox hosts",
      "Full GitOps pipeline: Flux CD syncing HelmReleases from Git with SOPS/age secret encryption",
      "Infrastructure-as-code: CDKTF/Terraform for VM provisioning with cloud-init automation",
      "Self-hosted services: GitLab CE, Vaultwarden, MinIO, CloudNativePG PostgreSQL",
      "Complete observability: Prometheus, Grafana, Alertmanager with persistent storage",
      "Automated disaster recovery: entire platform rebuildable from Git in under 1 hour"
    ],
    period: "2025 - Present"
  },
  {
    title: "Bespoke Tech Solutions",
    description: "Enterprise-grade software development company providing custom solutions for businesses of all sizes.",
    longDescription: "Leading the technical architecture and development for a full-service software development company. Built the company website, established development workflows, and implemented AI-driven solutions for clients.",
    technologies: [
      "Next.js",
      "TypeScript", 
      "Tailwind CSS",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "AI/ML Integration"
    ],
    category: "Web Development",
    status: "Live",
    url: "https://mybts.io/",
    image: "/images/my-bts.png",
    highlights: [
      "Built responsive company website with modern tech stack",
      "Implemented AI consulting services and integration workflows", 
      "Established CI/CD pipelines and development best practices",
      "Led custom software development for enterprise clients",
      "Created platform integration solutions for various business systems"
    ],
    period: "2023 - Present"
  },
  {
    title: "LinkMy.Bio",
    description: "Bio link management platform for social media creators and professionals.",
    longDescription: "A comprehensive bio link platform that allows users to create custom landing pages for their social media profiles.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel"
    ],
    category: "SaaS",
    status: "Live",
    url: "https://linkmy.bio/",
    image: "/images/link-my-bio.png",
    highlights: [
      "Built user-friendly bio link creation platform",
      "Implemented real-time analytics and link tracking",
      "Created responsive design system with custom themes",
      "Integrated payment processing for premium features"
    ],
    period: "2024"
  },
  {
    title: "Dynamic Resume Generator",
    description: "This website - a Next.js resume platform with dynamic PDF generation.",
    longDescription: "A modern resume website built with Next.js that generates professional PDFs dynamically from structured data, ensuring the resume is always in sync with the latest information.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS", 
      "React PDF",
      "Shadcn/ui",
      "Vercel"
    ],
    category: "Web Development",
    status: "Live",
    url: "https://bryanwadsworth.com",
    github: "https://github.com/bwads001/resume-app",
    image: "/images/bryan-wadsworth-resume.png",
    highlights: [
      "Dynamic PDF generation from structured data using React PDF",
      "Server-side rendering with Next.js 15 App Router",
      "Professional responsive design with dark/light mode",
      "Automated CI/CD deployment to Vercel",
      "SEO optimized with dynamic metadata generation"
    ],
    period: "2024"
  }
  // TODO: Add more projects as needed
  // Examples you might want to add:
  // - Mobile apps you've built
  // - Game development projects
  // - Platform engineering tools
  // - AI/ML projects
  // - Open source contributions
] 