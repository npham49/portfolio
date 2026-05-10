"use client";
import { useState, useEffect, useRef, FormEvent, ReactNode } from "react";
import { config } from "@/config";

const BOOT_SEQ = [
  { t: 100, l: <span><span className="tp">$</span> <span className="tc">whoami</span></span> },
  { t: 200, l: <span className="tr">brian.pham — full-stack engineer</span> },
  { t: 100, l: <span className="tr">→ 3y exp · govtech + healthcare · victoria, BC</span> },
  { t: 250, l: <span><span className="tp">$</span> <span className="tc">cat now.txt</span></span> },
  { t: 200, l: <span className="tr">{"// shipping RBAC for BC ministries"}</span> },
  { t: 100, l: <span className="tr">{"// running patroni clusters in production"}</span> },
  { t: 100, l: <span className="tr">{"// side-quest: indie SaaS"}</span> },
  { t: 250, l: <span><span className="tp">$</span> <span className="tc">ls projects | grep --recent</span></span> },
  { t: 200, l: <span className="tr">medis-platform/   ams-ops/   wage-subsidy/   evault/</span> },
  { t: 250, l: <span><span className="tp">$</span> <span className="tc">_</span></span> },
];

function Terminal() {
  const [lines, setLines] = useState<ReactNode[]>([]);
  const [cmd, setCmd] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let dead = false;
    let idx = 0;
    const next = () => {
      if (dead || idx >= BOOT_SEQ.length) return;
      const s = BOOT_SEQ[idx++];
      setTimeout(() => {
        if (dead) return;
        setLines((prev) => [...prev, s.l]);
        next();
      }, s.t);
    };
    next();
    return () => { dead = true; };
  }, []);

  const run = (e: FormEvent) => {
    e.preventDefault();
    const c = cmd.trim().toLowerCase();
    let out: ReactNode;

    if (c === "help" || c === "?") {
      out = <span className="tr">commands: help · about · contact · gh · li · resume · clear</span>;
    } else if (c === "about") {
      out = <span className="tr">{config.fullName} · full-stack engineer · Victoria, BC</span>;
    } else if (c === "contact" || c === "email") {
      out = <span className="tr">→ {config.contactEmail}</span>;
      window.location.href = `mailto:${config.contactEmail}`;
    } else if (c === "gh" || c === "github") {
      out = <span className="tr">→ opening github…</span>;
      window.open(config.social.github.url, "_blank");
    } else if (c === "li" || c === "linkedin") {
      out = <span className="tr">→ opening linkedin…</span>;
      window.open(config.social.linkedin.url, "_blank");
    } else if (c === "resume" || c === "cv") {
      out = <span className="tr">→ opening resume…</span>;
      window.open(config.hero.resume ?? "#", "_blank");
    } else if (c === "clear") {
      setLines([]);
      setCmd("");
      return;
    } else if (!c) {
      return;
    } else {
      out = <span className="tr">command not found: {c} — try `help`</span>;
    }

    setLines((prev) => [
      ...prev,
      <span key={`cmd-${Date.now()}`}><span className="tp">$</span> <span className="tc">{c}</span></span>,
      out,
    ]);
    setCmd("");
  };

  return (
    <div className="term rv" onClick={() => inputRef.current?.focus()}>
      <div className="term-head">
        <div className="term-dots">
          <i /><i /><i />
        </div>
        <div>~/brian — zsh — 80×24</div>
        <div>●</div>
      </div>
      <div className="term-body">
        {lines.map((l, i) => (
          <div key={i} className="term-line">{l}</div>
        ))}
        <form onSubmit={run} className="term-prompt">
          <span className="tp">$</span>
          <input
            ref={inputRef}
            className="term-input"
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            placeholder="type 'help'"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const year = new Date().getFullYear();

  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        {/* Left column */}
        <div className="rv in">
          <div className="hero-eyebrow">
            [01] / portfolio · v3 · {year}
          </div>
          <h1>
            full-stack<br />
            engineer<span className="slash">.</span><br />
            <span style={{ color: "var(--dim)" }}>govtech / healthcare</span>
          </h1>
          <p className="sub">
            {config.hero.subtitle}
          </p>
          <div className="ctas">
            <a className="btn acc" href={`mailto:${config.contactEmail}`}>
              get in touch →
            </a>
            <a
              className="btn"
              href={config.hero.resume ?? "#"}
              target="_blank"
              rel="noreferrer"
            >
              resume.pdf
            </a>
            <a
              className="btn"
              href={config.social.github.url}
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </div>
          <div className="meta">
            <span>
              <b>Victoria, BC</b> · PT-8
            </span>
            <span>3 yrs exp</span>
            <span>
              open to <b>remote / hybrid</b>
            </span>
            <span>
              <b>{config.fullName}</b>
            </span>
          </div>
        </div>

        {/* Right column — terminal */}
        <Terminal />
      </div>
    </section>
  );
}
