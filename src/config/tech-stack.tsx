import { ReactNode } from "react";

export interface TechStacks {
  title: string;
  items: TechStack[];
}

export interface TechStack {
  title: string;
  src: string;
}

export const techStack: TechStacks = {
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
};
