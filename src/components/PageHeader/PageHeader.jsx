import { useEffect, useRef } from 'react';
import styles from './PageHeader.module.css';

const PageHeader = ({ position = 'top' }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } else {
                    entry.target.classList.remove(styles.show);
                }
            },
            { threshold: 1 }
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
            className={`${styles.header} ${position === 'top' ? styles.headerTop : styles.headerBottom}`}
        >
            <div className={styles.line}></div> {/* Left line */}
            <h1>{'MAGNUS'}</h1>
            <div className={styles.line}></div> {/* Right line */}
        </header>
    );
}

export default PageHeader;