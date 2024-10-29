import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';

import PageHeader from '../PageHeader/PageHeader';
import TerminalAnimation from './TerminalAnimation';

const ProjectsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [fadeInText, setFadeInText] = useState(false);
    const [fadeInTeaser, setFadeInTeaser] = useState(false);
    const [animationOn, setAnimationOn] = useState(false);

    useEffect(() => {
        const textObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === largeTextRef.current) setFadeInText(true);
                        if (entry.target === teaserTextContainerRef.current) setFadeInTeaser(true);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (largeTextRef.current) textObserver.observe(largeTextRef.current);
        if (teaserTextContainerRef.current) textObserver.observe(teaserTextContainerRef.current);

        return () => {
            if (largeTextRef.current) textObserver.unobserve(largeTextRef.current);
            if (teaserTextContainerRef.current) textObserver.unobserve(teaserTextContainerRef.current);
        };
    }, []);

    const handleButtonClick = () => {
        setAnimationOn(true);
    };

    return (
        <div className={`min-h-screen ${styles.projectsComponent}`}>
            <PageHeader />
            <div
                ref={largeTextRef}
                className={`${styles.largeText} ${fadeInText ? styles.fadeIn : ''}`}
            >
                {"Projects </>"}
            </div>

            <div
                ref={teaserTextContainerRef}
                className={`${styles.teaserTextContainer} ${fadeInTeaser ? styles.fadeIn : ''}`}
            >
                <p>Crafted to push boundaries, built to solve real-world challenges, and designed with precision and purpose. Each project is a glimpse into advanced solutions and unconventional ideas, where complexity meets clarity.</p>
                <p>Discover the stories behind the code, the challenges that pushed the limits, and the passion for clean, impactful design.</p>
                <p className={styles.invitation}>The journey awaits. Are you ready to dive in?</p>
                
                <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                    Explore My Projects
                </button>
            </div>

            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;