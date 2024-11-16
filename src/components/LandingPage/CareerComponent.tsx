import React from 'react';
import styles from './CareerComponent.module.css';
import landingPageText from '../../data/text/landingPageText';
import PageHeader from '../PageHeader/PageHeader';

const CareerComponent = () => {
    const { career } = landingPageText

    return (
        <div className={`min-h-screen ${styles.careerComponent}`}>
            <PageHeader/>
            <h2 className={styles.title}>{career.title}</h2>
            <div className={styles.grid}>
                {career.positions.map((position, index) => (
                    <div key={index} className={styles.position}>
                        <div className={styles.number}>{index + 1}</div>
                        <h3 className={styles.positionTitle}>{position.title}</h3>
                        <p className={styles.company}>{position.company}</p>
                        <p className={styles.dates}>
                            {position.dates.from} - {position.dates.to}
                        </p>
                        <p className={styles.description}>{position.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.ctaLink}>
                    <a
                        href={career.ctaLink.url}
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
                            {career.ctaLink.text}
                        </span>
                    </a>
                </div>
        </div>
    );
};

export default CareerComponent;
