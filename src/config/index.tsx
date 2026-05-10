import { ReactNode } from "react";
import { Building2, Heart, Laptop, Server, Users } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
};

export interface Contact {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  grades?: {
    subject: string;
    grade: string;
    year: string;
  }[];
}

export interface Skills {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  name: string;
  image: string;
  title: string;
  quote: string;
  company?: string;
}

export interface TechStack {
  title: string;
  src: string;
}

export interface TechStacks {
  title: string;
  items: TechStack[];
}

export interface ReadingItem {
  tag: "Reading" | "Recent" | "Bookmarked" | "Listening";
  title: string;
  by: string;
  note: string;
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
  position?: string;
  startDate?: string;
  endDate?: string;
}

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

export type Config = {
  name: string;
  fullName: string;
  contactEmail: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    resume?: string;
  };
  social: SocialLinks;
  projects: Experience[];
  education: {
    items: Education[];
    title: string;
    subtitle: string;
  };
  skills: {
    items: Skills[];
    title: ReactNode;
    description: ReactNode;
  };
  testimonials: {
    items: Testimonial[];
    title: string;
    subtitle: string;
  };
  techStack: TechStacks;
  reading: {
    items: ReadingItem[];
    title: string;
    subtitle: string;
  };
  contact: Contact;
};

// ─── Configuration ────────────────────────────────────────────────────────────

export const config: Config = {
  name: "Brian",
  fullName: "Dinh Nguyen (Brian) Pham",
  contactEmail: "nguyenphamswork@gmail.com",

  hero: {
    title: "Hi, I'm Brian!",
    subtitle:
      "I have 5 years of experience in full stack development (and a bit of devops), with a strong background in govtech and healthcare.",
    backgroundImage: "/hero.png",
    resume:
      "https://docs.google.com/document/d/1egPrrYQa2DV5VpSuwI9OgckHvKayIHWy/edit?usp=sharing&ouid=111157184374471284633&rtpof=true&sd=true",
  },

  social: {
    github: {
      url: "https://github.com/npham49",
      ariaLabel: "GitHub",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/dinhnguyenpham/",
      ariaLabel: "LinkedIn",
    },
  },

  // ── Projects / Experience ──────────────────────────────────────────────────

  projects: [
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
          description:
            "Modernized financial reporting systems for the Ministry of Health.",
          bullets: [
            "Spearheaded development of a Vue and Express.js-based financial data extraction tool for the Ministry of Health (HLTH), automating secure data exports from data warehouses to Excel reports and eliminating 2 hours of daily data entry and validation.",
            "Built a new Vue and Express.js-based Role-Based Access Control service for Ministry of Health, where Ministry admins can assign roles for Health Authority employees across BC",
            "Defined a new PostgreSQL schema for storing user roles in said application and coded new RESTful APIs using Node.js, enabling external services and admin users access to create, read, update, and delete roles ",
            "Collaborated with cross-functional team to modernize HLTH's Excel-based financial reporting processes to create a more user-friendly experience, utilizing webforms and automated data pipelines to streamline data flow, save time and eliminate potential data leaks",
          ],
          tags: [
            "Vue",
            "Express.js",
            "PostgreSQL",
            "Tailwind CSS",
            "TypeScript",
          ],
        },
        {
          title: "AMS Operational Support",
          subtitle: "Platform Developer",
          description:
            "Operational support for TypeScript and Java-based applications at the Ministry of Health.",
          bullets: [
            "Handled operational support for HLTH's OpenShift and AWS-based applications, ensuring SLA compliance with a 98.9% uptime",
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
          description:
            "Web-based test automation for the Ministry of Social Development and Poverty Reduction.",
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
  ],

  // ── Education ─────────────────────────────────────────────────────────────

  education: {
    title: "Education Journey",
    subtitle: "The foundation of my knowledge and experiences",
    items: [
      {
        school: "University of Victoria",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2019",
        endDate: "2026",
        description:
          "Hired for full-time position in second-year, completed Bachelor degree part-time.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6be0mte8xp1mx9Dj_UWWwdPyxuGNrhW0MmQ&s",
      },
    ],
  },

  // ── Skills ────────────────────────────────────────────────────────────────

  skills: {
    title: (
      <span>
        What I bring <br className="sm:hidden" /> to the table
      </span>
    ),
    description: "Technical skills and soft skills",
    items: [
      {
        title: "Full Stack Development",
        description: "Proficient in both frontend and backend development",
        icon: <Laptop />,
      },
      {
        title: "DevOps",
        description: "Experience with CI/CD pipelines and containerization",
        icon: <Server />,
      },
      {
        title: "Public Service",
        description:
          "Experience with developing and delivering digital public services",
        icon: <Building2 />,
      },
      {
        title: "Healthcare",
        description: "Experience with healthcare systems",
        icon: <Heart />,
      },
      {
        title: "Stakeholder Management",
        description:
          "Experience with stakeholder management and communication",
        icon: <Users />,
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────

  testimonials: {
    title: "Kind Words",
    subtitle: "This is what the peeps say about me",
    items: [
      {
        name: " Rafael Solorzano",
        image:
          "https://booleanstrings.com/2021/10/06/linkedin-profile-seo-how-to-be-found/",
        title: "Senior Software Engineer",
        quote:
          "Brian is an outstanding professional who always went above and beyond to deliver high-quality work.",
        company: "Government of British Columbia",
      },
    ],
  },

  // ── Tech Stack ────────────────────────────────────────────────────────────

  techStack: {
    title: "Tech Stack",
    items: [
      {
        title: "Next.js",
        src: "https://cdn.svglogos.dev/logos/nextjs-icon.svg",
      },
      {
        title: "React",
        src: "https://cdn.svglogos.dev/logos/react.svg",
      },
      {
        title: "Vue.js",
        src: "https://cdn.svglogos.dev/logos/vue.svg",
      },
      {
        title: "Nest.js",
        src: "https://cdn.svglogos.dev/logos/nestjs.svg",
      },
      {
        title: "Express.js",
        src: "https://cdn.svglogos.dev/logos/express.svg",
      },
      {
        title: "Playwright",
        src: "https://cdn.svglogos.dev/logos/playwright.svg",
      },
      {
        title: "Jest",
        src: "https://cdn.svglogos.dev/logos/jest.svg",
      },
      {
        title: "Tailwind CSS",
        src: "https://cdn.svglogos.dev/logos/tailwindcss-icon.svg",
      },
      {
        title: "Material UI",
        src: "https://cdn.svglogos.dev/logos/material-ui.svg",
      },
      {
        title: "TypeScript",
        src: "https://cdn.svglogos.dev/logos/typescript-icon.svg",
      },
      {
        title: "Node.js",
        src: "https://cdn.svglogos.dev/logos/nodejs-icon.svg",
      },
      {
        title: "PostgreSQL",
        src: "https://cdn.svglogos.dev/logos/postgresql.svg",
      },
      {
        title: "Docker",
        src: "https://cdn.svglogos.dev/logos/docker-icon.svg",
      },
      {
        title: "Kubernetes",
        src: "https://cdn.svglogos.dev/logos/kubernetes.svg",
      },
      {
        title: "AWS",
        src: "https://cdn.svglogos.dev/logos/aws.svg",
      },
      {
        title: "OpenShift",
        src: "https://cdn.svglogos.dev/logos/openshift.svg",
      },
    ],
  },

  // ── Reading ───────────────────────────────────────────────────────────────

  reading: {
    title: "currently reading",
    subtitle: "A small public bookshelf. Not curated for taste — just whatever is open on my desk right now.",
    items: [
      {
        tag: "Reading" as const,
        title: "Designing Data-Intensive Applications",
        by: "Martin Kleppmann",
        note: "Chapter on distributed systems consensus has been a recurring reference at work.",
      },
      {
        tag: "Recent" as const,
        title: "Patroni operations playbook",
        by: "Internal docs",
        note: "Notes from running Patroni for a Ministry-scale Postgres cluster.",
      },
      {
        tag: "Bookmarked" as const,
        title: "The Twelve-Factor App",
        by: "Adam Wiggins",
        note: "Still the cleanest baseline I hand to junior devs joining the team.",
      },
      {
        tag: "Listening" as const,
        title: "Software Engineering Daily",
        by: "Podcast",
        note: "Long-form ops & infra interviews on the commute.",
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────

  contact: {
    title: "Let's Connect",
    subtitle:
      "I'm always down for meeting new people and exploring new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out!",
    buttonText: "Contact Me",
    buttonLink: "mailto:nguyenphamswork@gmail.com",
  },
};
