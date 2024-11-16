import React, { useState } from 'react';
import TerminalAnimation from './TerminalAnimation';
import styles from './ProjectsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import landingPageText from '../../data/text/landingPageText';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectsComponent = () => {
    const [animationOn, setAnimationOn] = useState(false);

    const { projects } = landingPageText;

    const handleButtonClick = () => {
        setAnimationOn(true);
    };

    return (
        <div className={`min-h-screen ${styles.projectsComponent}`}>
            <PageHeader />

            {/* Personal projects explanation */}
            <div className={styles.personalProjectsText}>
                <h2 className={styles.personalProjectsTitle}>{projects.personalProjects.title}</h2>
                <p className={styles.personalProjectsDescription}>
                    {projects.personalProjects.description}
                </p>
            </div>

            {/* Project Boxes */}
            <div className={styles.projectsList}>
                {projects.projects.map((project, index) => (
                    <div key={index} className={styles.projectBox}>
                        <h3 className={styles.projectTitle}>{project.name}</h3>
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
                            <a href={project.ctaLink.url} className="group flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-400 group-hover:text-orange-300 group-hover:translate-x-1 transition:smooth transition-all duration-300 ease-out"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                                <span className={styles.ctaLinkText}>
                                    {project.ctaLink.text}
                                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Terminal animation */}
            {animationOn && <TerminalAnimation />}
        </div>
    );
};

export default ProjectsComponent;