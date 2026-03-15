export default function About() {
  return (
    <section className="section container" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="grid-2">
        <article className="card hero-card">
          <h3>Research Focus</h3>
          <p className="muted">
            I focus on trustworthy generative AI, low-resource NLP, and interpretable computer
            vision for real-world impact.
          </p>
        </article>
        <article className="card hero-card">
          <h3>What I Build</h3>
          <p className="muted">
            End-to-end AI applications with robust data pipelines, model evaluation, and scalable
            deployment workflows.
          </p>
        </article>
      </div>
    </section>
  );
}
