import { ReactNode } from "react";
import { Laptop, Monitor, Database } from "lucide-react";

export interface Skills {
  title: string;
  description: string;
  icon: ReactNode;
}

export const skills = {
  items: [
    {
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend development",
      icon: <Laptop />,
    },
    {
      title: "Frontend Engineering",
      description: "Expertise in building user-friendly interfaces",
      icon: <Monitor />,
    },
    {
      title: "Backend Architecture",
      description:
        "Strong foundation in server-side development and system design",
      icon: <Database />,
    },
  ],
  title: (
    <span>
      What I bring <br className="sm:hidden" /> to the table
    </span>
  ),
  description: "Proficient in both frontend and backend development",
};
