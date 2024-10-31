import { useState, useRef, useEffect } from 'react';
import styles from './SkillsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import { useRouter } from 'next/navigation';

const SkillsComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);

    const text = "Skills";
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
        void router.push("/skills")
    };

    return (
        <div className={`min-h-screen ${styles.skillsComponent}`}>
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
                        Combining creativity with functionality, I bring expertise in modern web development—from responsive frontends to scalable backend systems. Each solution is crafted with a focus on performance, security, and longevity.
                    </p>
                    <p className={styles.teaserText}>
                        My toolkit includes powerful frameworks and design principles that drive today’s tech. This space highlights my work with front-end frameworks like React and Next.js, alongside backend development, database management, and efficient data flow.
                    </p>
                    <p className={styles.teaserText}>
                        With a strong foundation in solo and team-based projects, I value Git version control, testing, and streamlined workflows. Effective teamwork and integration are core to my approach, from planning to deployment.
                    </p>
                    <p className={styles.invitation}>
                        Discover the technologies and practices that fuel my dedication to web development excellence.
                    </p>

                    <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                        See My Full Skillset
                    </button>
                </div>
            </div>
            <PageHeader position='bottom'/>
        </div>
    );
};

export default SkillsComponent;