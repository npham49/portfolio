import { techStack } from "@/config/tech-stack";
import HeaderTitle from "./util/header-title";
import Image from "next/image";

export default function TechStack() {
  const { items, title } = techStack;
  return (
    <section className="bg-background pt-16 pb-6 max-w-6xl mx-auto">
      <div className="text-center md:space-y-12">
        <HeaderTitle>{title}</HeaderTitle>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8 items-center">
        {items.map((tech) => {
          return (
            <div
              key={tech.title}
              className="group flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <img src={tech.src} alt={tech.title} className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium text-center leading-tight">
                {tech.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
