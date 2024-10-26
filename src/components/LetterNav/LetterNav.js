import { useEffect, useState } from 'react';
import styles from './LetterNav.module.css';

const LetterNav = ({ sections, showNav }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [initialHide, setInitialHide] = useState(true); // State to control initial hiding

    useEffect(() => {
        // Set initialHide to false after a brief delay
        const timer = setTimeout(() => {
            setInitialHide(false);
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sections.findIndex((ref) => ref.current === entry.target);
                        if (index !== activeSection) {
                            setActiveSection(index);
                        }
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
    }, [sections, activeSection]);

    const letters = ['A', 'B', 'C', 'D'];

    return (
        <nav className={`${styles.nav} ${showNav ? styles.show : styles.hide} ${initialHide ? styles.initialHide : ''}`}>
            {letters.map((label, index) => (
                <span
                    key={label}
                    className={`${styles.navItem} ${activeSection === index ? styles.active : ''} ${activeSection === index ? styles.flicker : ''}`} // Add flicker class if active
                    onClick={() => {
                        if (sections[index].current) {
                            sections[index].current.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    {activeSection === index ? `[${label}]` : label}
                </span>
            ))}
        </nav>
    );
};

export default LetterNav;
