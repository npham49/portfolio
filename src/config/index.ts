// Types
export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
  // Extendable - add more social links here as needed
};

export type Config = {
  name: string;
  social: SocialLinks;
};

// Configuration
export const config: Config = {
  name: "Neel",
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
};
