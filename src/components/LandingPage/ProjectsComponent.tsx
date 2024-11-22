import React, { useState } from 'react';
import TerminalAnimation from './TerminalAnimation';
import styles from './ProjectsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import landingPageText from '../../resources/text/landingPageText';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';

const ProjectsComponent = () => {
    const [animationOn, setAnimationOn] = useState(false);

    const { projects } = landingPageText;

    const router = useRouter();

    const handleRedirect = (url: string) => {
        // Extract the base URL and hash fragment (if any)
        const [baseUrl, hash] = url.split('#');

        // Delay the routing until the scroll to the top completes
        setTimeout(() => {
            // Navigate to the base URL first (to ensure the page is loaded)
            router.push(baseUrl).then(() => {
                if (hash) {
                    console.log(hash)
                    // Scroll to the specific section after navigation
                    const targetElement = document.getElementById(hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }, 500); // Adjust timeout to match the scroll-to-top duration
    };

    const handleButtonClick = () => {
        setAnimationOn(true);
    };

    return (
        <div className={`min-h-screen ${styles.projectsComponent}`}>
            <PageHeader text='HOME'/>

            {/* Personal projects explanation */}
            <div className={styles.personalProjectsText}>
                <h2 className={styles.personalProjectsTitle}>{projects.personalProjects.title}</h2>
                <p className={styles.personalProjectsDescription}>
                    {projects.personalProjects.description}
                </p>
            </div>

            <div className={styles.ctaLink}>
                <button onClick={handleButtonClick} className="group flex items-center space-x-1">
                    <span
                        className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                    >
                        east
                    </span>
                    <span className={styles.ctaLinkText}>
                        {projects.ctaLink.text}
                    </span>
                </button>
            </div>

            {/* Project Boxes */}
            <div className={styles.projectsList}>
                {projects.projects.map((project, index) => (
                    <div key={index} className={styles.projectBox}>
                        <div className={styles.columnHeader}>
                            <div className={styles.line}></div>
                            <h3 className={styles.projectTitle}>{project.name}</h3>
                        </div>
                        <div className={styles.projectHeader}>
                            <p className={styles.projectSubText}>
                                {project.type}
                            </p>
                            <div className={styles.projectLinks}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                                        <FaGithub />
                                    </a>
                                )}
                                {project.website && (
                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className={styles.projectDescription}>{project.description}</p>

                        {/* Terminal Animation CTA */}
                        <div className={styles.ctaLink}>
                            <button onClick={() => handleRedirect(project.ctaLink.url)} className="group flex items-center space-x-1">
                                <span
                                    className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                                >
                                    east
                                </span>
                                <span className={styles.ctaLinkText}>
                                    {project.ctaLink.text}
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <PageHeader position='bottom' text='HOME' />

            {/* Terminal animation */}
            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;