import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTypeColor = (type?: string) => {
  switch (type) {
    case "fulltime":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "contract":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "internship":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "freelance":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};