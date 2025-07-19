import { ReactNode } from "react";
import { Building2, Heart, Laptop, Server, Users } from "lucide-react";

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
      description: "Experience with stakeholder management and communication",
      icon: <Users />,
    },
  ],
  title: (
    <span>
      What I bring <br className="sm:hidden" /> to the table
    </span>
  ),
  description: "Technical skills and soft skills",
};
