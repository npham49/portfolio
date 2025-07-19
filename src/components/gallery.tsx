import { Experience, Project } from "@/config/projects";
import { User, Briefcase, Code } from "lucide-react";
import { getTypeColor } from "@/lib/utils";

export default function Gallery({
  workExperiences,
  indieHacker,
  handleCardClick,
}: {
  workExperiences: Experience[];
  indieHacker: Experience | undefined;
  handleCardClick: (
    project: {
      project: any;
      experienceTitle: string;
      experienceCompany?: string;
      experienceType?: string;
      isPersonal: boolean;
      experienceStartDate?: string;
      experienceEndDate?: string;
    } | null
  ) => void;
}) {
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
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryProjects.map((item, index) => {
          const {
            project,
            experienceTitle,
            experienceCompany,
            experienceType,
            isPersonal,
          } = item;

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
                    <div
                      className={`px-2 py-1 rounded-md text-xs border ${getTypeColor(
                        experienceType
                      )}`}
                    >
                      {experienceType.charAt(0).toUpperCase() +
                        experienceType.slice(1)}
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
                  {typeof project.description === "string"
                    ? project.description.length > 120
                      ? project.description.substring(0, 120) + "..."
                      : project.description
                    : project.description}
                </p>
              </div>

              {/* Technologies */}
              {project.tags && project.tags.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags
                      .slice(0, 3)
                      .map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs rounded-md border ${
                            isPersonal
                              ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                              : "bg-primary/10 text-primary border-primary/20"
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
}
