import { useRouter } from 'next/router';
import React from 'react';
import styles from './AboutComponent.module.css';
import landingPageText from '../../resources/text/landingPageText';

const AboutComponent = () => {
    const { about } = landingPageText;
    const router = useRouter();

    const handleRedirect = (url: string) => {
        // Extract the base URL and hash fragment (if any)
        const [baseUrl, hash] = url.split('#');

        // Delay the routing until the scroll to the top completes
        setTimeout(() => {
            // Navigate to the base URL first (to ensure the page is loaded)
            router.push(baseUrl).then(() => {
                if (hash) {
                    // Scroll to the specific section after navigation
                    const targetElement = document.getElementById(hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }, 500); // Adjust timeout to match the scroll-to-top duration
    };

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
                    <button
                        onClick={() => handleRedirect(about.ctaLink.url)} // Wrap in a function
                        className="group flex items-center space-x-1"
                    >
                        <span
                            className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                        >
                            east
                        </span>

                        <span className={styles.ctaLinkText}>
                            {about.ctaLink.text}
                        </span>
                    </button>
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
                                <div className={styles.ctaLinkFlex}>
                                    <button
                                        onClick={() => handleRedirect(section.ctaLink.url)}
                                        className="group flex items-center space-x-1"
                                    >
                                        <span
                                            className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                                        >
                                            east
                                        </span>
                                        <span className={styles.ctaLinkFlexText}>
                                            {section.ctaLink.text}
                                        </span>
                                    </button>
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