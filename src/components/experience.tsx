"use client";
import { config } from "@/config";
import HeaderTitle from "./util/header-title";
import { useEffect, useState } from "react";
import { User, Briefcase } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Timeline from "./timeline";
import Gallery from "./gallery";
import { getTypeColor } from "@/lib/utils";

export const Experience = () => {
  // Filter work experiences (not personal projects) and separate Indie Hacker
  const workExperiences = config.projects.filter(
    (experience) => !experience.isPersonalProject
  );
  const indieHacker = config.projects.find(
    (experience) => experience.isPersonalProject
  );

  const [activeTab, setActiveTab] = useState<"timeline" | "gallery">(
    "timeline"
  );

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

  const handleCardClick = (projectData: any) => {
    setSelectedProject(projectData);
    setDialogOpen(true);
  };

  useEffect(() => {
    // if view point width is less than 768px, set the active tab to gallery
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveTab("gallery");
    }
  }, []);

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
              Projects
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "timeline" ? (
        <Timeline workExperiences={workExperiences} indieHacker={indieHacker} />
      ) : (
        <Gallery
          workExperiences={workExperiences}
          indieHacker={indieHacker}
          handleCardClick={handleCardClick}
        />
      )}

      {/* Project Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className={"lg:max-w-screen-lg overflow-y-scroll max-h-screen"}>
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
                        <div
                          className={`px-2 py-1 rounded-md text-sm border ${getTypeColor(
                            selectedProject.experienceType
                          )}`}
                        >
                          {selectedProject.experienceType
                            .charAt(0)
                            .toUpperCase() +
                            selectedProject.experienceType.slice(1)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Description */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Description
                  </h3>
                  <DialogDescription className="text-muted-foreground leading-relaxed">
                    {selectedProject.project.description}
                  </DialogDescription>
                </div>

                {/* Key Achievements */}
                {selectedProject.project.bullets &&
                  selectedProject.project.bullets.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        {selectedProject.isPersonal
                          ? "Key Features"
                          : "Key Achievements"}
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.project.bullets.map(
                          (bullet: any, bulletIndex: number) => (
                            <li key={bulletIndex} className="flex items-start">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                  selectedProject.isPersonal
                                    ? "bg-orange-500"
                                    : "bg-primary"
                                }`}
                              ></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {bullet}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Technologies */}
                {selectedProject.project.tags &&
                  selectedProject.project.tags.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.project.tags.map(
                          (tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 text-sm rounded-md border ${
                                selectedProject.isPersonal
                                  ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                                  : "bg-primary/10 text-primary border-primary/20"
                              }`}
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Experience Context */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">
                    Experience Context
                  </h3>
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
                          {selectedProject.experienceStartDate} -{" "}
                          {selectedProject.experienceEndDate}
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
