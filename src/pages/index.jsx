import { useRef, useState, useEffect } from 'react';
import LetterNav from '../components/LetterNav/LetterNav';
import WelcomeComponent from '../components/LandingPage/WelcomeComponent';
import ProjectsComponent from '../components/LandingPage/ProjectsComponent';
import AboutComponent from '../components/LandingPage/AboutComponent';
import CareerComponent from '../components/LandingPage/CareerComponent';
import SkillsComponent from '../components/LandingPage/SkillsComponent';
import Footer from '../components/Footer/Footer';

export default function Home() {
    const welcomeComponentRef = useRef(null);
    const projectsComponentRef = useRef(null);
    const aboutComponentRef = useRef(null);
    const careerComponentRef = useRef(null);
    const skillsComponentRef = useRef(null);
    const footerComponentRef = useRef(null);

    const sections = [projectsComponentRef, skillsComponentRef, aboutComponentRef, careerComponentRef, footerComponentRef];
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Smooth scroll to the top of the page on refresh
        window.scrollTo({ top: 0, behavior: "smooth" });
    
        // Observer to control navigation visibility
        const navVisibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Hide the navbar when the welcome component is not in view
                    if (entry.target === welcomeComponentRef.current) {
                        setShowNav(!entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );
    
        // Observe the welcome component
        if (welcomeComponentRef.current) {
            navVisibilityObserver.observe(welcomeComponentRef.current);
        }

        // Observer for the footer section
        const footerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Hide the navbar when the footer is in view
                    if (entry.isIntersecting) {
                        setShowNav(false);
                    } else {
                        // Show navbar when footer is not in view
                        setShowNav(!welcomeComponentRef.current || !welcomeComponentRef.current.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe the footer component
        if (footerComponentRef.current) {
            footerObserver.observe(footerComponentRef.current);
        }

        // Cleanup observers on unmount
        return () => {
            if (welcomeComponentRef.current) {
                navVisibilityObserver.unobserve(welcomeComponentRef.current);
            }
            if (footerComponentRef.current) {
                footerObserver.unobserve(footerComponentRef.current);
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
            <div ref={footerComponentRef}>
                <Footer />
            </div>
        </div>
    );
}
