import { config } from "@/config";

export default function ReadingSection() {
  const { items } = config.reading;
  const total = String(items.length).padStart(2, "0");

  return (
    <section className="sec" id="reading">
      <div className="wrap">
        <h2 className="rv">
          <span className="num">05 /</span>currently reading
        </h2>
        <p className="lead rv">{config.reading.subtitle}</p>

        <div className="read-grid">
          {items.map((r, i) => (
            <div key={i} className="read-item rv">
              <div className="read-meta">
                <span>{r.tag}</span>
                <span>
                  {String(i + 1).padStart(2, "0")} / {total}
                </span>
              </div>
              <h4>{r.title}</h4>
              <p style={{ marginBottom: 8 }}>by {r.by}</p>
              <p>{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
