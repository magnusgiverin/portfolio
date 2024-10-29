import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';

import PageHeader from '../PageHeader/PageHeader';
import TerminalAnimation from './TerminalAnimation';

const ProjectsComponent = () => {
    const curtainRef = useRef(null);
    const largeTextRef = useRef(null);
    const [fadeInText, setFadeInText] = useState(false);
    const [animationOn, setAnimationOn] = useState(false);

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
            { threshold: 1.0 }
        );

        if (curtainRef.current) curtainObserver.observe(curtainRef.current);
        if (largeTextRef.current) textObserver.observe(largeTextRef.current);

        return () => {
            if (curtainRef.current) curtainObserver.unobserve(curtainRef.current);
            if (largeTextRef.current) textObserver.unobserve(largeTextRef.current);
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

            <div className={`${styles.teaserText} ${styles.teaserTextContainer} ${fadeInText ? styles.fadeIn : ''}`}>
                <p>Crafted to push boundaries, built to solve real-world challenges, and designed with precision and purpose. Each project is a glimpse into advanced solutions and unconventional ideas, where complexity meets clarity.</p>
                <p>Discover the stories behind the code, the challenges that pushed the limits, and the passion for clean, impactful design.</p>
                <p className={styles.invitation}>The journey awaits. Are you ready to dive in?</p>
                
                <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                    Explore My Projects
                </button>

            </div>

            {animationOn && (
                <TerminalAnimation />
            )}
        </div>
    );
};

export default ProjectsComponent;
