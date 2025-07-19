"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-context";

import { motion, useAnimate } from "framer-motion";
import { MailIcon, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { links } from "./links";
import { config } from "@/config";
import { getContactLink } from "../util/get-contact-link";

export default function Navbar() {
  const [isCompressed, setIsCompressed] = useState(false);
  const [scope, animate] = useAnimate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setIsCompressed(true);
      } else {
        setIsCompressed(false);
      }
    });
  }, [setIsCompressed]);

  const [mainContentOffset, setMainContentOffset] = useState(0);

  // add a side effect such that on page load, and when the window is resized,  the it computes the difference in width between the left and right sections, and stores it in mainContentOffset
  useEffect(() => {
    if (!scope.current) return;

    const leftSection = scope.current.querySelector("#left-section");
    const rightSection = scope.current.querySelector("#right-section");

    if (leftSection && rightSection) {
      setMainContentOffset(rightSection.offsetWidth - leftSection.offsetWidth);
    }
  }, [scope, mainContentOffset]);

  const transitionOptions = {
    duration: 0.3,
    bounce: 0.2,
  };

  useEffect(() => {
    function animateCompressed() {
      if (!scope.current) return;

      animate(
        scope.current,
        {
          backgroundColor: "rgba(49, 49, 49, 0.8)",

          width: "auto",
        },
        {
          ...transitionOptions,
          bounce: 1,
          bounceDamping: 10,
          stiffness: 100,
          duration: 0.3,
        }
      );

      // animate the company name to disappear when the navbar is compressed
      const companyName = scope.current.querySelector("#companyName");
      if (companyName) {
        animate(
          companyName,
          {
            display: "none",
            width: "0",
          },
          {
            ...transitionOptions,
            duration: 0.1,
          }
        );
      }

      // animate the company logo to spin 360 degrees when the navbar is expanded
      const companyLogo = scope.current.querySelector("#companyLogo");
      if (companyLogo) {
        animate(
          companyLogo,
          {
            transform: "rotate(360deg)",
          },
          {
            ...transitionOptions,
            type: "spring",
            mass: 0.5,

            duration: 0.2,
          }
        );
      }
    }

    function animateExpanded() {
      if (!scope.current) return;

      animate(
        scope.current,
        {
          backgroundColor: "rgba(0, 0, 0, 0)",
          width: "100%",
        },
        {
          ...transitionOptions,

          bounce: 1,
          bounceDamping: 10,
          stiffness: 100,
          duration: 0.1,
        }
      );

      // animate the company name to show up after the navbar is expanded
      const companyName = scope.current.querySelector("#companyName");
      if (companyName) {
        animate(
          companyName,
          {
            display: "block",
            width: "auto",
          },
          {
            ...transitionOptions,
            duration: 0.1,
          }
        );
      }
    }

    if (isCompressed) animateCompressed();
    else animateExpanded();
  }, [isCompressed]);

  return (
    <div
      className={cn(
        "top-0 fixed flex justify-center z-50 px-8  w-full min-h-[76px] max-md:hidden ",
        !isCompressed && "border-b"
      )}
    >
      <motion.div
        id="main-nav-content"
        className={cn(
          "z-50   my-3  mx-auto transition-transform duration-300",
          !isCompressed && "  flex justify-between    px-8  gap-6 w-full  ",
          !isCompressed && `transform -translate-x-[${mainContentOffset}px]`,
          isCompressed && "flex gap-4  px-4 rounded-full backdrop-blur-sm"
        )}
        ref={scope}
      >
        <div className="flex items-center gap-4" id="left-section">
          <Link href={"/"}>
            {" "}
            <motion.span className={cn(isCompressed && "")} id="companyName">
              <motion.span className="font-bold not-italic">
                {config.fullName}
              </motion.span>
            </motion.span>
          </Link>
        </div>

        <div
          className={cn(
            " justify-center gap-4 max-md:hidden mx-auto my-auto  w-fit h-fit text-sm ",
            !isCompressed && "left-1/2 absolute -translate-x-1/2 py-4"
          )}
        >
          <motion.ul
            className={cn(
              "flex gap-8 ",
              isCompressed && "gap-4 ",
              isCompressed
                ? "dark:text-primary text-background"
                : "text-foreground "
            )}
          >
            {links.map((link) => (
              <li key={link.name} className="mx-auto w-full">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </motion.ul>
        </div>
        <div
          className={cn("flex justify-end items-center gap-4")}
          id="right-section"
        >
          <MailIcon
            className={cn(
              "size-4 inline ",
              !isCompressed && "",
              isCompressed && "text-white"
            )}
            onClick={() => {
              const link = getContactLink();
              window.open(link, "_blank");
            }}
          />
          {!isCompressed && (
            <div className="flex justify-center items-center w-fit">
              <div className="md:flex gap-4 hidden mr-4">
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
              <button onClick={toggleTheme}>
                {theme === "light" ? (
                  <MoonIcon className="size-6" />
                ) : (
                  <SunIcon className="size-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
