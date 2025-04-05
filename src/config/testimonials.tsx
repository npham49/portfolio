export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  company?: string;
}

export const testimonials = {
  items: [
    {
      name: "Tim Cook",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3",
      quote:
        "His attention to detail and innovative thinking transformed our entire approach to product design. The results speak for themselves.",
      company: "Apple Inc.",
    },
  ],
  title: "Kind Words",
  subtitle: "This is what the peeps say about me",
};
