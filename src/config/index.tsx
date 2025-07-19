// Types
import { ReactNode } from "react";
import { projects, Experience } from "./projects";
import { education, Education } from "./education";
import { skills, Skills } from "./skills";
import { testimonials, Testimonial } from "./testimonials";
import { techStack, TechStacks } from "./tech-stack";

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
    title: "Hi, I'm Brian!",
    subtitle:
      "I have 3 years of experience in full stack development and devops engineering, with a background in government and healthcare.",
    backgroundImage: "/hero.png",
    resume: "https://docs.google.com/document/d/1egPrrYQa2DV5VpSuwI9OgckHvKayIHWy/edit?usp=sharing&ouid=111157184374471284633&rtpof=true&sd=true",
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
  techStack,
  contact: {
    title: "Let's Connect",
    subtitle:
      "I'm always down for meeting new people and exploring new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out!",
    buttonText: "Contact Me",
    buttonLink: "mailto:nguyenphamswork@gmail.com",
  },
};
