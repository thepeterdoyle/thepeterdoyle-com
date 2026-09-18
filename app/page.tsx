const HEADSHOT_URL =
  "https://raw.githubusercontent.com/thepeterdoyle/thepeterdoyle-com/main/peter-doyle-headshot.jpg";

const SPEAKING_URL =
  "https://raw.githubusercontent.com/thepeterdoyle/thepeterdoyle-com/main/peter-doyle-speaking.JPEG";

const proof = [
  { value: "10+", label: "Years in data & analytics" },
  { value: "$250K+", label: "Documented annual business impact" },
  { value: "~300%", label: "Query efficiency improvement" },
  { value: "19", label: "SQL conference presentations" },
];

const principles = [
  {
    number: "01",
    title: "Start with the decision.",
    body: "Before the dashboard, model, query, or AI system: what decision are we trying to make, what risk are we reducing, and what does success actually look like?",
  },
  {
    number: "02",
    title: "Every metric earns its place.",
    body: "If a metric does not clarify an important question, reveal meaningful risk, or support action, it probably does not belong on the screen.",
  },
  {
    number: "03",
    title: "Trace the evidence.",
    body: "Reliable decisions require trustworthy data, clear logic, validation, and the ability to explain where the answer came from.",
  },
];

const work = [
  {
    company: "Fiserv",
    title: "Turned a backlog into a decision system",
    metric: "$250K+ estimated annual impact",
    description:
      "Reconstructed an assignment workflow through stakeholder interviews, then built SQL-driven routing logic around certifications, schedules, time zones, completion status, and reassignment rules.",
  },
  {
    company: "The Home Depot",
    title: "Reduced processing while improving performance",
    metric: "75% less volume · ~300% higher query efficiency",
    description:
      "Refactored legacy SQL and indexing logic while supporting supply-chain network strategy, returns analysis, logistics, store expansion, and delivery optimization.",
  },
  {
    company: "Kaiser Permanente",
    title: "Measured the process, not just the outcome",
    metric: "Billion-row healthcare & financial datasets",
    description:
      "Mapped operational workflows and SLAs to expose bottlenecks leaders could act on, including hiring-cycle differences across clinical roles.",
  },
  {
    company: "ACRIBEX",
    title: "Building for trust in the AI era",
    metric: "Applied R&D",
    description:
      "An AI-assisted document-processing architecture focused on source fidelity, structured transformation, validation, lineage, provenance, and defensible downstream analytics.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Peter Doyle home">
          PETER <span>DOYLE</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">Approach</a>
          <a href="#work">Work</a>
          <a href="#speaking">Speaking</a>
          <a
            className="nav-cta"
            href="https://www.linkedin.com/in/thepeterdoyle"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">DATA · AI · DECISION SYSTEMS</p>
          <h1>Start with the decision.</h1>
          <p className="hero-lede">
            I turn complex data, ambiguous business questions, and emerging
            technology into systems that help people make better decisions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View selected work
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/thepeterdoyle"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Peter Doyle portrait and brand statement">
          <img
            className="hero-portrait"
            src={HEADSHOT_URL}
            alt="Peter Doyle"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-image-shade" aria-hidden="true" />
          <div className="signal-line" aria-hidden="true" />
          <div className="visual-index">PD / 01</div>

          <div className="hero-identity">
            <strong>PETER DOYLE</strong>
            <span>ATLANTA · USA</span>
          </div>

          <div className="visual-stack">
            <span>QUESTION</span>
            <span>EVIDENCE</span>
            <span>DECISION</span>
            <strong>IMPACT</strong>
          </div>

          <p className="hero-visual-note">
            The technology changes.
            <br />
            The thinking doesn&apos;t.
          </p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career proof points">
        {proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="statement section">
        <p className="section-kicker">POINT OF VIEW</p>
        <h2>Every metric has to earn its place.</h2>
        <p>
          I&apos;ve seen organizations begin with the dashboard. I prefer to
          begin with the decision. Data becomes valuable when it changes what
          we do—not simply because we can measure it.
        </p>
        <blockquote>
          “The goal isn&apos;t more data. The goal is greater clarity.”
        </blockquote>
      </section>

      <section className="section approach" id="approach">
        <div className="section-heading">
          <p className="section-kicker">HOW I THINK</p>
          <h2>Evidence underneath. Clarity on the surface.</h2>
          <p>
            My background spans analytical work, visual storytelling, structured
            interpretation, and systems thinking. The result is a simple
            operating principle: understand the problem before choosing the
            tool.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2>Business problems first. Technology second.</h2>
          </div>
          <p>
            SQL, BI, data engineering, visualization, and AI are tools. Their
            value is measured by what improves because they were used.
          </p>
        </div>

        <div className="work-list">
          {work.map((item, index) => (
            <article className="work-card" key={item.company}>
              <div className="work-index">0{index + 1}</div>
              <div className="work-company">{item.company}</div>
              <div className="work-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="work-metric">{item.metric}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section speaking" id="speaking">
        <div className="speaking-copy">
          <p className="section-kicker">SPEAKING &amp; TEACHING</p>
          <h2>19 presentations. 10 states. One principle: make complexity useful.</h2>
          <p>
            I&apos;ve presented SQL, optimization, data modeling, standardization,
            and analytics practices at PASS Data Community Summit and SQL
            Saturday events, while also mentoring analysts on translating
            business requirements into scalable solutions.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/thepeterdoyle"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn →
          </a>
        </div>

        <figure className="photo-frame">
          <img
            className="speaking-photo"
            src={SPEAKING_URL}
            alt="Peter Doyle presenting SQL to an audience"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>SQL · SPEAKING &amp; TEACHING</span>
            <small>Conference and community presentations across 10 states.</small>
          </figcaption>
        </figure>
      </section>

      <section className="section future">
        <p className="section-kicker">WHAT I&apos;M BUILDING TOWARD</p>
        <h2>
          Applied AI and decision systems that work close to the business.
        </h2>
        <p>
          The next generation of valuable technical professionals will move
          between executives, users, data, systems, and models. They will
          understand the problem before selecting the technology—and they will
          build, not merely recommend.
        </p>
      </section>

      <section className="contact section">
        <p className="section-kicker">LET&apos;S TALK</p>
        <h2>Have a difficult question hiding inside your data?</h2>
        <p>Those are usually the interesting ones.</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/thepeterdoyle"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn →
          </a>
          <a
            href="https://github.com/thepeterdoyle"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Peter Doyle</span>
        <span>Atlanta, Georgia</span>
        <span>Data · AI · Decision Systems</span>
      </footer>
    </main>
  );
}
