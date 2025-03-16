"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { config } from "@/config";

export default function Footer() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-2 text-center text-sm">
        <span className="font-xl font-bold font-gilda gilda-text-bg">
          {config.name}
        </span>
        Vibecoded by me
        <span className="text-foreground text-xs dark:text-neutral-600">
          {" "}
          (with ❤️, ofc)
        </span>
        <h1 className="mt-6 font-semibold text-foreground text-xl"></h1>
        <div className="flex gap-4">
          <Link
            href={config.social.github.url}
            target="_blank"
            aria-label={config.social.github.ariaLabel}
          >
            <SiGithub className="hover:text-gray-400 transition-colors size-5" />
          </Link>
          <Link
            href={config.social.linkedin.url}
            target="_blank"
            aria-label={config.social.linkedin.ariaLabel}
          >
            <SiLinkedin className="hover:text-blue-400 transition-colors size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
