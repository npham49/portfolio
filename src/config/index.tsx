// Types
import { ReactNode } from "react";
import { Laptop, Monitor, Database } from "lucide-react";
export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
  // Extendable - add more social links here as needed
};

export interface Project {
  title: string;
  oneLiner?: string;
  subtitle: string;
  description: string | ReactNode;
  bullets: ReactNode[];
  date?: string;
  image?: string | null;
  tags?: string[];
  slug?: string;
  company?: string;
  link?: {
    label: string;
    href: string;
  };
  // Experience-specific fields
  position?: string;
  location?: string;
  type?: "fulltime" | "contract" | "internship" | "freelance";
  startDate?: string;
  endDate?: string;
  isPersonalProject?: boolean;
}

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


export interface Contact {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
} 
export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  company?: string;
}

export interface Skills {
  title: string;
  description: string;
  icon: ReactNode;
}


export type Config = {
  name: string;
  contactEmail: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  social: SocialLinks;
  projects: Project[];
  education: {
    items: Education[];
    title: string;
    subtitle: string;
  };
  skills: {
    items: Skills[];
    title: ReactNode;
    description: ReactNode;
  };
  testimonials: {
    items: Testimonial[];
    title: string;
    subtitle: string;
  };
  contact: Contact;
};




// Configuration
export const config: Config = {
  name: "Neel",
  contactEmail: "neel@neel.com",
  hero: {
    title: "Hi, I'm Neel",
    subtitle: "I build things that are insanely great",
    backgroundImage: "/hero.png",
  },
  social: {
    github: {
      url: "https://github.com/stevejobs",
      ariaLabel: "GitHub",
    },
    linkedin: {
      url: "https://linkedin.com/in/stevejobs",
      ariaLabel: "LinkedIn",
    },
  },
  projects: [
    {
      title: "iPhone Web App",
      oneLiner: "It's a revolutionary mobile web browser!",
      subtitle: "Lead Developer & CEO",
      description: "Created the world's first mobile web browser that actually works. No Flash needed!",
      bullets: [
        "Convinced everyone that pinch-to-zoom was totally my idea",
        "Implemented the 'magical' scroll bounce effect using CSS",
        "Refused to add a back button because users don't need choices",
        "Spent 6 months perfecting the border radius of buttons"
      ],
      company: "Apple Inc.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3",
      tags: ["JavaScript", "CSS", "Innovation", "Reality Distortion"],
      position: "Chief Code Wizard",
      location: "Cupertino, CA",
      type: "fulltime",
      startDate: "2007",
      endDate: "2011",
      link: {
        label: "View Project",
        href: "https://www.apple.com/iphone"
      }
    },
    {
      title: "NeXT Framework",
      subtitle: "Solo Developer",
      description: "Built an entire operating system because I was fired and needed something to do",
      bullets: [
        "Wrote the most beautiful object-oriented code ever seen",
        "Made everything a perfect cube shape because why not",
        "Charged $10,000 per license because good code isn't cheap",
        "Created WebObjects - the framework nobody asked for but got anyway"
      ],
      company: "NeXT Computer",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      tags: ["Objective-C", "Unix", "WebObjects", "Expensive"],
      position: "Founder & Lead Developer",
      location: "Redwood City, CA",
      type: "fulltime",
      startDate: "1985",
      endDate: "1997",
      isPersonalProject: true
    },
    {
      title: "Pixar Rendering Engine",
      subtitle: "Technical Advisor",
      description: "Invested in and guided the development of revolutionary 3D rendering software",
      bullets: [
        "Convinced artists that waiting 24 hours for a render is 'part of the creative process'",
        "Implemented the 'money burning' algorithm to keep things interesting",
        "Successfully rendered Woody's hat after only 3 server crashes",
        "Made sure every pixel was perfectly aligned with the golden ratio"
      ],
      company: "Pixar",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3",
      tags: ["C++", "OpenGL", "Animation", "Bankruptcy Risk"],
      position: "Investment Debugger",
      location: "Emeryville, CA",
      type: "contract",
      startDate: "1986",
      endDate: "2006"
    },
    {
      title: "Apple II Terminal",
      subtitle: "Junior Developer",
      description: "My first coding project where I learned that GUI is everything",
      bullets: [
        "Convinced Wozniak that my 5 lines of code were essential",
        "Designed a terminal that only displays fonts I approved",
        "Created the first skeuomorphic command line interface",
        "Implemented revolutionary CAPS LOCK feature"
      ],
      company: "Apple Computer",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3",
      tags: ["BASIC", "Assembly", "Marketing"],
      position: "Interface Perfectionist",
      location: "Garage, CA",
      type: "internship",
      startDate: "1976",
      endDate: "1977"
    },
    {
      title: "Atari Breakout",
      subtitle: "Freelance Developer",
      description: "Optimized game code by outsourcing all work to Wozniak",
      bullets: [
        "Reduced code by telling Woz to do it in fewer lines",
        "Achieved maximum efficiency through delegation",
        "Won bonus by splitting it unfairly",
        "Pioneered the 'take credit for others' work' methodology"
      ],
      company: "Atari",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3",
      tags: ["Assembly", "Game Dev", "Delegation"],
      position: "Project Manager",
      location: "Los Gatos, CA",
      type: "freelance",
      startDate: "1974",
      endDate: "1975"
    },
    {
      title: "Reed College Calligraphy API",
      subtitle: "Dropout Developer",
      description: "Created an API for converting boring fonts into beautiful typography",
      bullets: [
        "Developed while officially dropping out",
        "Created first recursive font-loading algorithm",
        "Implemented meditation-driven development",
        "Pioneered the 'fonts are more important than food' philosophy"
      ],
      company: "Reed College",
      image: "https://images.unsplash.com/photo-1618790067848-8d6401a38bf5?ixlib=rb-4.0.3",
      tags: ["Typography", "Python", "Zen"],
      position: "Typography Engineer",
      location: "Portland, OR",
      type: "freelance",
      startDate: "1972",
      endDate: "1974",
      isPersonalProject: true
    },
    {
      title: "Blue Box Project",
      subtitle: "Teenage Hacker",
      description: "Built devices to make free long-distance calls using totally legal methods",
      bullets: [
        "Reverse engineered telephone systems with a whistle from Captain Crunch",
        "Implemented first peer-to-peer communication network (aka phone phreaking)",
        "Created MVP (Minimum Viable Phreaking) methodology",
        "Achieved 2600Hz precision without formal engineering education"
      ],
      company: "Self-Employed",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3",
      tags: ["Hardware", "Phreaking", "Telecommunications"],
      position: "Chief Phreaking Officer",
      location: "Los Altos, CA",
      type: "freelance",
      startDate: "1971",
      endDate: "1972",
      isPersonalProject: true
    }
  ],
  education: {
    items: [
      {
        school: "Reed College",
        degree: "Dropped Out",
        startDate: "1972",
        endDate: "1974",
        description: "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
        logo: "https://images.unsplash.com/photo-1618790067848-8d6401a38bf5?ixlib=rb-4.0.3",
        grades: [
          {
            subject: "Calligraphy",
            grade: "A+",
            year: "1972"
          },
          {
            subject: "Eastern Philosophy",
            grade: "A",
            year: "1973"
          },
          {
            subject: "Typography Design",
            grade: "A+",
            year: "1973"
          }
        ]
      }, 
      {
        school: "Stanford University",
        degree: "Dropped Out",
        startDate: "1972",
        endDate: "1974",
        description: "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
        logo: "https://images.unsplash.com/photo-1618790067848-8d6401a38bf5?ixlib=rb-4.0.3",
        grades: [
          {
            subject: "Computer Science",
            grade: "A",
            year: "1972"
          },
          {
            subject: "Design Thinking",
            grade: "A+",
            year: "1973"
          },
          {
            subject: "Innovation",
            grade: "A+",
            year: "1974"
          }
        ]
      }
    ],
    title: "Education Journey",
    subtitle: "The foundation of my knowledge and experiences"
  },
  skills: {
    items: [
      {
        title: "Full Stack Development",
        description: "Proficient in both frontend and backend development",
        icon: <Laptop />
    },
    {
      title: "Frontend Engineering", 
      description: "Expertise in building user-friendly interfaces",
      icon: <Monitor />
    },
    {
      title: "Backend Architecture",
      description: "Strong foundation in server-side development and system design", 
      icon: <Database />
    }, 
  ],
    title:<>What I bring <br className=" sm:hidden"/> to the table</>,
    description: "Proficient in both frontend and backend development",
  },

  testimonials: {
    items: [
      {
        name: "Tim Cook",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3",
        quote: "His attention to detail and innovative thinking transformed our entire approach to product design. The results speak for themselves.", 
        company: "Apple Inc."
      },
      {
        name: "Bill Gates",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
        quote: "Even though we were competitors, I always admired his vision and dedication to creating insanely great products that changed the world.",
        company: "Microsoft"
      },
      {
        name: "Jony Ive",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
        quote: "Working together, we pushed the boundaries of what was possible in industrial design. His perfectionism was infectious.",
        company: "LoveFrom"
      },
      {
        name: "Larry Ellison",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3",
        quote: "A true visionary who saw possibilities where others saw limitations. His influence on Silicon Valley cannot be overstated.",
        company: "Oracle"
      },
      {
        name: "Wozniak",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3",
        quote: "We started in a garage and ended up changing the world. His marketing genius and my technical skills were the perfect combination.",
        company: "Apple Co-founder"
      },
     
    ],
    title: "Kind Words",
    subtitle: "This is what the peeps say about me"
  },
  contact: {
    title: "Let's Connect",
    subtitle: "I'm always looking for new challenges and opportunities to grow. Let's connect and see how we can make something great together.",
    buttonText: "Contact Me",
    buttonLink: "mailto:neel@neel.com"
  }

};
