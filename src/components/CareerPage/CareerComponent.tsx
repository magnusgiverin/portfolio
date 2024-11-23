import React from 'react';
import styles from './CareerComponent.module.css';
import Navbar from '../General/Navbar';
import careerPageText from '../../resources/text/careerPageText';
import PageHeader from '../General/PageHeader';

const CareerComponent = () => {
  const { positions } = careerPageText;

  return (
    <div className={styles.introContainer}>
      <div className={styles.careerContainer}>
        {/* Current Positions Section */}
        <div className={styles.sectionTitle} id='current-positions'>
          <h2>Current Positions:</h2>
        </div>
        {positions.currentPositions.map((career, index) => (
          <div className={styles.careerItem} key={index}>
            <div className={styles.imageContainer}>
              <img src={career.image} alt={career.company} className={styles.companyImage} />
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.number}>{index + 1}</div>
              <h3 className={styles.careerTitle}>{career.title}</h3>
              <p className={styles.companyName}>{career.company}</p>
              <p className={styles.dates}>
                {career.dates.from} - {career.dates.to}
              </p>
              {career.description && <p className={styles.description}>{career.description}</p>}
              {/* Loop through the details array and display each bullet point */}
              <ul className={styles.detailsList}>
                {career.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className={styles.detailItem}>
                    {detail}
                  </li>
                ))}
              </ul>
              {career.location && (
                <div className={styles.link}>
                  <span className={`${styles.icon} material-icons`}>location_on</span>
                  <span>{career.location}</span>
                </div>
              )}
              {career.url && (
                <div className={styles.location}>
                  <span className={`${styles.icon} material-icons`}>language</span>
                  <a href={career.url} target="_blank" rel="noopener noreferrer">{career.url}</a>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Past Positions Section */}
        <div className={styles.sectionTitle} id='past-experiences'>
          <h2>Past Positions:</h2>
        </div>
        {positions.pastPositions.map((career, index) => (
          <div className={styles.careerItem} key={index}>
            <div className={styles.imageContainer}>
              <img src={career.image} alt={career.company} className={styles.companyImage} />
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.number}>{index + 1}</div>
              <h3 className={styles.careerTitle}>{career.title}</h3>
              <p className={styles.companyName}>{career.company}</p>
              <p className={styles.dates}>
                {career.dates.from} - {career.dates.to}
              </p>
              {career.description && <p className={styles.description}>{career.description}</p>}
              {/* Loop through the details array and display each bullet point */}
              <ul className={styles.detailsList}>
                {career.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className={styles.detailItem}>
                    {detail}
                  </li>
                ))}
              </ul>
              {career.location && (
                <div className={styles.link}>
                  <span className={`${styles.icon} material-icons`}>location_on</span>
                  <span>{career.location}</span>
                </div>
              )}
              {career.url && (
                <div className={styles.location}>
                  <span className={`${styles.icon} material-icons`}>language</span>
                  <a href={career.url} target="_blank" rel="noopener noreferrer">Website</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <PageHeader position='below' text='CAREER'/>
    </div>
  );
};

export default CareerComponent;
