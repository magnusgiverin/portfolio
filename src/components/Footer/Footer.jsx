import React from 'react';
import styles from './Footer.module.css'; // Adjust the import as necessary

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <h2 className={styles.footerTitle}>Summary</h2>
                
                <div className={styles.linksSection}>
                    <h3 className={styles.linksTitle}>Navigation Links</h3>
                    <ul className={styles.navLinks}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* Add more links as necessary */}
                    </ul>
                </div>

                <div className={styles.contactSection}>
                    <h3 className={styles.contactTitle}>Get in Touch</h3>
                    <p className={styles.footerText}>
                        Feel free to reach out using the contact form available in the overlay.
                    </p>
                </div>

                <div className={styles.socialMediaSection}>
                    <h3 className={styles.socialMediaTitle}>Follow Me</h3>
                    <ul className={styles.socialLinks}>
                        <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        {/* Add more social links as necessary */}
                    </ul>
                </div>

                <div className={styles.footerAuthor}>
                    <p className={styles.footerText}>Created by Your Name</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
