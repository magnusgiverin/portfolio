import React from 'react';
import styles from './PassionsComponent.module.css';
import PageHeader from '../PageHeader/PageHeader';

const PassionsComponent = () => {
  return (
    <div id="passions" className={styles.passionsContainer}>
      <PageHeader text='ABOUT'/>
      <h2 className={styles.title}>Passions</h2>
      <p className={styles.description}>
        I am passionate about tackling challenging problems that improve the way we live and work. I thrive on building innovative solutions, whether through collaborative teamwork or independent exploration.
      </p>
      <ul className={styles.passionsList}>
        <li>Exploring the intersection of technology and society</li>
        <li>Collaborating with diverse, cross-cultural teams</li>
        <li>Innovating processes to simplify complex workflows</li>
      </ul>
      <PageHeader position='bottom' text='ABOUT'/>
    </div>
  );
};

export default PassionsComponent;
