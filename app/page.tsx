import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}
