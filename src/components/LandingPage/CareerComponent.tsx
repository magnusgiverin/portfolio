import React from 'react';
import styles from './CareerComponent.module.css';
import landingPageText from '../../resources/text/landingPageText';
import PageHeader from '../PageHeader/PageHeader';
import { useRouter } from 'next/router';

const CareerComponent = () => {
    const { career } = landingPageText

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
        <div className={`min-h-screen ${styles.careerComponent}`}>
            <PageHeader text='HOME' />
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
                <button
                    onClick={() => handleRedirect(career.ctaLink.url)}
                    className="group flex items-center space-x-1"
                >
                    <span
                        className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                    >
                        east
                    </span>
                    <span className={styles.ctaLinkText}>
                        {career.ctaLink.text}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CareerComponent;
