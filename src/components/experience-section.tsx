"use client";
import { useState } from "react";
import { config } from "@/config";
import type { Experience } from "@/config";

function fmtYear(date: string): string {
  const parts = date.split(" ");
  const year = parts[parts.length - 1];
  return year.slice(-2);
}

function yearSpan(exp: Experience): string {
  const start = fmtYear(exp.startDate ?? "");
  const end = exp.endDate === "Present" ? "now" : fmtYear(exp.endDate ?? "");
  return `${start}—${end}`;
}

function allTags(exp: Experience): string[] {
  const tags = (exp.projects ?? []).flatMap((p) => p.tags ?? []);
  return [...new Set(tags)].slice(0, 6);
}

export default function ExperienceSection() {
  const [open, setOpen] = useState(0);

  const edu = config.education.items[0];

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <h2 className="rv">
          <span className="num">03 /</span>selected work
        </h2>
        <p className="lead rv">
          Click any row to see what I actually shipped. The dates are honest,
          the bullets less so — here&apos;s the unvarnished version.
        </p>

        <div>
          {config.projects.map((xp, i) => (
            <div key={i}>
              <div
                className="xp-row"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="xp-yr">{yearSpan(xp)}</div>
                <div>
                  <div className="xp-ti">{xp.title}</div>
                  {xp.company && <div className="xp-co">{xp.company}</div>}
                </div>
                <div className="xp-tags">
                  {allTags(xp).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="xp-ar">{open === i ? "−" : "+"}</div>
              </div>

              <div className={`proj-detail${open === i ? " open" : ""}`}>
                <div className="proj-inner">
                  {(xp.projects ?? []).map((p, j) => (
                    <div key={j} className="proj-card">
                      <h4>{p.title}</h4>
                      <div className="desc">{p.description}</div>
                      <ul>
                        {(p.bullets ?? []).map((b, k) => (
                          <li key={k}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education row — non-expandable */}
          <div className="xp-row no-expand">
            <div className="xp-yr">
              {edu.startDate.slice(-2)}—{edu.endDate.slice(-2)}
            </div>
            <div>
              <div className="xp-ti">{edu.degree}</div>
              <div className="xp-co">
                {edu.school} · {edu.description}
              </div>
            </div>
            <div className="xp-tags">
              <span>education</span>
            </div>
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
