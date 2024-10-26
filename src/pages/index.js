import { useRef, useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';
import styles from '../styles/Index.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const landingPageRef = useRef(null);
  const projectPageRef = useRef(null);

  // Declare sections outside of useEffect
  const sections = [landingPageRef, projectPageRef];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((ref) => ref.current === entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((ref) => {
      if (ref.current) sectionObserver.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) sectionObserver.unobserve(ref.current);
      });
    };
  }, [sections]);

  return (
    <div>
      {/* Left-hand side navigation */}
      <nav className={styles.nav}>
        {['A', 'B'].map((label, index) => (
          <span
            key={label}
            className={`${styles.navItem} ${activeSection === index ? styles.active : ''}`}
            onClick={() => {
              if (sections[index].current) {
                sections[index].current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            [{label}]
          </span>
        ))}
      </nav>

      {/* Page Sections */}
      <div ref={landingPageRef}>
        <LandingPage scrollToRef={projectPageRef}/>
      </div>
      <div ref={projectPageRef}>
        <ProjectsPage />
      </div>
    </div>
  );
}
