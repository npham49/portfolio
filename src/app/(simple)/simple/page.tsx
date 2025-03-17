"use client";

import { config } from "@/config";
import { Mail, SendHorizonal } from "lucide-react";
import { getContactLink } from "@/components/util/get-contact-link";
import Link from "next/link";
import CallToAction from "@/components/call-to-action";

export default function SimplePage() {
  // Filter projects that are work experience (not personal projects)
  const workExperience = config.projects.filter(
    (project) => !project.isPersonalProject
  );

  const handleSubmit = (formData: FormData) => {
    const message = formData.get("message");
    const subject = "New contact message";
    const link = getContactLink(subject, message as string);
    window.open(link, "_blank");
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
          Building the future, one line of code at a time
        </p>
      </div>

      <div className="space-y-12">
        {workExperience.map((experience, index) => (
          <div key={index}>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">{experience.title}</h2>
              <h3 className="text-lg text-gray-700">
                {experience.position} at {experience.company}
              </h3>
              <p className="text-gray-600">
                {experience.startDate} - {experience.endDate} |{" "}
                {experience.location}
              </p>
            </div>

            <p className="mb-4">{experience.description}</p>

            <ul className="list-disc pl-6 mb-4">
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="mb-2">
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              <span className="font-medium">Skills:</span>{" "}
              {experience.tags?.join(", ")}
            </p>

            {index !== workExperience.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>

      <CallToAction />
    </div>
  );
}
