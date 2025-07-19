import { techStack } from "@/config/tech-stack";
import HeaderTitle from "./util/header-title";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

export default function TechStack() {
  const { items, title } = techStack;
  return (
    <section className="bg-background pt-16 pb-6 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:space-y-12">
          <HeaderTitle>{title}</HeaderTitle>
        </div>
        
        {/* Desktop Grid Layout - hidden on smaller screens */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8 items-center">
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

        {/* Mobile Marquee Layout - visible on smaller screens */}
        <div className="md:hidden mt-8">
          <div className="w-full overflow-hidden">
            <div className="w-screen relative -mx-4">
              <Marquee 
                pauseOnHover={true}
                repeat={2}
                className="[--duration:35s] [--gap:1.5rem] bg-card"
              >
                {items.map((tech) => {
                  return (
                    <div
                      key={tech.title}
                      className="flex flex-col items-center p-2 w-auto flex-shrink-0"
                    >
                      <img
                        src={tech.src}
                        alt={tech.title}
                        className="h-10 w-10 mb-1"
                      />
                      <span className="text-xs font-medium text-center leading-tight max-w-full truncate">
                        {tech.title}
                      </span>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}