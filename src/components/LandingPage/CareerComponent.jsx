import { useState, useRef, useEffect } from 'react';
import styles from './CareerComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import { useRouter } from 'next/navigation';

const CareerComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    
    const text = "Career";
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
        let letterCount = visibleLetterCount;
    
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
        void router.push("/career")
    };

    return (
        <div className={`min-h-screen ${styles.careerComponent}`}>
        <PageHeader/>
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
                    My career has been shaped by an unwavering passion for technology and problem-solving. From my early experiences in software development to leading complex projects, I've cultivated a skill set that spans various domains and industries.
                </p>
                <p className={styles.teaserText}>
                    With experience in full-stack development, database management, and team leadership, I've been privileged to work on projects that bridge the gap between technical innovation and practical solutions. Each role has deepened my understanding of effective workflows, cross-functional collaboration, and client-focused delivery.
                </p>
                <p className={styles.teaserText}>
                    As I’ve progressed, I’ve prioritized learning and adapting, keeping up with the latest in technology, architecture, and development standards. My career path reflects a commitment to continuous growth and impact-driven work, contributing value across teams and projects alike.
                </p>
                <p className={styles.invitation}>
                    Take a closer look at the experiences, milestones, and accomplishments that define my career.
                </p>

                <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                    Explore My Career Journey
                </button>
            </div>
        </div>
        <PageHeader position='bottom'/>
    </div>
    );
};

export default CareerComponent;