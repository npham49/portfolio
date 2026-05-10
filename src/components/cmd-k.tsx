"use client";
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  KeyboardEvent,
} from "react";
import { config } from "@/config";

interface CmdItem {
  t: string;
  k: string;
  a: () => void;
}

const THEMES = ["paper", "dark", "terminal"] as const;

export default function CmdK({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<CmdItem[]>(
    () => [
      { t: "Go to about",    k: "g a", a: () => { location.hash = "#about"; } },
      { t: "Go to work",     k: "g w", a: () => { location.hash = "#work"; } },
      { t: "Go to stack",    k: "g s", a: () => { location.hash = "#stack"; } },
      { t: "Go to reading",  k: "g r", a: () => { location.hash = "#reading"; } },
      { t: "Go to contact",  k: "g c", a: () => { location.hash = "#contact"; } },
      { t: "Email Brian",    k: "e",   a: () => { window.location.href = `mailto:${config.contactEmail}`; } },
      { t: "Open GitHub",    k: "h",   a: () => { window.open(config.social.github.url, "_blank"); } },
      { t: "Open LinkedIn",  k: "l",   a: () => { window.open(config.social.linkedin.url, "_blank"); } },
      { t: "Open Resume",    k: "v",   a: () => { window.open(config.hero.resume ?? "#", "_blank"); } },
      { t: "Copy email",     k: "y",   a: () => { navigator.clipboard.writeText(config.contactEmail); } },
      {
        t: "Toggle theme", k: "t",
        a: () => {
          const cur = document.documentElement.getAttribute("data-theme") ?? "dark";
          const next = THEMES[(THEMES.indexOf(cur as typeof THEMES[number]) + 1) % THEMES.length];
          document.documentElement.setAttribute("data-theme", next);
        },
      },
    ],
    []
  );

  const filtered = items.filter((i) =>
    i.t.toLowerCase().includes(q.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => { setSel(0); }, [q]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") { onClose(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(filtered.length - 1, s + 1)); }
    else if (e.key === "ArrowUp")   { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
    else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[sel]) { filtered[sel].a(); onClose(); }
    }
  };

  if (!open) return null;

  return (
    <div className="ck-backdrop" onClick={onClose}>
      <div className="ck" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="ck-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKey}
          placeholder="search commands…"
        />
        <div className="ck-list">
          {filtered.length === 0 ? (
            <div style={{ padding: "14px 20px", color: "var(--dim)", fontSize: 13 }}>
              no results
            </div>
          ) : (
            filtered.map((it, i) => (
              <div
                key={i}
                className={`ck-item${i === sel ? " sel" : ""}`}
                onMouseEnter={() => setSel(i)}
                onClick={() => { it.a(); onClose(); }}
              >
                <span>{it.t}</span>
                <span className="k">{it.k}</span>
              </div>
            ))
          )}
        </div>
        <div className="ck-foot">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
