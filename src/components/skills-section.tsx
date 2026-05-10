const SKILLS = [
  { t: "Full-stack", d: "Frontend & backend, end-to-end ownership" },
  { t: "Platform / DevOps", d: "K8s/OpenShift, CI/CD, Helm, Vault" },
  { t: "Public service", d: "Built tools used by ministries across BC" },
  { t: "Healthcare", d: "Financial reporting & RBAC for BC Ministry of Health" },
  { t: "Stakeholders", d: "Translate between exec, ops, and engineering" },
];

export default function SkillsSection() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <h2 className="rv">
          <span className="num">02 /</span>what I bring
        </h2>
        <p className="lead rv">
          A short list. Most of these compound — building public-sector tools
          without DevOps is a rough afternoon, and there&apos;s no healthcare
          engineering without stakeholder management.
        </p>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={i} className="skill rv">
              <div className="ix">[{String(i + 1).padStart(2, "0")}]</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
