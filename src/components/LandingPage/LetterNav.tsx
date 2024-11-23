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

        // Check for the stored activeSection in sessionStorage when the component is mounted
        const storedActiveSection = sessionStorage.getItem('activeSection');
        if (storedActiveSection) {
            setActiveSection(Number(storedActiveSection)); // Set the stored value if available
        }

        const handleScroll = () => {
            let nearestSection = null;
            let maxTopPosition = -Infinity;
            const margin = 500; // Margin to consider when right below a section

            // Iterate over sections and find the nearest one above the viewport
            sections.forEach((ref) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const sectionTop = rect.top;

                    // Only consider sections that are above the viewport or within the margin
                    if (sectionTop <= margin && sectionTop > maxTopPosition) {
                        maxTopPosition = sectionTop;
                        nearestSection = sections.findIndex((sectionRef) => sectionRef.current === ref.current);
                    }
                }
            });

            if (nearestSection !== null && nearestSection !== activeSection) {
                setActiveSection(nearestSection);
                sessionStorage.setItem('activeSection', nearestSection.toString()); // Store the updated activeSection in sessionStorage
            }
        };

        // Set up scroll listener
        window.addEventListener('scroll', handleScroll);

        // Clean up scroll listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, activeSection, hasCheckedNav]);

    const letters = ['A', 'B', 'C', 'D', "E"];

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
