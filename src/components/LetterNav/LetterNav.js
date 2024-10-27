import { useEffect, useState } from 'react';
import styles from './LetterNav.module.css';

const LetterNav = ({ sections, showNav }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [hasCheckedNav, setHasCheckedNav] = useState(false);

    useEffect(() => {
        // Initialize observer after confirming showNav
        if (showNav !== undefined) {
            setHasCheckedNav(true);
        }
    }, [showNav]);

    useEffect(() => {
        if (!hasCheckedNav) return; // Prevent observer setup until showNav is checked

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
    }, [sections, activeSection, hasCheckedNav]);

    const letters = ['A', 'B', 'C', 'D'];

    // Only render the nav if hasCheckedNav is true
    if (!hasCheckedNav) {
        return null;
    }

    return (
        <nav className={`${showNav ? styles.show : styles.hide} ${styles.nav}`}>
            {letters.map((label, index) => (
                <span
                    key={label}
                    className={`${styles.navItem} ${activeSection === index ? styles.active : ''} ${activeSection === index ? styles.flicker : ''}`}
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
