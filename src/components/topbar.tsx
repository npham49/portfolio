"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { n: "01", t: "about", h: "#about" },
  { n: "02", t: "work", h: "#work" },
  { n: "03", t: "stack", h: "#stack" },
  { n: "04", t: "reading", h: "#reading" },
  { n: "05", t: "contact", h: "#contact" },
];

export default function Topbar({ onCmd }: { onCmd: () => void }) {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

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
          <span className="status">
            <span className="status-dot" />
            open to roles
          </span>
          <button className="kbd-hint" onClick={onCmd}>
            <kbd>{isMac ? "⌘" : "ctrl"}</kbd>
            <kbd>K</kbd>
          </button>
        </div>
      </div>
    </div>
  );
}
