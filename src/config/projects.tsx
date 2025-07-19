import { ReactNode } from "react";

export interface Experience {
  title: string;
  description: string | ReactNode;
  company?: string;
  location?: string;
  type?: "fulltime" | "contract" | "internship" | "freelance";
  isPersonalProject?: boolean;
  bullets?: ReactNode[];
  startDate?: string;
  endDate?: string;
  projects?: Project[];
}

export interface Project {
  title: string;
  oneLiner?: string;
  subtitle: string;
  description: string | ReactNode;
  bullets: ReactNode[];
  date?: string;
  image?: string | null;
  tags?: string[];
  slug?: string;
  company?: string;
  link?: {
    label: string;
    href: string;
  };
  // Experience-specific fields
  position?: string;
  startDate?: string;
  endDate?: string;
}

export const projects: Experience[] = [
  {
    title: "Indie Hacker",
    description:
      "I built a few side projects to learn new technologies and improve my skills.",
    startDate: "Sep 2022",
    endDate: "Present",
    type: "freelance",
    isPersonalProject: true,
    projects: [
      {
        title: "eVault",
        subtitle: "Frontend Developer",
        description: "A secure and private password manager",
        bullets: [
          "Built a secure and private password manager using Next.js, Tailwind CSS, and TypeScript.",
        ],
        tags: [
          "React",
          "FastAPI",
          "PostgreSQL",
          "Docker",
          "Tailwind CSS",
          "TypeScript",
        ],
      },
      {
        title: "FlowyForms",
        subtitle: "Full Stack Developer",
        description: "A platform for creating and sharing forms",
        bullets: [
          "Built a platform for creating and sharing forms using Laravel and React.",
        ],
        tags: ["Laravel", "React", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      },
    ],
  },
  {
    title: "Intermediate Full Stack Developer",
    company: "CGI Information Systems and Management Consultants",
    description:
      "I worked as a full stack developer at CGI Information Systems and Management Consultants.",
    startDate: "Mar 2024",
    endDate: "Present",
    type: "fulltime",
    isPersonalProject: false,
    projects: [
      {
        title: "MEDIS Platform",
        subtitle: "Full Stack Developer",
        description: "Modernized financial reporting systems for the Ministry of Health.",
        bullets: [
          "Spearheaded development of a Vue and Express.js-based financial data extraction tool for the Ministry of Health (HLTH), automating secure data exports from data warehouses to Excel reports and eliminating 2 hours of daily data entry and validation.",
          "Built a new Vue and Express.js-based Role-Based Access Control service for Ministry of Health, where Ministry admins can assign roles for Health Authority employees across BC",
          "Defined a new PostgreSQL schema for storing user roles in said application and coded new RESTful APIs using Node.js, enabling external services and admin users access to create, read, update, and delete roles ",
          "Collaborated with cross-functional team to modernize HLTH’s Excel-based financial reporting processes to create a more user-friendly experience, utilizing webforms and automated data pipelines to streamline data flow, save time and eliminate potential data leaks",
        ],
        tags: ["Vue", "Express.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "AMS Operational Support",
        subtitle: "Platform Developer",
        description:
          "Operational support for TypeScript and Java-based applications at the Ministry of Health.",
        bullets: [
          "Handled operational support for HLTH’s OpenShift and AWS-based applications, ensuring SLA compliance with a 98.9% uptime",
          "Orchestrated Node.js applications deployment on Kubernetes (OpenShift), wrote multi-stage Dockerfiles to reduce image size",
          "Implemented Horizontal Pod Autoscaler (HPA), configured Routes, Services, Network Policies, ConfigMaps, Secrets, and Deployments on OpenShift",
          "Configured Hashicorp Vault for secure secrets management",
          "Wrote Helm charts for applications",
          "Deployed and configured Patroni clusters for PostgreSQL databases, ensuring high availability and data consistency",
          "Deployed and configured MinIO object storage for S3 compatible storage",
          "Designed and implemented CI/CD pipelines, utilizing GitHub Actions and Docker to build and deploy Node.js applications to a Kubernetes platform (OpenShift)",
          "Implemented monitoring and alerts with Sysdig",
        ],
        tags: [
          "Node.js",
          "OpenShift",
          "AWS",
          "Docker",
          "Sysdig",
          "GitHub Actions",
        ],
      },
      {
        title: "Web-based Test Automation",
        subtitle: "QA and Platform Developer",
        description: "Web-based test automation for the Ministry of Social Development and Poverty Reduction.",
        bullets: [
          "Developed and maintained a web-based test automation platform using Playwright, TypeScript, and Node.js, enabling automated testing of Ministry applications",
          "Maintained Helm charts for the platform, ensuring smooth deployment and updates",
          "Implemented CI pipelines with Jenkins to automate regression testing processes",
        ],
        tags: ["Playwright", "TypeScript", "Node.js", "Jenkins"],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Government of British Columbia",
    description:
      "I worked as a full stack developer for the WorkBC branch of the Ministry of Social Development and Poverty Reduction.",
    startDate: "Jan 2023",
    endDate: "Mar 2024",
    type: "fulltime",
    isPersonalProject: false,
    projects: [
      {
        title: "WorkBC Wage Subsidy",
        subtitle: "Full Stack Developer",
        description:
          "Grant management system for the WorkBC Wage Subsidy program.",
        bullets: [
          "Coded a grant management web application in React and Express.js to support the Wage Subsidy initiative, enabling BC business owners to apply and receive subsidies for their employees post-COVID19",
          "Implemented UI/UX flow for the grant management web application",
          "Wrote Jest unit tests for Express.js APIs, achieving 85% coverage",
          "Implemented a queue based email sending system from scratch to send emails notifications to business owners",
        ],
        tags: [
          "React",
          "Express.js",
          "PostgreSQL",
          "Node-Cron",
          "Tailwind CSS",
          "TypeScript",
          "Jest",
        ],
      },
      {
        title: "WorkBC Mobile App",
        subtitle: "Full Stack Developer",
        description: "Mobile application for public access to WorkBC Services",
        bullets: [
          "Upgraded WorkBC mobile app to React-Native 0.64 from React-Native 0.59 (React 18 from React 16),  resulting in a 40% increase in Time-to-Initiative, a 25% decrease in RAM usage and a 70% decrease in hot reload time",
        ],
        tags: ["React-Native", "React", "JavaScript"],
      },
    ],
  },
  {
    title: "Full Stack Developer Co-op",
    company: "Government of British Columbia",
    description:
      "I worked as a full stack developer for the Ministry of Social Development and Poverty Reduction.",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    type: "internship",
    isPersonalProject: false,
    projects: [
      {
        title: "WorkBC Extranet",
        subtitle: "Full Stack Developer",
        description:
          "Extranet for WorkBC staff to manage applications and services",
        bullets: [
          "Developed interactive React components and visual diagrams in a web application for WorkBC contractors, enabling a user-friendly view into Ministry processes",
          "Developed user-friendly React dashboards for Ministry executives, providing clear, real-time visibility into on-going project statuses to support decision making processes",
          "Wrote Jest unit tests for React components and GitHub Actions CI/CD pipelines ",
        ],
        tags: ["React", "JavaScript", "Jest", "GitHub Actions"],
      },
    ],
  },
];
