import { Experience } from "@/config/projects";
import { Building, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { getTypeColor } from "@/lib/utils";
import { useState } from "react";

export default function Timeline({
  workExperiences,
  indieHacker,
}: {
  workExperiences: Experience[];
  indieHacker: Experience | undefined;
}) {
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: string]: boolean;
  }>({});
  const toggleProject = (experienceIndex: number, projectIndex: number) => {
    const key = `${experienceIndex}-${projectIndex}`;
    setExpandedProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

      {workExperiences.map((experience, experienceIndex) => (
        <div key={experienceIndex} className="relative mb-12 last:mb-0">
          {/* Timeline dot */}
          <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

          {/* Experience Card */}
          <div className="ml-20 bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {experience.title}
                </h3>
                {experience.company && (
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                )}
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
              </div>
              {experience.type && (
                <div
                  className={`px-3 py-1 rounded-full border text-sm font-medium ${getTypeColor(
                    experience.type
                  )}`}
                >
                  {experience.type.charAt(0).toUpperCase() +
                    experience.type.slice(1)}
                </div>
              )}
            </div>

            <p className="text-muted-foreground mb-6">
              {experience.description}
            </p>

            {/* Projects */}
            {experience.projects && experience.projects.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Key Projects
                </h4>
                {experience.projects.map((project, projectIndex) => {
                  const projectKey = `${experienceIndex}-${projectIndex}`;
                  const isExpanded = expandedProjects[projectKey];

                  return (
                    <div
                      key={projectIndex}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          toggleProject(experienceIndex, projectIndex)
                        }
                        className="w-full px-4 py-3 bg-muted/50 hover:bg-muted transition-colors flex items-center justify-between text-left"
                      >
                        <div>
                          <h5 className="font-semibold text-foreground">
                            {project.title}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {project.subtitle}
                          </p>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 bg-card">
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>

                          {project.bullets && project.bullets.length > 0 && (
                            <div className="mb-4">
                              <h6 className="font-medium text-foreground mb-2">
                                Key Achievements:
                              </h6>
                              <ul className="space-y-2">
                                {project.bullets.map((bullet, bulletIndex) => (
                                  <li
                                    key={bulletIndex}
                                    className="flex items-start"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">
                                      {bullet}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.tags && project.tags.length > 0 && (
                            <div>
                              <h6 className="font-medium text-foreground mb-2">
                                Technologies:
                              </h6>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Indie Hacker Section at the bottom */}
      {indieHacker && (
        <div className="relative mb-12">
          <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-background shadow-lg"></div>

          <div className="ml-20 bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {indieHacker.title}
                </h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {indieHacker.startDate} - {indieHacker.endDate}
                  </span>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full border text-sm font-medium ${getTypeColor(
                  indieHacker.type
                )}`}
              >
                {indieHacker.type
                  ? indieHacker.type.charAt(0).toUpperCase() +
                    indieHacker.type.slice(1)
                  : "Project"}
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {indieHacker.description}
            </p>

            {indieHacker.projects && indieHacker.projects.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Personal Projects
                </h4>
                {indieHacker.projects.map((project, projectIndex) => {
                  const projectKey = `indie-${projectIndex}`;
                  const isExpanded = expandedProjects[projectKey];

                  return (
                    <div
                      key={projectIndex}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          setExpandedProjects((prev) => ({
                            ...prev,
                            [projectKey]: !prev[projectKey],
                          }));
                        }}
                        className="w-full px-4 py-3 bg-muted/50 hover:bg-muted transition-colors flex items-center justify-between text-left"
                      >
                        <div>
                          <h5 className="font-semibold text-foreground">
                            {project.title}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {project.subtitle}
                          </p>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 bg-card">
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>

                          {project.bullets && project.bullets.length > 0 && (
                            <div className="mb-4">
                              <h6 className="font-medium text-foreground mb-2">
                                Key Features:
                              </h6>
                              <ul className="space-y-2">
                                {project.bullets.map((bullet, bulletIndex) => (
                                  <li
                                    key={bulletIndex}
                                    className="flex items-start"
                                  >
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">
                                      {bullet}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.tags && project.tags.length > 0 && (
                            <div>
                              <h6 className="font-medium text-foreground mb-2">
                                Technologies:
                              </h6>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-md border border-orange-500/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
