import {
  HomeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  MessageSquareIcon,
  WrenchIcon,
} from "lucide-react";

interface Link {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const links: Link[] = [
  {
    name: "Simple",
    href: "/simple",
    icon: <HomeIcon className="size-4" />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <BriefcaseIcon className="size-4" />,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <WrenchIcon className="size-4" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <GraduationCapIcon className="size-4" />,
  },
  {
    name: "Testimonials",
    href: "#testimonials",
    icon: <MessageSquareIcon className="size-4" />,
  },
];
