import React from 'react';
import styles from './CareerComponent.module.css';
import landingPageText from '../../resources/text/landingPageText';
import PageHeader from '../General/PageHeader';
import { useRouter } from 'next/router';
import CtaLink from '../General/CtaLink';

const CareerComponent = () => {
    const { career } = landingPageText

    return (
        <section id={"career"} className={`min-h-screen ${styles.careerComponent}`}>
            <PageHeader text='HOME' />
            <div className={styles.maxWidth}>
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
                    <CtaLink navigate={career.ctaLink.url} text={career.ctaLink.text} />
                </div>
            </div>
        </section>
    );
};

export default CareerComponent;
