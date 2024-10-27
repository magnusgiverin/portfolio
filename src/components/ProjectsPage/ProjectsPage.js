import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsPage.module.css';

import PageHeader from '../PageHeader/PageHeader';
import TerminalAnimation from './TerminalAnimation';

const ProjectsPage = () => {
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
            { threshold: 0.5 }
        );

        if (curtainRef.current) curtainObserver.observe(curtainRef.current);
        if (largeTextRef.current) textObserver.observe(largeTextRef.current);

        return () => {
            if (curtainRef.current) curtainObserver.unobserve(curtainRef.current);
            if (largeTextRef.current) textObserver.unobserve(largeTextRef.current);
        };
    }, []);

    const handleButtonClick = () => {
        setAnimationOn(true); // Turn on dark screen
    };
    
    return (
        <div className={`min-h-screen ${styles.projectsPage} ${styles.lightUp}`}>
            <PageHeader />

            <div 
                ref={largeTextRef} 
                className={`${styles.largeText} ${fadeInText ? styles.fadeIn : ''}`}
                style={{ marginBottom: '60px' }}
            >
                Projects
            </div>

            <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                Go to Projects
            </button>

            {animationOn && (
               <TerminalAnimation/>
            )}
        </div>
    );
};

export default ProjectsPage;