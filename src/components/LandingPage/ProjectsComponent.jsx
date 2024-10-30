import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';
import TerminalAnimation from './TerminalAnimation';

const ProjectsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [animationOn, setAnimationOn] = useState(false);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    const text = "Projects";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsLargeTextVisible(true);
                } else {
                    setIsLargeTextVisible(false);
                }
            });
        }, { threshold: 1 });

        if (largeTextRef.current) {
            observer.observe(largeTextRef.current);
        }

        return () => {
            if (largeTextRef.current) observer.unobserve(largeTextRef.current);
        };
    }, []);

    useEffect(() => {
        let interval;
        let letterCount = visibleLetterCount; // Start from current visible count
    
        if (isLargeTextVisible) {
            interval = setInterval(() => {
                setVisibleLetterCount((prevCount) => {
                    if (prevCount < text.length) {
                        letterCount = prevCount + 1;
                        return letterCount;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 100);
        } else {
            interval = setInterval(() => {
                setVisibleLetterCount((prevCount) => {
                    if (prevCount > 0) {
                        letterCount = prevCount - 1;
                        return letterCount;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 100);
        }
    
        return () => clearInterval(interval);
    }, [isLargeTextVisible, text.length]);
    
    const handleButtonClick = () => {
        setAnimationOn(true);
    };

    return (
        <div className={`min-h-screen ${styles.projectsComponent}`}>
            <div className={styles.leftColumn}>
                <div
                    ref={largeTextRef}
                    className={`${styles.largeText}`}
                >
                    {text.split("").map((letter, index) => (
                        <span
                            key={index}
                            className={`${styles.letter} ${index < visibleLetterCount ? styles.fadeInLetter : ''}`}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div ref={teaserTextContainerRef} className={`${styles.teaserTextContainer} ${styles.fadeIn}`}>
                    <p className={styles.teaserText}>
                        Crafted to push boundaries, built to solve real-world challenges, and designed with precision and purpose. Each project is a glimpse into advanced solutions and unconventional ideas, where complexity meets clarity.
                    </p>
                    <p className={styles.teaserText}>
                        Discover the stories behind the code, the challenges that pushed the limits, and the passion for clean, impactful design.
                    </p>
                    <p className={styles.invitation}>
                        The journey awaits. Are you ready to dive in?
                    </p>

                    <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                        Explore My Projects
                    </button>
                </div>
            </div>

            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;