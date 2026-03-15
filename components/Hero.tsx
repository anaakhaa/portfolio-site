import TypingRoles from './TypingRoles';

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-wrap">
        <div>
          <p className="kicker">AI Postgraduate Portfolio</p>
          <h1>
            Hi, I&apos;m <span className="highlight">Your Name</span>
          </h1>
          <TypingRoles />
          <p className="muted">
            I build performant and trustworthy AI systems from research experiments to deployable
            products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="card hero-card">
          <h3>Postgraduate Highlights</h3>
          <p className="muted">M.Sc. AI • Thesis in Trustworthy LLM Evaluation</p>
          <ul>
            <li>5+ Research-led AI Projects</li>
            <li>2 Publications / Posters</li>
            <li>1 Teaching Assistantship</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
