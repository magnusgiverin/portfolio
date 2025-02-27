import { useRef, useState, useEffect } from 'react';
import LetterNav from '../components/LandingPage/LetterNav';
import WelcomeComponent from '../components/LandingPage/WelcomeComponent';
import ProjectsComponent from '../components/LandingPage/ProjectsComponent';
import AboutComponent from '../components/LandingPage/AboutComponent';
import CareerComponent from '../components/LandingPage/CareerComponent';
import SkillsComponent from '../components/LandingPage/SkillsComponent';
import InformationComponent from '../components/LandingPage/InformationComponent';
import Footer from '../components/General/Footer';

export default function Home() {
    const welcomeComponentRef = useRef(null);
    const projectsComponentRef = useRef(null);
    const aboutComponentRef = useRef(null);
    const careerComponentRef = useRef(null);
    const skillsComponentRef = useRef(null);
    const footerComponentRef = useRef(null);

    const sections = [aboutComponentRef, careerComponentRef, skillsComponentRef, projectsComponentRef, footerComponentRef];
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Observer to control navigation visibility based on welcome and footer visibility
        const visibilityObserver = new IntersectionObserver(
            (entries) => {
                let isWelcomeInView = false;
                let isFooterInView = false;
    
                entries.forEach((entry) => {
                    if (entry.target === welcomeComponentRef.current) {
                        isWelcomeInView = entry.isIntersecting;
                    }
                    if (entry.target === footerComponentRef.current) {
                        isFooterInView = entry.isIntersecting;
                    }
                });
    
                // Set showNav to false if either welcome or footer is in view, otherwise true
                setShowNav(!(isWelcomeInView || isFooterInView));
            },
            { threshold: 0.2 }
        );
    
        // Observe the welcome and footer components
        if (welcomeComponentRef.current) visibilityObserver.observe(welcomeComponentRef.current);
        if (footerComponentRef.current) visibilityObserver.observe(footerComponentRef.current);
    
        // Cleanup observer on unmount
        return () => {
            if (welcomeComponentRef.current) visibilityObserver.unobserve(welcomeComponentRef.current);
            if (footerComponentRef.current) visibilityObserver.unobserve(footerComponentRef.current);
        };
    }, []);

    return (
        <div>
            <LetterNav sections={sections} showNav={showNav} />
            {/* Page Sections */}
            <div ref={welcomeComponentRef}>
                <WelcomeComponent scrollToRef={aboutComponentRef} />
            </div>
            <div ref={aboutComponentRef}>
                <InformationComponent />
                <AboutComponent />
            </div>
            <div ref={careerComponentRef}>
                <CareerComponent />
            </div>
            <div ref={skillsComponentRef}>
                <SkillsComponent />
            </div>
            <div ref={projectsComponentRef}>
                <ProjectsComponent />
            </div>
            <div ref={footerComponentRef}>
                <Footer />
            </div>
        </div>
    );
}


