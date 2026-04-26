import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Rsvp from './components/Rsvp';
import Venue from './components/Venue';

const sections = ['hero', 'story', 'gallery', 'schedule', 'venue', 'rsvp'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Floating Navigation Dots */}
      <nav className="floating-nav">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className={activeSection === s ? 'active' : ''}
            aria-label={s}
          />
        ))}
      </nav>

      <section id="hero" className="snap-section">
        <Hero />
      </section>
      <section id="story" className="snap-section">
        <Story />
      </section>
      <section id="gallery" className="snap-section">
        <Gallery />
      </section>
      <section id="schedule" className="snap-section">
        <Schedule />
      </section>
      <section id="venue" className="snap-section">
        <Venue />
      </section>
      <section id="rsvp" className="snap-section min-h-screen">
        <Rsvp />
      </section>
    </div>
  );
}
