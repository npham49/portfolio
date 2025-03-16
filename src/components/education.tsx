"use client";

import { GraduationCap } from "lucide-react";
import HeaderTitle from "./util/header-title";
import { config } from "@/config";

export function Education() {
  return (
    <section className="py-20" id="education">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <HeaderTitle>{config.education.title}</HeaderTitle>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {config.education.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          {config.education.items.map((edu) => (
            <div
              key={edu.school}
              className="group relative overflow-hidden rounded-xl border-2 border-silver/50 bg-background p-6 shadow-lg hover:border-silver"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{edu.degree}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                {edu.grades && edu.grades.length > 0 && (
                  <div className="mt-4 border-t border-silver/30 pt-4">
                    <h4 className="mb-2 text-sm font-semibold">Academic Achievements</h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {edu.grades.map((grade) => (
                        <div
                          key={`${grade.subject}-${grade.year}`}
                          className="rounded-lg border border-silver/30 p-2 text-center"
                        >
                          <div className="text-xs text-muted-foreground">
                            {grade.subject}
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {grade.grade}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {grade.year}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 