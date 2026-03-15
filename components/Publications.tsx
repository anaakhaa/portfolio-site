const publications = [
  '2025 — Interpretable Hybrid Models for Clinical Decision Support (Conference)',
  '2024 — Fairness-aware Prompting for Educational Chatbots (Workshop)',
  '2024 — Best Postgraduate AI Innovation Showcase (Award)'
];

export default function Publications() {
  return (
    <section className="section container" id="publications">
      <h2 className="section-title">Publications & Recognition</h2>
      <div className="card hero-card">
        <ul>
          {publications.map((publication) => (
            <li key={publication}>{publication}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
