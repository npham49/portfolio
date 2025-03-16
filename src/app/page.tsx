"use client";
import { Experience } from "@/components/experience";
import HeroSection from "@/components/hero-section";
import { config } from "@/config";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
        <HeroSection />
        <Experience />
    </div>
  );
}
