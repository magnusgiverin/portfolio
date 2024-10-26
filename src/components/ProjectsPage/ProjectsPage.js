import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './ProjectsPage.module.css';

import PageHeader from '../PageHeader/PageHeader';
import TerminalAnimation from './TerminalAnimation';

const ProjectsPage = () => {
    const router = useRouter();
    const [showMore, setShowMore] = useState(false);
    const curtainRef = useRef(null);
    const largeTextRef = useRef(null);
    const [revealCurtain, setRevealCurtain] = useState(false);
    const [fadeInText, setFadeInText] = useState(false);
    const [darkScreen, setDarkScreen] = useState(false);

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
        setDarkScreen(true); // Turn on dark screen
        document.body.style.overflow = 'hidden'; // Lock scrolling

        setTimeout(() => {
            // router.push('/projects');
        }, 5000); // Adjust delay for your animation
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

            <div ref={curtainRef} className={styles.curtainContainer}>
                <img src="/image.png" alt="Revealed Image" className={styles.image} />
                <div className={`${styles.curtain} ${revealCurtain ? styles.reveal : ''}`}></div>
            </div>

            <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                Go to Projects
            </button>

            {showMore && (
                <div className="text-center mt-4">
                    <p>This is more detailed information that appears after clicking "Show More."</p>
                </div>
            )}

            {darkScreen && (
               <TerminalAnimation/>
            )}
        </div>
    );
};

export default ProjectsPage;
