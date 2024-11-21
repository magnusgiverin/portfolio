import React from 'react';
import styles from './GeneralAboutComponent.module.css';
import aboutPageText from '../../resources/text/aboutPageText';

const GeneralAbouComponent = () => {
    const { general } = aboutPageText;

    const handleScroll = (url: string) => {
        // Extract the base URL and hash fragment (if any)
        const [_, hash] = url.split('#');

        if (hash) {
            // Scroll to the specific section after navigation
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className={styles.generalAboutComponent}>
            <div className={styles.maxWidth}>
                {/* Header Section */}
                <h2 className={styles.header}>{general.header}</h2>

                {/* Three Columns */}
                <div className={styles.grid}>
                    {general.columns.map((column, index) => (
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

                {/* Sections */}
                <div className={styles.flexContainer}>
                    {general.sections.map((section, index) => (
                        <div key={index} className={styles.flexItem}>
                            <div>
                                <div className={styles.flexItemTitleContainer}>
                                    <h2 className={styles.flexItemTitle}>{section.title}</h2>
                                    {section.link && (
                                        <button
                                        onClick={() => handleScroll(section.link)}
                                        className={`material-icons ${styles.hoverAnimate}`}
                                    >
                                        south_east
                                    </button>
                                    )}
                                </div>
                                <p className={styles.flexItemDescription}>
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneralAbouComponent;