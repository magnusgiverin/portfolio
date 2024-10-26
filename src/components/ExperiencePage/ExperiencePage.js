import { useState, useRef, useEffect } from 'react';
import styles from './ExperiencePage.module.css';
import PageHeader from '../PageHeader/PageHeader';

const ExperiencePage = () => {
    const [showMore, setShowMore] = useState(false);
    const curtainRef = useRef(null);
    const largeTextRef = useRef(null);
    const [revealCurtain, setRevealCurtain] = useState(false);
    const [fadeInText, setFadeInText] = useState(false);

    useEffect(() => {
        const curtainObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setRevealCurtain(true);
            },
            { threshold: 0.5 }
        );

        const textObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setFadeInText(true);
            },
            { threshold: 0.5 }
        );

        if (curtainRef.current) curtainObserver.observe(curtainRef.current);
        if (largeTextRef.current) textObserver.observe(largeTextRef.current);

        return () => {
            if (curtainRef.current) curtainObserver.unobserve(curtainRef.current);
            if (largeTextRef.current) textObserver.unobserve(largeTextRef.current);
        };
    }, []);

    return (
        <div className={`min-h-screen ${styles.projectsPage} ${styles.lightUp}`}>
           <PageHeader/>

            <div 
                ref={largeTextRef} 
                className={`${styles.largeText} ${fadeInText ? styles.fadeIn : ''}`}
                style={{ marginBottom: '60px' }}
            >
                Experience
            </div>

            <div ref={curtainRef} className={styles.curtainContainer}>
                <img src="/image.png" alt="Revealed Image" className={styles.image} />
                <div className={`${styles.curtain} ${revealCurtain ? styles.reveal : ''}`}></div>
            </div>

            <button className={styles.showMoreBtn} onClick={() => setShowMore(!showMore)}>
                {showMore ? "Hide" : "Show More"}
            </button>

            {showMore && (
                <div className="text-center mt-4">
                    <p>This is more detailed information that appears after clicking "Show More."</p>
                </div>
            )}
        </div>
    );
};

export default ExperiencePage;
