import { useRef, useState, useEffect } from 'react';
import LetterNav from '../components/LetterNav/LetterNav';
import WelcomeComponent from '../components/LandingPage/WelcomeComponent';
import ProjectsComponent from '../components/LandingPage/ProjectsComponent';
import AboutComponent from '../components/LandingPage/AboutComponent';
import CareerComponent from '../components/LandingPage/CareerComponent';
import SkillsComponent from '../components/LandingPage/SkillsComponent';

export default function Home() {
    const welcomeComponentRef = useRef(null);
    const projectsComponentRef = useRef(null);
    const aboutComponentRef = useRef(null);
    const careerComponentRef = useRef(null);
    const skillsComponentRef = useRef(null);

    const sections = [projectsComponentRef, skillsComponentRef, aboutComponentRef, careerComponentRef];
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Scroll to the top of the page on refresh
        window.scrollTo(0, 0);

        // Observer to control navigation visibility
        const navVisibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setShowNav(!entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        if (welcomeComponentRef.current) {
            navVisibilityObserver.observe(welcomeComponentRef.current);
        }

        return () => {
            if (welcomeComponentRef.current) {
                navVisibilityObserver.unobserve(welcomeComponentRef.current);
            }
        };
    }, []);
    
    return (
        <div>
            <LetterNav sections={sections} showNav={showNav} />
            {/* Page Sections */}
            <div ref={welcomeComponentRef}>
                <WelcomeComponent scrollToRef={projectsComponentRef} />
            </div>
            <div ref={projectsComponentRef}>
                <ProjectsComponent />
            </div>
            <div ref={skillsComponentRef}>
                <SkillsComponent />
            </div>
            <div ref={aboutComponentRef}>
                <AboutComponent />
            </div>
            <div ref={careerComponentRef}>
                <CareerComponent />
            </div>
        </div>
    );
}
