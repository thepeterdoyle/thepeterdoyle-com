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

const operatingModel = [
  {
    number: "01",
    title: "Define the outcome.",
    body: "What should be different when the work is done? What does success actually look like, and what decision are we trying to improve?",
  },
  {
    number: "02",
    title: "Find the constraint.",
    body: "Where does work slow down, information break, risk accumulate, or the system stop producing the result we need?",
  },
  {
    number: "03",
    title: "Measure what matters.",
    body: "Which facts or uncertainties could materially change the decision? Measure those before adding another KPI.",
  },
  {
    number: "04",
    title: "Remove what doesn't.",
    body: "Challenge requirements, metrics, handoffs, and processes that exist only because they have always existed.",
  },
  {
    number: "05",
    title: "Simplify the system.",
    body: "Make the remaining logic easier to understand, validate, maintain, and use before trying to make it faster.",
  },
  {
    number: "06",
    title: "Automate for leverage.",
    body: "Only then ask where software, automation, or AI can multiply speed, quality, and business impact.",
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
          <p className="hero-method">
            Define the outcome. Find the constraint. Measure what matters.
            Simplify the system. Then automate.
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
          begin with the decision. What are we trying to accomplish? What would
          tell us we&apos;re succeeding? What information would cause someone to
          act differently? Data becomes valuable when it changes what we do—not
          simply because we can measure it.
        </p>
        <blockquote>
          “The goal isn&apos;t more data. The goal is greater clarity.”
        </blockquote>
      </section>

      <section className="section approach" id="approach">
        <div className="section-heading">
          <div>
            <p className="section-kicker">BEFORE I BUILD ANYTHING</p>
            <h2>Understand the system before choosing the tool.</h2>
          </div>
          <p>
            I don&apos;t begin with a dashboard, a complex query, or an AI
            solution. I begin by understanding the outcome, the constraint, the
            evidence, and the people doing the work.
          </p>
        </div>

        <div className="operating-model" aria-label="Peter Doyle operating model">
          {operatingModel.map((step) => (
            <article className="operating-step" key={step.number}>
              <span className="operating-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>

        <div className="automation-rule">
          <span>THE RULE</span>
          <p>
            Technology can make a good process dramatically better. It can also
            make a bad process dramatically faster.
          </p>
          <strong>
            Understand it. Simplify it. Then use automation or AI where it
            creates measurable leverage.
          </strong>
        </div>
      </section>

      <section className="section people" aria-labelledby="people-heading">
        <div className="people-lead">
          <p className="section-kicker">CONTEXT MATTERS</p>
          <h2 id="people-heading">
            The people closest to the problem are part of the data.
          </h2>
        </div>
        <div className="people-body">
          <p>
            A database can tell me what happened. It does not always tell me
            why. Some of my most useful work starts with conversations—with
            operators, analysts, managers, and leaders who each understand a
            different part of the system.
          </p>
          <p>
            I want to know what they are seeing, where work gets stuck, which
            assumptions may be wrong, and what decision they actually need to
            make. Then the data can test the story.
          </p>
          <div className="people-callout">
            <span>CONVERSATION → CONTEXT → EVIDENCE → DECISION</span>
          </div>
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
          understand the problem before selecting the technology, identify the
          real constraint, and build—not merely recommend. The objective is not
          more AI. It is a better system and a better decision.
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
