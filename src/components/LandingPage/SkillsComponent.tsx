import React from 'react';
import styles from './SkillsComponent.module.css';
import PageHeader from '../General/PageHeader';
import landingPageText from '../../resources/text/landingPageText';
import { useRouter } from 'next/router';

const SkillsComponent = () => {
    const { skills } = landingPageText;

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
        <section className={styles.skillsContainer}>
            <PageHeader text='HOME' />
            <div className={styles.maxWidth}>
                <h2 className={styles.skillsTitle}>Skills</h2>
                <div className={styles.skillsTableWrapper}>
                    <table className={styles.skillsTable}>
                        <thead>
                            <tr>
                                <th className={styles.categoryHeader}>Category</th>
                                <th className={styles.skillsHeader}>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(skills.table).map(([category, { title, skills, description }]) => (
                                <tr key={category}>
                                    <td className={styles.categoryCell}>
                                        <div className={styles.categoryName}>
                                            {title.toUpperCase()}
                                        </div>
                                        <p className={styles.categoryDescription}>{description}</p>
                                    </td>
                                    <td className={styles.skillsCell}>
                                        {skills.join(', ')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SkillsComponent;
