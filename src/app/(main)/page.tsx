"use client";
import { useState, useEffect } from "react";
import Topbar from "@/components/topbar";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import StackSection from "@/components/stack-section";
import ReadingSection from "@/components/reading-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import CmdK from "@/components/cmd-k";
import { useReveal } from "@/hooks/use-reveal";

function AsciiBar() {
  return (
    <div className="ascii wrap">
      {"—".repeat(400)}
    </div>
  );
}

export default function Home() {
  const [ck, setCk] = useState(false);
  useReveal();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCk((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Topbar onCmd={() => setCk(true)} />
      <HeroSection />
      <AsciiBar />
      <SkillsSection />
      <ExperienceSection />
      <StackSection />
      <ReadingSection />
      <QuoteSection />
      <ContactSection />
      <CmdK open={ck} onClose={() => setCk(false)} />
    </>
  );
}
