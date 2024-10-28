import React, { useEffect, useState } from 'react';
import styles from './Overlay.module.css';
import navigationLinks from '../../data/navigation';
import { LuCornerDownRight } from "react-icons/lu";
import { sendEmail } from './sendEmail';

const Overlay = ({ visible, onClose }) => {
  const [animationKey, setAnimationKey] = useState(0); // Key to reset animations
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  // Lock scrolling when overlay is visible
  useEffect(() => {
    if (visible) {
      setAnimationKey((prevKey) => prevKey + 1);
      const overlay = document.querySelector(`.${styles.overlay}`);
      if (overlay) {
        overlay.scrollTop = 0; // Set scroll position to the top
      }
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    sendEmail(senderName, message, senderEmail);
  };

  return (
    <div
      className={`${styles.overlay} ${visible ? styles['overlay-visible'] : ''}`}
      onClick={onClose}
      style={{ zIndex: visible ? 90 : 0 }} // Set z-index conditionally
    >
      <div className={styles.overlayContent} key={animationKey} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navSection}>
          <h1 className={styles.mainTitle}>Navigation</h1>
          <ul className={styles.navLinks}>
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <a href={link.path}>{link.title}</a>
                {link.sublinks.length > 0 && (
                  <ul className={styles.sublinks}>
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.title}>
                        <span className='flex flex-row items-center gap-2'>
                          <LuCornerDownRight />
                          <a href={sublink.path}>{sublink.title}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h1 className={styles.mainTitle}>Contact Me</h1>
          <div className={styles.profileContainer}> {/* New container for profile picture and links */}
            <img src="magnus.JPG" alt="Magnus" className={styles.profilePic} />
            <div className={styles.linksContainer}>
              <a href="https://www.linkedin.com/in/magnusgiverin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
              <a href="https://github.com/magnusgiverin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            </div>
          </div>
          <p className={styles.subtitle}>Get in touch:</p>
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              className={styles.inputField}
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className={styles.inputField}
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              required
              className={styles.textareaField}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
