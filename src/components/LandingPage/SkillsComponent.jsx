import { useState, useRef, useEffect } from 'react';
import styles from './SkillsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';

const SkillsComponent = () => {
    const largeTextRef = useRef(null);
    const [fadeInText, setFadeInText] = useState(false);

    useEffect(() => {
        const textObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setFadeInText(true);
            },
            { threshold: 0.5 }
        );

        if (largeTextRef.current) textObserver.observe(largeTextRef.current);

        return () => {
            if (largeTextRef.current) textObserver.unobserve(largeTextRef.current);
        };
    }, []);

    return (
        <div className={`min-h-screen ${styles.skillsComponent}`}>
            <div 
                ref={largeTextRef} 
                className={`${styles.largeText} ${fadeInText ? styles.fadeIn : ''}`}
                style={{ marginBottom: '60px' }}
            >
                Skills
            </div>
        </div>
    );
};

export default SkillsComponent;
