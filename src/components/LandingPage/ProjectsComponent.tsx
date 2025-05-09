import React, { useState } from 'react';
import TerminalAnimation from './TerminalAnimation';
import styles from './ProjectsComponent.module.css';
import PageHeader from '../General/PageHeader';
import landingPageText from '../../resources/text/landingPageText';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';
import CtaLink from '../General/CtaLink';

const ProjectsComponent = () => {
    const [animationOn, setAnimationOn] = useState(false);

    const { projects } = landingPageText;

    const handleButtonClick = () => {
        setAnimationOn(true);
    };

    return (
        <div id={"projects"} className={`min-h-screen ${styles.projectsComponent}`}>
            <PageHeader text='HOME' />

            <div className={styles.maxWidth}>
                {/* Personal projects explanation */}
                <div className={styles.personalProjectsText}>
                    <h2 className={styles.personalProjectsTitle}>{projects.personalProjects.title}</h2>
                    <p className={styles.personalProjectsDescription}>
                        {projects.personalProjects.description}
                    </p>
                </div>

                <div className={styles.ctaLink}>
                    <CtaLink index={undefined} navigate={projects.ctaLink.url} text={projects.ctaLink.text} onClick={handleButtonClick} />
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
                                <CtaLink index={index} navigate={project.ctaLink.url} text={project.ctaLink.text} />
                            </div>
                        </div>
                    ))}
                </div>
                <PageHeader position='bottom' text='HOME' />

                {/* Terminal animation */}
                {animationOn && <TerminalAnimation />}
            </div>
        </div>
    );
};

export default ProjectsComponent;