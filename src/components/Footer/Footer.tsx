import React, { useEffect, useState, useRef } from 'react';
import styles from './Footer.module.css';
import { LuCornerDownRight } from "react-icons/lu";
import PageHeader from '../PageHeader/PageHeader';
import navigationLinks from '../../resources/navigation';

const Footer = () => {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');
    const footerRef = useRef(null); // Ref for the footer element
    const [animationKey, setAnimationKey] = useState(0); // Key to reset animations
    const [confirmationMessage, setConfirmationMessage] = useState(''); // New state for confirmation message

    const sendEmail = async () => {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
                senderName: senderName,
                senderEmail: senderEmail,
            }),
        });

        if (response.ok) {
            setConfirmationMessage('Your email has been sent successfully!'); // Success message
            setSenderEmail('')
            setSenderName('')
            setMessage('')
        } else {
            setConfirmationMessage('There was an error sending your email. Please try again later.'); // Error message
        }

        // Clear the confirmation message after 5 seconds
        setTimeout(() => setConfirmationMessage(''), 5000);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        sendEmail();
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setAnimationKey((prevKey) => prevKey + 1);
            }
        }, {
            threshold: 0.1 // Trigger when at least 10% of the footer is visible
        });

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={footerRef}
                className={`min-h-screen ${styles.footer}`}
            >
                <div className={styles.footerContent} key={animationKey} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.navSection}>
                        <h1 className={styles.mainTitle}>Navigation</h1>
                        <ul className={styles.navLinks}>
                            {navigationLinks.map((link) => (
                                <li key={link.title}>
                                    <a className="hover:text-white" href={link.path}>{link.title}</a>
                                    {link.sublinks.length > 0 && (
                                        <ul className={styles.sublinks}>
                                            {link.sublinks.map((sublink) => (
                                                <li key={sublink.title}>
                                                    <span className='flex flex-row items-center gap-2'>
                                                    <span className="material-icons text-4xl">subdirectory_arrow_right</span>
                                                    <a className="hover:text-white" href={sublink.path}>{sublink.title}</a>
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
                        <div className={styles.profileContainer}>
                            <img src="magnus.JPG" alt="Magnus" className={styles.profilePic} />
                            <div className={styles.linksContainer}>
                                <a href="https://www.linkedin.com/in/magnusgiverin" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                                <a href="https://github.com/magnusgiverin" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                                <a href='/CV.pdf' target='_blank' className={styles.link}>CV</a>
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
                            {confirmationMessage ? <p className={styles.confirmationMessage}>{confirmationMessage}</p> :
                                <button type="submit" className={styles.submitButton}>Send</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.madeBy}>
                <p>Made by Magnus Giverin © {new Date().getFullYear()}</p>
            </div>
        </>
    );
};

export default Footer;