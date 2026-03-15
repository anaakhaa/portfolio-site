export default function Contact() {
  return (
    <>
      <section className="section container" id="contact">
        <h2 className="section-title">Let&apos;s Collaborate</h2>
        <div className="card hero-card">
          <p className="muted">
            Open to research internships, AI engineering roles, and collaboration opportunities.
            Reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.
          </p>
        </div>
      </section>
      <footer>
        <div className="container">© {new Date().getFullYear()} Your Name • AI Portfolio</div>
      </footer>
    </>
  );
}
