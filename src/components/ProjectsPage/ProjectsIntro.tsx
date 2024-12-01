import React from 'react';
import styles from './ProjectsIntro.module.css';
import projectPageText from '../../resources/text/projectsPageText';
import PageHeader from '../General/PageHeader';
import CtaLink from '../General/CtaLink';

const ProjectsIntro = () => {
    const { intro } = projectPageText;

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
                    <CtaLink navigate={"/projects#footer"} text={intro.ctaLink.text}/>
                </div>
            </div>
            <PageHeader text='PROJECTS' position='below' />
        </section>
    );
};

export default ProjectsIntro;