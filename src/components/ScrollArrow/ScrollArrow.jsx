import { useEffect, useState } from 'react';
import styles from './ScrollArrow.module.css';

const ScrollArrow = ({ scrollToRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // Set the arrow to visible after a delay
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleScroll = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`cursor-pointer ${styles.scrollArrow} ${visible ? styles.visible : ''}`}
      onClick={handleScroll} // Add click event to scroll
    >
      <div className={styles.arrow}></div>
    </div>
  );
};

export default ScrollArrow;
