"use client";
import { config } from "@/config";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="flex flex-col items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="text-4xl font-bold font-gilda gilda-text-bg">
            {config.hero.title}
          </h1>
          <h2 className="text-2xl font-bold font-gilda gilda-text-bg">
            {config.hero.subtitle}
          </h2>
        </motion.div>
      </div>
      <div
        className="flex flex-col items-center justify-center "
        id="experience"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="text-4xl font-bold">Experience</h1>
        </motion.div>
      </div>
    </div>
  );
}
