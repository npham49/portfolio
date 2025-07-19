"use client";
import { config } from "@/config";
import HeaderTitle from "./util/header-title";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building,
  User,
  Briefcase,
  Code,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Experience = () => {
  // Filter work experiences (not personal projects) and separate Indie Hacker
  const workExperiences = config.projects.filter(
    (experience) => !experience.isPersonalProject,
  );
  const indieHacker = config.projects.find(
    (experience) => experience.isPersonalProject,
  );

  const [expandedProjects, setExpandedProjects] = useState<{
    [key: string]: boolean;
  }>({});

  const [activeTab, setActiveTab] = useState<"timeline" | "gallery">("timeline");

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    project: any;
    experienceTitle: string;
    experienceCompany?: string;
    experienceType?: string;
    isPersonal: boolean;
    experienceStartDate?: string;
    experienceEndDate?: string;
  } | null>(null);

  const toggleProject = (experienceIndex: number, projectIndex: number) => {
    const key = `${experienceIndex}-${projectIndex}`;
    setExpandedProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCardClick = (projectData: any) => {
    setSelectedProject(projectData);
    setDialogOpen(true);
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "fulltime":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "contract":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "internship":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "freelance":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  // Create gallery data - extract all projects with their experience context
  const getAllProjectsForGallery = () => {
    const allProjects: Array<{
      project: any;
      experienceTitle: string;
      experienceCompany?: string;
      experienceType?: string;
      isPersonal: boolean;
      experienceStartDate?: string;
      experienceEndDate?: string;
    }> = [];

    // Add work experience projects
    workExperiences.forEach((experience) => {
      if (experience.projects) {
        experience.projects.forEach((project) => {
          allProjects.push({
            project,
            experienceTitle: experience.title,
            experienceCompany: experience.company,
            experienceType: experience.type,
            isPersonal: false,
            experienceStartDate: experience.startDate,
            experienceEndDate: experience.endDate,
          });
        });
      }
    });

    // Add indie hacker projects
    if (indieHacker && indieHacker.projects) {
      indieHacker.projects.forEach((project) => {
        allProjects.push({
          project,
          experienceTitle: indieHacker.title,
          experienceCompany: undefined,
          experienceType: indieHacker.type,
          isPersonal: true,
          experienceStartDate: indieHacker.startDate,
          experienceEndDate: indieHacker.endDate,
        });
      });
    }

    return allProjects;
  };

  const galleryProjects = getAllProjectsForGallery();

  const renderTimeline = () => (
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
                    experience.type,
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
                                {project.bullets.map(
                                  (bullet, bulletIndex) => (
                                    <li
                                      key={bulletIndex}
                                      className="flex items-start"
                                    >
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span className="text-sm text-muted-foreground">
                                        {bullet}
                                      </span>
                                    </li>
                                  ),
                                )}
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
                  indieHacker.type,
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
                                {project.bullets.map(
                                  (bullet, bulletIndex) => (
                                    <li
                                      key={bulletIndex}
                                      className="flex items-start"
                                    >
                                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span className="text-sm text-muted-foreground">
                                        {bullet}
                                      </span>
                                    </li>
                                  ),
                                )}
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

  const renderGallery = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryProjects.map((item, index) => {
          const { project, experienceTitle, experienceCompany, experienceType, isPersonal } = item;
          
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              {/* Project Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  {isPersonal ? (
                    <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md text-xs border border-orange-500/20">
                      <User className="w-3 h-3" />
                      <span>Personal</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs border border-blue-500/20">
                      <Briefcase className="w-3 h-3" />
                      <span>Work</span>
                    </div>
                  )}
                  {experienceType && (
                    <div className={`px-2 py-1 rounded-md text-xs border ${getTypeColor(experienceType)}`}>
                      {experienceType.charAt(0).toUpperCase() + experienceType.slice(1)}
                    </div>
                  )}
                </div>
                <Code className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Project Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {typeof project.description === 'string' 
                    ? project.description.length > 120 
                      ? project.description.substring(0, 120) + '...'
                      : project.description
                    : project.description
                  }
                </p>
              </div>

              {/* Technologies */}
              {project.tags && project.tags.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-md border ${
                          isPersonal 
                            ? 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                            : 'bg-primary/10 text-primary border-primary/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Experience Info */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {experienceTitle}
                    </p>
                    {experienceCompany && (
                      <p className="text-xs text-muted-foreground">
                        {experienceCompany}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {item.experienceStartDate} - {item.experienceEndDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4 w-full" id="experience">
      <HeaderTitle className="mb-12 text-center">Experience</HeaderTitle>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-center">
          <div className="flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "timeline"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "gallery"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Gallery
            </button>
            </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "timeline" ? renderTimeline() : renderGallery()}

      {/* Project Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {selectedProject.project.title}
                    </DialogTitle>
                    <p className="text-lg text-muted-foreground mb-2">
                      {selectedProject.project.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      {selectedProject.isPersonal ? (
                        <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md text-sm border border-orange-500/20">
                          <User className="w-4 h-4" />
                          <span>Personal Project</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-sm border border-blue-500/20">
                          <Briefcase className="w-4 h-4" />
                          <span>Work Project</span>
                        </div>
                      )}
                      {selectedProject.experienceType && (
                        <div className={`px-2 py-1 rounded-md text-sm border ${getTypeColor(selectedProject.experienceType)}`}>
                          {selectedProject.experienceType.charAt(0).toUpperCase() + selectedProject.experienceType.slice(1)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Description */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Description</h3>
                  <DialogDescription className="text-muted-foreground leading-relaxed">
                    {selectedProject.project.description}
                  </DialogDescription>
                </div>

                {/* Key Achievements */}
                {selectedProject.project.bullets && selectedProject.project.bullets.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      {selectedProject.isPersonal ? "Key Features" : "Key Achievements"}
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.project.bullets.map((bullet: any, bulletIndex: number) => (
                        <li key={bulletIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            selectedProject.isPersonal ? 'bg-orange-500' : 'bg-primary'
                          }`}></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {selectedProject.project.tags && selectedProject.project.tags.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.project.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm rounded-md border ${
                            selectedProject.isPersonal 
                              ? 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                              : 'bg-primary/10 text-primary border-primary/20'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Context */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">Experience Context</h3>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">
                          {selectedProject.experienceTitle}
                        </p>
                        {selectedProject.experienceCompany && (
                          <p className="text-sm text-muted-foreground">
                            {selectedProject.experienceCompany}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {selectedProject.experienceStartDate} - {selectedProject.experienceEndDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
