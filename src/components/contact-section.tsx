import { config } from "@/config";

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="rv">
          <div className="contact-eyebrow">[07] / get in touch</div>
          <h2 className="contact-big">
            let&apos;s<br />
            build<br />
            something.<br />
            <a href={`mailto:${config.contactEmail}`}>
              {config.contactEmail} →
            </a>
          </h2>
        </div>

        <div className="foot">
          <div>© {year} {config.fullName}</div>
          <div className="foot-links">
            <a
              href={config.social.github.url}
              target="_blank"
              rel="noreferrer"
            >
              github↗
            </a>
            <a
              href={config.social.linkedin.url}
              target="_blank"
              rel="noreferrer"
            >
              linkedin↗
            </a>
            {config.hero.resume && (
              <a
                href={config.hero.resume}
                target="_blank"
                rel="noreferrer"
              >
                resume↗
              </a>
            )}
          </div>
          <div>built with next.js · cmd+k to navigate</div>
        </div>
      </div>
    </section>
  );
}
