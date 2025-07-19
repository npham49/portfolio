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
      endDate: "2026",
      description:
        "Hired for full-time position in second-year, completed Bachelor degree part-time.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6be0mte8xp1mx9Dj_UWWwdPyxuGNrhW0MmQ&s",
    },
  ],
  title: "Education Journey",
  subtitle: "The foundation of my knowledge and experiences",
};
