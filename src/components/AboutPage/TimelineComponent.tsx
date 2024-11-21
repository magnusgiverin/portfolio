import React, { useEffect, useRef } from 'react';
import styles from './TimelineComponent.module.css';
import aboutPageText from '../../resources/text/aboutPageText';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../PageHeader/PageHeader';

const TimelineComponent = () => {
  const { timeline } = aboutPageText;
  const timelineRefs = useRef([]); // Array to hold references to timeline elements

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            element.classList.add(styles['vertical-timeline-element-content--animate-in']);
            element.classList.remove(styles['vertical-timeline-element-content--animate-out']);
          } else {
            element.classList.remove(styles['vertical-timeline-element-content--animate-in']);
            element.classList.add(styles['vertical-timeline-element-content--animate-out']);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe all timeline elements
    timelineRefs.current.forEach((ref) => observer.observe(ref));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className={styles.container}>
      <PageHeader text='ABOUT'/>
      <div className={styles.titleSection}>
        <h2 className={styles.timelineTitle}>{timeline.title}</h2>
        <p className={styles.timelineSubtitle}>{timeline.intro}</p>
      </div>
      <VerticalTimeline
        lineColor={'#FB923C'}
      >
        {timeline.events.map((event, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: '#313131' }}
            contentArrowStyle={{ borderRight: '7px solid #313131' }}
            iconStyle={{
              background: '#313131',
              display: 'flex', // Use flexbox to center the icon
              alignItems: 'center', // Vertically center the icon
              justifyContent: 'center', // Horizontally center the icon
              borderRadius: '50%', // Ensure the icon has a circular background
            }}
            id={event.section}
            key={event.section}
            ref={(el) => (timelineRefs.current[index] = el)} // Assign reference
            icon={<span className="material-icons" style={{ fontSize: '2rem' }}>{event.icon}</span>} // Apply fontSize directly here
            position={event.position} // Randomly choose 'left' or 'right'
            >
            <h3 className={styles['timeline-title']}>{event.title}</h3>
            <h4 className={styles['timeline-subtitle']}>{event.year}</h4>
            <p className={styles['timeline-text']}>{event.text}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default TimelineComponent;
