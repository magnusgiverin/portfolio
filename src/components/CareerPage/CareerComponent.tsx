import React from 'react';
import styles from './CareerComponent.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../General/PageHeader';
import Image from 'next/image';
import careerPageText from '../../resources/text/careerPageText';

const CareerComponent = () => {
  const { positions } = careerPageText;

  const renderDetails = (details: string[]) => (
    <ul className={styles.detailsList}>
      {details.map((detail, index) => (
        <li key={index} className={styles.detailsItem}>
          {detail}
        </li>
      ))}
    </ul>
  );

  const renderCareerCard = (career: any, index: number) => (
    <VerticalTimelineElement
      key={index}
      contentStyle={{ background: '#313131', color: '#ffffff' }}
      contentArrowStyle={{ borderRight: '7px solid #313131' }}
      date={`${career.dates.from} - ${career.dates.to}`}
      dateClassName={styles.timelineDates}
      icon={<span className="material-icons" style={{ fontSize: '2rem' }}>{career.icon}</span>} // Apply fontSize directly here
      iconStyle={{
        background: '#313131',
        display: 'flex', // Use flexbox to center the icon
        alignItems: 'center', // Vertically center the icon
        justifyContent: 'center', // Horizontally center the icon
        borderRadius: '50%', // Ensure the icon has a circular background
      }}
    >
      <div className={styles.timelineContent}>
        <div className={styles.textContainer}>
          <h3 className={styles.timelineTitle}>{career.title}</h3>
          <h4 className={styles.timelineSubtitle}>{career.company}</h4>
        </div>
        {career.image && (
          <div className={styles.timelineImageContainer}>
            <Image
              src={career.image}
              alt={`image: ${career.title}`}
              width={70}
              height={70}
            />
          </div>
        )}
      </div>

      <p className={styles.timelineLocation}>{career.location}</p>
      <p className={styles.timelineText}>{career.description}</p>
      {career.details && renderDetails(career.details)}
      {career.reccomendation && (
        <div className={`group flex items-center space-x-1 mb-4`}>
          <span className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}>star</span>
          <a
            href={career.reccomendation}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaLinkText}`}
          >
            Letter of reccomendation
          </a>
        </div>
      )
      }
      {career.url && (
        <div className={`group flex items-center space-x-1`}>
          <span className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}>east</span>
          <a
            href={career.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaLinkText}`}
          >
            Website
          </a>
        </div>
      )}

    </VerticalTimelineElement>
  );

  return (
    <section id="career" className={styles.careerContainer}>
      <PageHeader text="CAREER" />
      <div className={styles.titleSection}>
        <h2 className={styles.careerTitle}>My Professional Journey</h2>
        <p className={styles.careerSubtitle}>A timeline of my career highlights and experiences.</p>
      </div>
      <VerticalTimeline lineColor="#FB923C">
        {/* Render Current Positions */}
        <span id='current-positions' />
        {positions.currentPositions.map((career, index) => renderCareerCard(career, index))}

        <span id='past-experiences' />
        <h3 className={styles.timelineSeparator}>
          <span>Past Positions below</span>
        </h3>

        {/* Render Past Positions */}
        {positions.pastPositions.map((career, index) =>
          renderCareerCard(career, positions.currentPositions.length + index)
        )}
      </VerticalTimeline>
    </section>
  );
};

export default CareerComponent;
