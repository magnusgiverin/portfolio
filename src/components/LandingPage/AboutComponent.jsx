import { useState, useRef, useEffect } from 'react';
import styles from './AboutComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import { useRouter } from 'next/navigation';

const AboutComponent = () => {
    const largeTextRef = useRef(null);
    const teaserTextContainerRef = useRef(null);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [isLargeTextVisible, setIsLargeTextVisible] = useState(false);
    
    const text = "About";
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
        void router.push("/about")
    };

    return (
        <div className={`min-h-screen ${styles.aboutComponent}`}>
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
                        Hello! I'm a 21-year-old based in Trondheim, Norway. With a passion for technology and problem-solving, my journey in development began with a fascination for how things work and evolved into a career in building solutions that make a difference.
                    </p>
                    <p className={styles.teaserText}>
                        Growing up, I was captivated by both creative and technical pursuits. This dual interest led me to pursue web development, where I get to blend the logical and imaginative aspects of design and coding. My background in software development has given me a strong foundation in full-stack technology, and my curiosity drives me to continually learn and improve.
                    </p>
                    <p className={styles.teaserText}>
                        Outside of work, I’m a collaborative person who values teamwork, whether it’s in professional settings or during personal projects. I enjoy spending my free time exploring new tech trends, reading, or enjoying Norway's beautiful landscapes.
                    </p>
                    <p className={styles.invitation}>
                        Want to know more? Dive into my story and get to know the person behind the code.
                    </p>

                    <button className={styles.showMoreBtn} onClick={handleButtonClick}>
                        Learn More About Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;