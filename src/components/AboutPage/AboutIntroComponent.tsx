import React from 'react';
import styles from './AboutIntroComponent.module.css';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import Navbar from '../Navbar/Navbar';

const AboutIntroComponent = ({ scrollToRef }) => {
  return (
    <div id={''} className={styles.introContainer}>
    <Navbar visible sendOverLayStatus={undefined}/>
      <div className={styles.fullScreen}>
        <h1 className={styles.mainText}>ABOUT</h1>
      </div>
      <div className={styles.subsections}>
        <div className={styles.subsection}>
          <span className={styles.colorBar}></span>
          <p className={styles.subText}>Discover my journey, values, and experiences.</p>
        </div>
      </div>
      <ScrollArrow scrollToRef={scrollToRef}/>
    </div>
  );
};

export default AboutIntroComponent;
