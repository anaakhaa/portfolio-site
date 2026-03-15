const tools = [
  'Python',
  'TypeScript',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'RAG',
  'MLOps',
  'SQL',
  'Docker',
  'Vercel'
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
