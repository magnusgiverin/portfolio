import React from 'react';
import styles from './IntroPage.module.css';
import ScrollArrow from '../General/ScrollArrow';
import Navbar from '../General/Navbar';

const IntroPage = ({ scrollToRef, mainText, subText }) => {
  return (
    <div id={''} className={styles.introContainer}>
    <Navbar visible sendOverLayStatus={undefined}/>
      <div className={styles.fullScreen}>
        <h1 className={styles.mainText}>{mainText}</h1>
      </div>
      <div className={styles.subsections}>
        <div className={styles.subsection}>
          <span className={styles.colorBar}></span>
          <p className={styles.subText}>{subText}</p>
        </div>
      </div>
      <ScrollArrow scrollToRef={scrollToRef}/>
    </div>
  );
};

export default IntroPage;
