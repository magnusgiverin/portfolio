import React, { useEffect, useRef, useState } from 'react';
import styles from './TimelineComponent.module.css';
import aboutPageText from '../../resources/text/aboutPageText';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../PageHeader/PageHeader';
import Image from 'next/image';

const TimelineComponent = () => {
  const { timeline } = aboutPageText;
  const [visible, setVisible] = useState<boolean>();

  useEffect(() => {
    setVisible(window.innerWidth < 1170);
  }, []);

  return (
    <section id="timeline" className={styles.timelineContainer}>
      <PageHeader text='ABOUT' />
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
            icon={<span className="material-icons" style={{ fontSize: '2rem' }}>{event.icon}</span>} // Apply fontSize directly here
            position={event.position} // Randomly choose 'left' or 'right'
            visible={visible}
          >
            <h3 className={styles['timeline-title']}>{event.title}</h3>
            <h4 className={styles['timeline-subtitle']}>{event.year}</h4>
            <p className={styles['timeline-text']}>{event.text}</p>
            <div
                className={`overflow-hidden mt-10`}
              >
                <Image
                  width={1000}
                  height={200}
                  src={event.image}
                  alt={'image: ' + event.image}
                />
              </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default TimelineComponent;
