import { useRef, useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';
import LetterNav from '../components/LetterNav/LetterNav';

export default function Home() {
    const landingPageRef = useRef(null);
    const projectPageRef = useRef(null);
    const aboutPageRef = useRef(null);
    const experiencePageRef = useRef(null);
    const skillsPageRef = useRef(null);

    const sections = [projectPageRef, aboutPageRef, skillsPageRef, experiencePageRef];
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Observer to control navigation visibility
        const navVisibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setShowNav(!entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        if (landingPageRef.current) {
            navVisibilityObserver.observe(landingPageRef.current);
        }

        return () => {
            if (landingPageRef.current) {
                navVisibilityObserver.unobserve(landingPageRef.current);
            }
        };
    }, []);
    
    return (
        <div>
            <LetterNav sections={sections} showNav={showNav} />
            {/* Page Sections */}
            <div ref={landingPageRef}>
                <LandingPage scrollToRef={projectPageRef} />
            </div>
            <div ref={projectPageRef}>
                <ProjectsPage />
            </div>
            <div ref={aboutPageRef}>
                <ProjectsPage />
            </div>
            <div ref={skillsPageRef}>
                <ProjectsPage />
            </div>
            <div ref={experiencePageRef}>
                <ProjectsPage />
            </div>
        </div>
    );
}
