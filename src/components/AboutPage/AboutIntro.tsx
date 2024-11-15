import { useState, useRef, useEffect } from 'react';
import styles from './AboutIntro.module.css';
import landingPageText from '../../data/text/landingPageText';
import Navbar from '../Navbar/Navbar';
import React from 'react';

const AboutIntro = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    const { about } = landingPageText

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
        let letterCount = visibleLetterCount;
    
        if (isLargeTextVisible) {
            interval = setInterval(() => {
                setVisibleLetterCount((prevCount) => {
                    if (prevCount < about.title.length) {
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
    }, [isLargeTextVisible, about.title.length]);
    
    return (
        <div className={`min-h-screen ${styles.aboutInfo}`}>
            <Navbar visible={undefined} sendOverLayStatus={undefined}/>
            <div className={styles.leftColumn}>
                <div
                    ref={largeTextRef}
                    className={`${styles.largeText}`}
                >
                    {about.title.split("").map((letter, index) => (
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
                    {about.teaser.map((teaserText, index) => (
                    <p className={styles.teaserText} key={index}>
                        {teaserText}
                    </p>
                    ))}
                    {about.invitation?.map((invitationText, index) => (
                    <p className={styles.invitation} key={index}>
                        {invitationText}
                    </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;