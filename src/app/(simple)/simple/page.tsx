"use client";

import { config } from "@/config";
import Link from "next/link";
import CallToAction from "@/components/call-to-action";
import { Button } from "@/components/ui/button";

export default function SimplePage() {
  // Filter work experiences (not personal projects) and separate Indie Hacker
  const workExperiences = config.projects.filter(
    (experience) => !experience.isPersonalProject
  );
  const indieHacker = config.projects.find(
    (experience) => experience.isPersonalProject
  );

  // Function to aggregate bullets from all projects within an experience
  const getAllBullets = (experience: any) => {
    const bullets: any[] = [];
    if (experience.bullets) {
      bullets.push(...experience.bullets);
    }
    if (experience.projects) {
      experience.projects.forEach((project: any) => {
        if (project.bullets) {
          bullets.push(...project.bullets);
        }
      });
    }
    return bullets;
  };

  // Function to aggregate tags from all projects within an experience
  const getAllTags = (experience: any) => {
    const tags: string[] = [];
    if (experience.tags) {
      tags.push(...experience.tags);
    }
    if (experience.projects) {
      experience.projects.forEach((project: any) => {
        if (project.tags) {
          tags.push(...project.tags);
        }
      });
    }
    // Remove duplicates and return
    return Array.from(new Set(tags));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-12 text-left">
        <Link
          href="/"
          className="inline-block mb-4  hover:text-primary/80 text-gray-600"
        >
          ← Back to fancy version
        </Link>
        <h1 className="text-4xl font-bold mb-4">{config.hero.title}</h1>
        <p className="text-xl text-gray-600">
          I&apos;m a full stack developer and devops engineer with a background
          in government and healthcare.
        </p>
        <Link
          href={config.hero.resume || ""}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          <span className="text-nowrap">Get Resume</span>
        </Link>
      </div>

      <div className="space-y-12">
        {/* Work Experiences */}
        {workExperiences.map((experience, index) => {
          const allBullets = getAllBullets(experience);
          const allTags = getAllTags(experience);

          return (
            <div key={index}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                {experience.company && (
                  <h3 className="text-lg text-gray-700">
                    at {experience.company}
                  </h3>
                )}
                <p className="text-gray-600">
                  {experience.startDate} - {experience.endDate}
                  {experience.type && (
                    <span className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">
                      {experience.type.charAt(0).toUpperCase() +
                        experience.type.slice(1)}
                    </span>
                  )}
                </p>
              </div>

              <p className="mb-4">{experience.description}</p>

              {allBullets.length > 0 && (
                <ul className="list-disc pl-6 mb-4">
                  {allBullets.map((bullet, i) => (
                    <li key={i} className="mb-2">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {allTags.length > 0 && (
                <p className="text-gray-700">
                  <span className="font-medium">Technologies:</span>{" "}
                  {allTags.join(", ")}
                </p>
              )}

              {index !== workExperiences.length - 1 && <hr className="my-8" />}
            </div>
          );
        })}

        {/* Indie Hacker Section at the bottom */}
        {indieHacker && (
          <>
            <hr className="my-8" />
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">{indieHacker.title}</h2>
                <p className="text-gray-600">
                  {indieHacker.startDate} - {indieHacker.endDate}
                  {indieHacker.type && (
                    <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                      {indieHacker.type.charAt(0).toUpperCase() +
                        indieHacker.type.slice(1)}
                    </span>
                  )}
                </p>
              </div>

              <p className="mb-4">{indieHacker.description}</p>

              {(() => {
                const allBullets = getAllBullets(indieHacker);
                const allTags = getAllTags(indieHacker);

                return (
                  <>
                    {allBullets.length > 0 && (
                      <ul className="list-disc pl-6 mb-4">
                        {allBullets.map((bullet, i) => (
                          <li key={i} className="mb-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {allTags.length > 0 && (
                      <p className="text-gray-700">
                        <span className="font-medium">Technologies:</span>{" "}
                        {allTags.join(", ")}
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          </>
        )}
      </div>

      <div className="mt-12 text-left">
        <h1 className="text-2xl font-semibold">Technical Skills</h1>
        {config.techStack.items.map((skill) => (
          <span key={skill.title} className="text-xl text-gray-600">
            {skill.title},{" "}
          </span>
        ))}
      </div>

      <CallToAction />
    </div>
  );
}
