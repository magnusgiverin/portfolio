import React from 'react';
import styles from './EducationComponent.module.css';
import PageHeader from '../General/PageHeader';
import aboutPageText from '../../resources/text/aboutPageText';
import Image from 'next/image';

const EducationComponent = () => {
  const { education } = aboutPageText;

  return (
    <div id="education" className={styles.educationComponent}>
      <PageHeader text={"ABOUT"} />

      {/* Introduction Section */}
      <div className={styles.introText}>
        <h2 className={styles.introTitle}>{education.title}</h2>
        <p className={styles.introDescription}>
          {education.description}
        </p>
      </div>

      {/* Education Grid */}
      <div className={styles.flexContainer}>
        <div className={styles.grid}>
          {education.educations.map((ed, index) => (
            <div key={index} className={styles.flexItem}>
              <>
                {/* Education Image */}
                <div className={styles.flexItemTitleContainer}>
                  <h2 className={styles.flexItemTitle}>{ed.heading}</h2>
                  <h3 className={styles.flexItemYear}>{ed.year}</h3>
                </div>
                <p className={styles.flexItemDescription}>{ed.degree}</p>
                <ul className={styles.list}>
                  {ed.details.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
                  {ed.image && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={ed.image}
                        alt={`${ed.heading} image`}
                        width={400} /* Set a fixed width to match your design */
                        height={300} /* Set a fixed height to match the container */
                        className={styles.educationImage}
                      />
                    </div>
                  )}
                {/* Location and Website Section */}
                {ed.location && (
                  <div className={styles.link}>
                    <span className={`${styles.icon} material-icons`}>location_on</span>
                    <span>{ed.location}</span>
                  </div>
                )}
                {ed.url && (
                  <div className={styles.location}>
                    <span className={`${styles.icon} material-icons`}>language</span>
                    <a href={ed.url} target="_blank" rel="noopener noreferrer">{ed.url}</a>
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;