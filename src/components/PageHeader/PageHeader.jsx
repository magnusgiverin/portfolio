import { useEffect, useRef } from 'react';
import styles from './PageHeader.module.css';

const PageHeader = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } else {
                    entry.target.classList.remove(styles.show); // Reset animation when out of view
                }
            },
            { threshold: 1 } // Trigger when 10% of the header is in view
        );

        const headerElement = headerRef.current;
        if (headerElement) {
            observer.observe(headerElement);
        }

        return () => {
            if (headerElement) {
                observer.unobserve(headerElement);
            }
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`w-full flex items-center justify-center p-4 ${styles.header}`}
        >
            <div className={styles.line}></div> {/* Left line */}
            <h1>{'{ MAGNUS }'}</h1>
            <div className={styles.line}></div> {/* Right line */}
        </header>
    );
}

export default PageHeader;