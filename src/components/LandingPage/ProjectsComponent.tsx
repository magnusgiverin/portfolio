import { useState, useRef, useEffect } from 'react';
import styles from './ProjectsComponent.module.css';
import TerminalAnimation from './TerminalAnimation';
import PageHeader from '../PageHeader/PageHeader';
import landingPageText from '../../data/text/landingPageText';
import React from 'react';

const ProjectsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [animationOn, setAnimationOn] = useState(false);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    const { projects } = landingPageText

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
                    if (prevCount < projects.title.length) {
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
    }, [isLargeTextVisible, projects.title.length]);

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
                    {projects.title.split("").map((letter, index) => (
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
                    {projects.teaser.map((teaserText, index) => (
                        <p className={styles.teaserText} key={index}>
                            {teaserText}
                        </p>
                    ))}
                    {projects.invitation?.map((invitationText, index) => (
                        <p className={styles.invitation} key={index}>
                            {invitationText}
                        </p>
                    ))}
                    <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                        {projects.buttonText}
                    </button>
                </div>
            </div>
            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;