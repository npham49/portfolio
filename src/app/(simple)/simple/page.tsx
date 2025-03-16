"use client"

import { config } from "@/config";
import { Mail, SendHorizonal } from 'lucide-react';
import { getContactLink } from '@/components/util/get-contact-link';

export default function SimplePage() {
  // Filter projects that are work experience (not personal projects)
  const workExperience = config.projects.filter(project => !project.isPersonalProject);

  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email')
    const subject = " new contact from " + email
    const message = "I am interested in your services"
    const link = getContactLink(subject as string, message as string)
    window.open(link, '_blank')
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-12 text-left">
        <h1 className="text-4xl font-bold mb-4">{config.hero.title}</h1>
        <p className="text-xl text-gray-600">Building the future, one line of code at a time</p>
      </div>

      <div className="space-y-12">
        {workExperience.map((experience, index) => (
          <div key={index}>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">{experience.title}</h2>
              <h3 className="text-lg text-gray-700">{experience.position} at {experience.company}</h3>
              <p className="text-gray-600">{experience.startDate} - {experience.endDate} | {experience.location}</p>
            </div>

            <p className="mb-4">{experience.description}</p>
            
            <ul className="list-disc pl-6 mb-4">
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="mb-2">{bullet}</li>
              ))}
            </ul>

            <p className="text-gray-700"><span className="font-medium">Skills:</span> {experience.tags?.join(", ")}</p>

            {index !== workExperience.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-left">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{config.contact.title}</h2>
            <p className="mt-4 max-w-xl">{config.contact.subtitle}</p>

            <form action={handleSubmit} className="mt-10 max-w-sm lg:mt-12">
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                <input placeholder="Your mail address" className="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" name="email" />

                <div className="md:pr-1.5 lg:pr-0">
                  <button type="submit" className="rounded-(--radius) bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    <span className="hidden md:block">Get Started</span>
                    <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
