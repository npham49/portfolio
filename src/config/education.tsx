export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  grades?: {
    subject: string;
    grade: string;
    year: string;
  }[];
}

export const education = {
  items: [
    {
      school: "University of Victoria",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2019",
      endDate: "2025",
      description:
        "A comprehensive program covering algorithms, data structures, and software engineering principles.",
      logo: "https://images.unsplash.com/photo-1618790067848-8d6401a38bf5?ixlib=rb-4.0.3",
    },
  ],
  title: "Education Journey",
  subtitle: "The foundation of my knowledge and experiences",
};
