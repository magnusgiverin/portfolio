import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import TerminalAnimation from './TerminalAnimation';

const ProjectsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [animationOn, setAnimationOn] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    observer.disconnect(); // Stop observing after the first trigger
                }
            });
        }, { threshold: 0.5 }); // Trigger when 100% of the component is in view

        const currentRef = teaserTextContainerRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
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
                className={`${styles.largeText} ${fadeIn ? styles.fadeIn : ''}`}
            >
                {"Projects </>"}
            </div>

            <div
                ref={teaserTextContainerRef}
                className={styles.teaserTextContainer}
            >
                <p className={`${fadeIn ? styles['delay-1'] + ' ' + styles.fadeIn : ''} ${styles.teaserText}`}>
                    Crafted to push boundaries, built to solve real-world challenges, and designed with precision and purpose. Each project is a glimpse into advanced solutions and unconventional ideas, where complexity meets clarity.
                </p>
                <p className={`${fadeIn ? styles['delay-2'] + ' ' + styles.fadeIn : ''} ${styles.teaserText}`}>
                    Discover the stories behind the code, the challenges that pushed the limits, and the passion for clean, impactful design.
                </p>
                <p className={`${fadeIn ? styles['delay-3'] + ' ' + styles.fadeIn : ''} ${styles.invitation}`}>
                    The journey awaits. Are you ready to dive in?
                </p>

                <button className={`${fadeIn ? styles['delay-btn'] + ' ' + styles.fadeIn : ''} ${styles.showMoreBtn}`} onClick={handleButtonClick}>
                    Explore My Projects
                </button>
            </div>


            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;
