const TECH = [
  "TypeScript", "Node.js", "React", "Next.js", "Vue", "Nest.js", "Express",
  "Tailwind", "MUI", "Playwright", "Jest", "Postgres", "Docker",
  "Kubernetes", "OpenShift", "AWS",
];

const ITEMS = [...TECH, ...TECH, ...TECH];

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{ paddingTop: 72, paddingBottom: 72, borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <h2
          className="rv"
          style={{
            fontFamily: "var(--font-disp)",
            fontSize: "clamp(28px, 3.4vw, 44px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              marginRight: 14,
              fontSize: "0.55em",
              verticalAlign: 6,
              letterSpacing: "0.04em",
            }}
          >
            04 /
          </span>
          tech I reach for
        </h2>
        <p
          className="rv"
          style={{ color: "var(--dim)", maxWidth: "64ch", marginBottom: 36, fontSize: 14 }}
        >
          Daily drivers, mostly. The ones I&apos;d happily debug at 11pm with no caffeine left.
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {ITEMS.map((t, i) => (
            <span key={i}>
              <b>{t}</b>
              <em>×</em>
            </span>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track rev">
          {ITEMS.map((t, i) => (
            <span key={i}>
              {"// "}
              <b>{t}</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
