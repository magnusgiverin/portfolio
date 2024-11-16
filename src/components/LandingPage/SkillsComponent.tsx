import React from 'react';
import styles from './SkillsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import landingPageText from '../../data/text/landingPageText';

const SkillsComponent = () => {
    const { skills } = landingPageText;

  return (
    <div className={styles.skillsContainer}>
    <PageHeader/>
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
            {Object.entries(skills).map(([category, { title, skills, description }]) => (
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
  );
};

export default SkillsComponent;
