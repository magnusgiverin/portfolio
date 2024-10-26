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
  const [animationDelays, setAnimationDelays] = useState([]);
  const [particlesVisible, setParticlesVisible] = useState(false);

  const particleContainerRef = useRef(null);
  const landingPageRef = useRef(null); // Ref for the landing page element

  useEffect(() => {
    // Flicker effect on letters
    document.body.style.overflow = 'hidden';

    const flickerTimeout = setTimeout(() => {
      lettersState.forEach((_, index) => {
        setTimeout(() => {
          setLettersState((prev) => {
            const newArray = [...prev];
            newArray[index] = true;
            return newArray;
          });
        }, index * Math.random() * 60 + 14);
      });
    }, 1500);

    return () => {
      clearTimeout(flickerTimeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Background light effect
  useEffect(() => {
    const backgroundTimer = setTimeout(() => {
      setBackgroundLight(true);
      setScrollLocked(false);
      document.body.style.overflow = 'auto';
    }, 1550);

    return () => clearTimeout(backgroundTimer);
  }, []);

  // Text box visibility effect
  useEffect(() => {
    const textBoxTimer = setTimeout(() => {
      setTextBoxVisible(true);
    }, 1400);

    return () => clearTimeout(textBoxTimer);
  }, []);

  // Scroll arrow visibility effect
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

  // Particle generation effect
  useEffect(() => {
    let particleInterval;

    if (particlesVisible) {
      // Start generating particles when backgroundLight is true
      particleInterval = setInterval(() => {
        setParticles((prev) => [...prev, generateParticle()]);
      }, 400);
    } else {
      // Clear particles if backgroundLight is false
      setParticles([]);
    }

    return () => {
      clearInterval(particleInterval);
      setParticles([]); // Ensure particles are cleared when unmounting or backgroundLight becomes false
    };
  }, [particlesVisible]);

  // Intersection Observer to monitor component visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setParticlesVisible(false); // Stop background light when out of view
          } else {
            setParticlesVisible(true)
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = landingPageRef.current;

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  // Set random delays for animation
  useEffect(() => {
    // Set random delays on the client side only after the first render
    setAnimationDelays(
      text.split("").map(() => Math.random() * 1.8 + 0.3)
    );
  }, [text]);

  return (
    <div
      className={`h-screen ${styles.landingPage} ${backgroundLight ? styles.lightUp : ''} ${scrollLocked ? styles.locked : ''}`}
      ref={landingPageRef} // Attach the ref to the landing page div
    >
      <Navbar visible={backgroundLight} />
      <div className={styles.flickerText}>
        {text.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              animationDelay: !lettersState[index] && `${animationDelays[index]}s`,
              opacity: lettersState[index] ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            className='flex items-center justify-center'
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="z-10 absolute sm:bottom-20 md:bottom-35 gap-10 md:gap-0 flex flex-col sm:flex-row w-full justify-between pl-[5vw] pr-[30vw] sm:px-20">
        {/* Text Box Sections */}
        <div className={`mr-10 xs:mr-0 lg:px-20 ${textBoxVisible ? styles.visible : styles.hidden} flex items-center`}>
          <div className={`h-[33px] sm:h-full w-[2px] bg-white mr-4 ${textBoxVisible ? styles.waveFadeIn : ''}`}></div>
          <div className={`${textBoxVisible ? styles.waveFadeIn : ''}`}>
            <p className='text-sm sm:text-lg font-light'>
              magnus andreas giverin.
            </p>
          </div>
        </div>
        <div className={`mr-10 xs:mr-0 lg:px-20 ${textBoxVisible ? styles.visible : styles.hidden} flex items-center`}>
          <div className={`h-[43px] sm:h-full w-[2px] bg-white mr-4 ${textBoxVisible ? styles.waveFadeIn : ''}`}></div>
          <div className={`${textBoxVisible ? styles.waveFadeIn : ''}`}>
            <p className='text-sm sm:text-lg font-light'>
              scroll to learn more. enjoy.
            </p>
          </div>
        </div>
      </div>
      {backgroundLight && (
        <div className={styles.particleContainer} ref={particleContainerRef}>
          {particles}
        </div>
      )}
      {showArrow && <ScrollArrow scrollToRef={scrollToRef} />}
    </div>
  );
};

export default LandingPage;
