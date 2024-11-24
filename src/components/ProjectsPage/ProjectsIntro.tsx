import React from 'react';
import styles from './ProjectsIntro.module.css';
import projectPageText from '../../resources/text/projectsPageText';
import PageHeader from '../General/PageHeader';

const ProjectsIntro = () => {
    const { intro } = projectPageText;

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 120; // Adjust this value to change how many pixels above the target you want to scroll
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: top,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={styles.introComponent}>
            <div className={styles.maxWidth}>
                <h2 className={styles.header}>{intro.header}</h2>

                <div className={styles.grid}>
                    {intro.columns.map((column, index) => (
                        <div key={index} className={styles.column}>
                            <div className={styles.columnHeader}>
                                <div className={styles.line}></div>
                                <h3 className={styles.columnTitle}>{column.title}</h3>
                            </div>
                            <h4 className={styles.columnSubtitle}>{column.subtitle}</h4>
                            <p className={styles.columnDescription}>{column.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.ctaLink}>
                    <button
                        onClick={() => handleScroll('footer')} // Wrap in a function
                        className="group flex items-center space-x-1"
                    >
                        <span
                            className={`group-hover:translate-y-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                        >
                            south
                        </span>

                        <span className={styles.ctaLinkText}>
                            {intro.ctaLink.text}
                        </span>
                    </button>
                </div>
            </div>
            <PageHeader text='PROJECTS' position='below' />
        </section>
    );
};

export default ProjectsIntro;