import React from 'react';
import landingPageText from '../../data/text/landingPageText';
import styles from './AboutComponent.module.css';

const AboutComponent = () => {
    const { about } = landingPageText
        
    return (
        <section className={styles.aboutComponent}>
            <div className={styles.maxWidth}>
                {/* Header Section */}
                <h2 className={styles.header}>{about.header}</h2>

                {/* Three Columns */}
                <div className={styles.grid}>
                    {about.columns.map((column, index) => (
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

                {/* CTA Link */}
                <div className={styles.ctaLink}>
                    <a
                        href={about.ctaLink.url}
                        className="group flex items-center space-x-1"
                    >
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
                            {about.ctaLink.text}
                        </span>
                    </a>
                </div>

                {/* Sections */}
                <div className={styles.flexContainer}>
                    {about.sections.map((section, index) => (
                        <div key={index} className={styles.flexItem}>
                            <div>
                                <h2 className={styles.flexItemTitle}>{section.title}</h2>
                                <p className={styles.flexItemDescription}>{section.description}</p>
                            </div>

                            <div className="flex flex-col mt-6">
                                <div className={styles.ctaLinkFlex}>
                                    <a
                                        href={section.ctaLink.url}
                                        className="group flex items-center space-x-1"
                                    >
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
                                        <span className={styles.ctaLinkFlexText}>
                                            {section.ctaLink.text}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
