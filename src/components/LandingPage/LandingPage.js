import { useEffect, useRef, useState } from 'react';
import styles from './LandingPage.module.css';
import Navbar from '../Navbar/Navbar';
import ScrollArrow from '../ScrollArrow/ScrollArrow';

const LandingPage = ({ scrollToRef }) => {
  const text = "WELCOME";
    const [lettersState, setLettersState] = useState(Array(text.length).fill(false));
    const [backgroundLight, setBackgroundLight] = useState(false);
    const [textBoxVisible, setTextBoxVisible] = useState(false);
    const [particles, setParticles] = useState([]);
    const [scrollLocked, setScrollLocked] = useState(true);
    const [showArrow, setShowArrow] = useState(false);

    const particleContainerRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const flickerTimeout = setTimeout(() => {
            lettersState.forEach((_, index) => {
                setTimeout(() => {
                    setLettersState((prev) => {
                        const newArray = [...prev];
                        newArray[index] = true;
                        return newArray;
                    });
                }, index * Math.random() * 80 + 14);
            });
        }, 1500);

        return () => {
            clearTimeout(flickerTimeout);
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        const backgroundTimer = setTimeout(() => {
            setBackgroundLight(true);
            setScrollLocked(false);
            document.body.style.overflow = 'auto';
        }, 1550);

        return () => clearTimeout(backgroundTimer);
    }, []);

    useEffect(() => {
        const textBoxTimer = setTimeout(() => {
            setTextBoxVisible(true);
        }, 1400);

        return () => clearTimeout(textBoxTimer);
    }, []);

    useEffect(() => {
        const arrowTimer = setTimeout(() => {
            setShowArrow(true);
        }, 2500);

        return () => clearTimeout(arrowTimer);
    }, []);

    const generateParticle = () => {
        const size = Math.random() * 5 + 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
      
        return (
            <div
                key={`${Date.now()}-${Math.random()}`}
                className={styles.particle}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}vw`,
                    top: `${top}vh`,
                    animationDuration: `${Math.random() * 30 + 5}s`,
                }}
            />
        );
    };

    useEffect(() => {
        if (backgroundLight) {
            const interval = setInterval(() => {
                setParticles((prev) => [...prev, generateParticle()]);
            }, 400);

            return () => clearInterval(interval);
        }
    }, [backgroundLight]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) setParticles([]);
                });
            },
            { threshold: 0.1 }
        );

        if (particleContainerRef.current) {
            observer.observe(particleContainerRef.current);
        }

        return () => {
            if (particleContainerRef.current) observer.unobserve(particleContainerRef.current);
        };
    }, []);
    
    return (
        <div className={`h-screen ${styles.landingPage} ${backgroundLight ? styles.lightUp : ''} ${scrollLocked ? styles.locked : ''}`}>
            <Navbar visible={backgroundLight} />
            <div className={styles.flickerText}>
                {text.split("").map((letter, index) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            animationDelay: `${Math.random() * 1.3 + 0.3}s`,
                            opacity: lettersState[index] ? 1 : 0,
                            animation: lettersState[index] && 'none',
                            transition: 'opacity 0.3s ease',
                        }}
                        className='flex items-center justify-center'
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <div className="z-10 absolute sm:bottom-20 md:bottom-35 gap-10 md:gap-0 flex flex-col sm:flex-row w-full justify-between pl-[5vw] pr-[30vw] sm:px-20">
                <div className={`mr-10 xs:mr-0 lg:px-20 ${textBoxVisible ? styles.visible : styles.hidden} flex items-center`}>
                    <div className={`h-[63px] sm:h-full w-[2px] bg-white mr-4 ${textBoxVisible ? styles.waveFadeIn : ''}`}></div>
                    <div className={`${textBoxVisible ? styles.waveFadeIn : ''}`}>
                        <h1 className="text-md sm:text-xl font-light">Main Headline</h1>
                        <p className='text-sm sm:text-lg font-light'>This is some additional information that fades in after the flicker effect.</p>
                    </div>
                </div>
                <div className={`mr-10 xs:mr-0 lg:px-20 ${textBoxVisible ? styles.visible : styles.hidden} flex items-center`}>
                    <div className={`h-[63px] sm:h-full w-[2px] bg-white mr-4 ${textBoxVisible ? styles.waveFadeIn : ''}`}></div>
                    <div className={`${textBoxVisible ? styles.waveFadeIn : ''}`}>
                        <h1 className="text-md sm:text-xl font-light">Main Headline</h1>
                        <p className='text-sm sm:text-lg font-light'>This is some additional information that fades in after the flicker effect.</p>
                    </div>
                </div>
            </div>
            {backgroundLight && (
                <div className={styles.particleContainer}>
                    {particles}
                </div>
            )}
            {showArrow && <ScrollArrow scrollToRef={scrollToRef} />}
        </div>
    );
};

export default LandingPage;
