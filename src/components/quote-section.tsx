import { config } from "@/config";

export default function QuoteSection() {
  const t = config.testimonials.items[0];
  if (!t) return null;

  const initials = t.name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="sec">
      <div className="wrap">
        <h2 className="rv">
          <span className="num">06 /</span>kind words
        </h2>
        <div className="quote rv">
          <p className="q">&ldquo;{t.quote}&rdquo;</p>
          <div className="who">
            <div className="av">{initials}</div>
            <div>
              <b>{t.name.trim()}</b> · {t.title}
              <br />
              <span>{t.company}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
