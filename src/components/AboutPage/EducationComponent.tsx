import React from 'react';
import styles from './EducationComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';

const EducationComponent = () => {
  return (
    <div id="education" className={styles.educationContainer}>
    <PageHeader text='ABOUT' />
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.educationList}>
        <li>
          <strong>NTNU - Norwegian University of Science and Technology</strong>
          <span className={styles.degree}>Bachelor’s in Computer Science (Datateknologi)</span>
          <span className={styles.dates}>2019 - Present</span>
        </li>
        <li>
          <strong>International School of X</strong>
          <span className={styles.degree}>High School Diploma</span>
          <span className={styles.dates}>2015 - 2019</span>
        </li>
      </ul>
    </div>
  );
};

export default EducationComponent;
