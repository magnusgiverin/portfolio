import { useState, useRef, useEffect } from 'react';
import styles from './SkillsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import { useRouter } from 'next/navigation';
import landingPageText from '../../data/text/landingPageText';
import React from 'react';

const SkillsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    const { skills } = landingPageText

    const router = useRouter();

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
                    if (prevCount < skills.title.length) {
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
    }, [isLargeTextVisible, skills.title.length]);

    const handleButtonClick = () => {
        void router.push("/skills")
    };

    return (
        <div className={`min-h-screen ${styles.skillsComponent}`}>
           <PageHeader/>
            <div className={styles.leftColumn}>
                <div
                    ref={largeTextRef}
                    className={`${styles.largeText}`}
                >
                    {skills.title.split("").map((letter, index) => (
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
                    {skills.teaser.map((teaserText, index) => (
                    <p className={styles.teaserText} key={index}>
                        {teaserText}
                    </p>
                    ))}
                    {skills.invitation?.map((invitationText, index) => (
                    <p className={styles.invitation} key={index}>
                        {invitationText}
                    </p>
                    ))}
                    <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                        {skills.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillsComponent;