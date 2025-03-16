// Types
import { ReactNode } from "react";

export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
  // Extendable - add more social links here as needed
};

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
  location?: string;
  type?: "fulltime" | "contract" | "internship" | "freelance";
  startDate?: string;
  endDate?: string;
  isPersonalProject?: boolean;
}

export type Config = {
  name: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  social: SocialLinks;
  projects: Project[];
};

// Configuration
export const config: Config = {
  name: "Neel",
  hero: {
    title: "Hi, I'm Neel",
    subtitle: "I build things for the web",
  },
  social: {
    github: {
      url: "https://github.com/neel738",
      ariaLabel: "GitHub",
    },
    linkedin: {
      url: "https://linkedin.com/in/neel-gh",
      ariaLabel: "LinkedIn",
    },
  },
  projects: [],
};
