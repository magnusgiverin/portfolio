import { useRouter } from 'next/router';
import React from 'react';
import styles from './AboutComponent.module.css';
import landingPageText from '../../resources/text/landingPageText';
import PageHeader from '../General/PageHeader';
import CtaLink from '../General/CtaLink';

const AboutComponent = () => {
    const { about } = landingPageText;

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
                <div className="flex flex-col mt-6">
                    <CtaLink navigate={about.ctaLink.url} text={about.ctaLink.text} />
                </div>
                {/* Sections */}
                <div className={styles.flexContainer}>
                    {about.sections.map((section, index) => (
                        <div key={index} className={styles.flexItem}>
                            <div>
                                <h2 className={styles.flexItemTitle}>{section.title}</h2>
                                <p className={styles.flexItemDescription}>
                                    {section.description}
                                </p>
                            </div>
                            <div className="flex flex-col mt-6">
                                <CtaLink navigate={section.ctaLink.url} text={section.ctaLink.text} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;