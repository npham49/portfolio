"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { n: "01", t: "about", h: "#about" },
  { n: "02", t: "work", h: "#work" },
  { n: "03", t: "stack", h: "#stack" },
  { n: "04", t: "reading", h: "#reading" },
  { n: "05", t: "contact", h: "#contact" },
];

const THEMES = ["dark", "paper", "terminal"] as const;
type Theme = typeof THEMES[number];

const THEME_LABELS: Record<Theme, string> = {
  dark: "●",
  paper: "○",
  terminal: "◈",
};

export default function Topbar({ onCmd }: { onCmd: () => void }) {
  const [isMac, setIsMac] = useState(true);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const current = (document.documentElement.getAttribute("data-theme") ?? "dark") as Theme;
    setTheme(current);
  }, []);

  const cycleTheme = () => {
    const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <div className="top">
      <div className="wrap top-inner">
        <a href="#top" className="brand">
          <span className="brand-dot" />
          <span>
            brian.pham<span className="blink">_</span>
          </span>
        </a>

        <nav className="site-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.n} href={l.h}>
              <span className="n">{l.n}</span>
              {l.t}
            </a>
          ))}
        </nav>

        <div className="top-right">
          <button
            className="kbd-hint"
            onClick={cycleTheme}
            title={`theme: ${theme}`}
          >
            {THEME_LABELS[theme]} {theme}
          </button>
          <button className="kbd-hint" onClick={onCmd}>
            <kbd>{isMac ? "⌘" : "ctrl"}</kbd>
            <kbd>K</kbd>
          </button>
        </div>
      </div>
    </div>
  );
}
