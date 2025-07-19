export interface Testimonial {
  name: string;
  image: string;
  title: string;
  quote: string;
  company?: string;
}

export const testimonials = {
  items: [
    {
      name: " Rafael Solorzano",
      image:
        "https://booleanstrings.com/2021/10/06/linkedin-profile-seo-how-to-be-found/",
      title: "Senior Software Engineer",
      quote:
        "Brian is an outstanding professional who always went above and beyond to deliver high-quality work.",
      company: "Government of British Columbia",
    },
  ],
  title: "Kind Words",
  subtitle: "This is what the peeps say about me",
};
