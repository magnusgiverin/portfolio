import React, { useEffect, useState } from 'react';
import styles from './EducationComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';
import aboutPageText from '../../resources/text/aboutPageText';

const EducationComponent = () => {
  const { education } = aboutPageText;

  return (
    <div id="education" className={styles.educationContainer}>
      <PageHeader text={education.about} />
      
      <div className={styles.section}>
        <h2 className={styles.heading}>{education.ntnu.heading}</h2>
        <p className={styles.text}>{education.ntnu.degree}</p>
        <ul className={styles.list}>
          {education.ntnu.details.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>{education.greengates.heading}</h2>
        <p className={styles.text}>{education.greengates.degree}</p>
        <ul className={styles.list}>
          {education.greengates.details.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationComponent;
