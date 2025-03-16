"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-2 text-center text-sm">
        <span className="font-xl font-bold font-gilda gilda-text-bg">Name</span>
        Vibecoded by me
        <span className="text-foreground text-xs dark:text-neutral-600">
          {" "}
          (with ❤️, ofc)
        </span>
        <h1 className="mt-6 font-semibold text-foreground text-xl"></h1>
        <div className="flex gap-4">
          <Link
            href="https://github.com/neel738"
            target="_blank"
            aria-label="GitHub"
          >
            <SiGithub className="hover:text-gray-400 transition-colors size-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/neel-gh"
            target="_blank"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="hover:text-blue-400 transition-colors size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
