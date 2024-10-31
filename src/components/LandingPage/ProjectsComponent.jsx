import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';
import TerminalAnimation from './TerminalAnimation';
import PageHeader from '../PageHeader/PageHeader';

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
            <PageHeader />
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
                        Each project is crafted to push boundaries, tackle real-world challenges, and deliver purposeful results. These are more than just code—each one represents a unique solution to a complex problem, where cutting-edge technology and creative vision come together to transform ideas into reality. My work showcases both the functionality and finesse needed to bring clarity to even the most intricate concepts.
                    </p>
                    <p className={styles.teaserText}>
                        Dive into the stories behind the code, uncover the thought processes that solved pressing challenges, and explore how design and efficiency blend to form impactful results. Each project is a journey of innovation and skill, reflecting my dedication to clean, reliable, and powerful solutions that stand the test of time.
                    </p>
                    <p className={styles.teaserText}>
                    The journey awaits—each project inviting you to explore the depth of creativity, logic, and technical skill. 
                    </p>
                    <p className={styles.invitation}>
                        Are you ready to dive in and see where it leads?
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