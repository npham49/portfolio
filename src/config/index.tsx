// Types
import { ReactNode } from "react";
import { projects, Project } from "./projects";
import { education, Education } from "./education";
import { skills, Skills } from "./skills";
import { testimonials, Testimonial } from "./testimonials";

export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
  // Extendable - add more social links here as needed
};

export interface Contact {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export type Config = {
  name: string;
  contactEmail: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  social: SocialLinks;
  projects: Project[];
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
  contact: Contact;
};

// Re-export types and components from individual files
export type { Project } from "./projects";
export type { Education } from "./education";
export type { Skills } from "./skills";
export type { Testimonial } from "./testimonials";

// Configuration
export const config: Config = {
  name: "Brian",
  contactEmail: "nguyenphamswork@gmail.com",
  hero: {
    title: "Hi, I'm Brian",
    subtitle:
      "I build seamless digital experiences that connect people and technology.",
    backgroundImage: "/hero.png",
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
  projects,
  education,
  skills,
  testimonials,
  contact: {
    title: "Let's Connect",
    subtitle:
      "I'm always down for meeting new people and exploring new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out!",
    buttonText: "Contact Me",
    buttonLink: "mailto:nguyenphamswork@gmail.com",
  },
};
