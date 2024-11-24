import React from 'react';
import styles from './ProjectDetails.module.css';
import PageHeader from '../General/PageHeader';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import projectsPageText from '../../resources/text/projectsPageText';

const ProjectDetails = () => {
    const { projects } = projectsPageText;

    // Group projects by their tag
    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.tag]) {
            acc[project.tag] = [];
        }
        acc[project.tag].push(project);
        return acc;
    }, {});

    // Function to handle redirects
    const handleRedirect = (url: string) => {
        window.open(url, "_blank");
    };

    const renderProjects = (projectsGroup, tag) => (
        <div id={tag} className={styles.projectGroup}>
            <h2 className={styles.projectGroupHeader}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)} Projects
            </h2>
            <div className={styles.projectsList}>
                {projectsGroup.map((project, index) => (
                    <div key={index} id={project.id} className={styles.projectBox}>
                        <div className={styles.columnHeader} >
                            <h3 className={styles.projectTitle}>{index + 1}</h3>
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

                        {/* Links */}
                        {project.links?.map((link, linkIndex) => (
                            <button
                                key={linkIndex}
                                onClick={() => handleRedirect(link.link)}
                                className="group flex items-center space-x-1"
                            >
                                <span
                                    className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                                >
                                    east
                                </span>

                                <span className={styles.ctaLinkText}>
                                    {link.text}
                                </span>
                            </button>

                        ))}

                        {/* Iframe */}
                        {
                            project.website && (
                                <div className={styles.projectFrame}>
                                    <div className={styles.iframeWrapper}>
                                        <iframe
                                            src={project.website}
                                            title={`Website preview of ${project.name}`}
                                            className={styles.iframe}
                                            loading="lazy"    
                                            sandbox="allow-scripts allow-same-origin"
                                            />
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.iconLink}
                                        >
                                        <span className={`${styles.icon} material-icons`}>east</span>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                        {/* Display Notes */}
                        {project.notes && (
                            <div className={styles.projectNotes}>
                                <h3>Notes:</h3>
                                <p>{project.notes}</p>
                            </div>
                        )}

                        {/* Skills List */}
                        < ul className={styles.skillsList} >
                            {
                                project.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className={styles.skillItem}>
                                        {skill}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
                }
            </div >
        </div >
    );

    return (
        <div id="projects" className={`min-h-screen ${styles.projectsComponent}`}>
            <PageHeader text="PROJECTS" />
            {/* Render grouped projects */}
            {Object.entries(groupedProjects).map(([tag, projectsGroup]) =>
                renderProjects(projectsGroup, tag)
            )}
            <PageHeader text="PROJECTS" position='below'/>
        </div>
    );
};

export default ProjectDetails;
