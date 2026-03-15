import Image from 'next/image';

const projects = [
  {
    title: 'Adaptive AI Tutor',
    description: 'RAG based personalized tutoring assistant with dynamic feedback loops.',
    image: '/projects/adaptive-ai-tutor.svg',
    link: '#'
  },
  {
    title: 'Smart Waste Detection',
    description: 'Computer vision model for realtime waste classification and sorting.',
    image: '/projects/smart-waste-detection.svg',
    link: '#'
  },
  {
    title: 'Multilingual Sentiment Engine',
    description: 'Cross-lingual sentiment analysis pipeline for underrepresented languages.',
    image: '/projects/multilingual-sentiment-engine.svg',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>
            <Image src={project.image} alt={project.title} width={420} height={240} priority />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <a href={project.link}>View project →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
