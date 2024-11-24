import React from "react";
import landingPageText from "../../resources/text/landingPageText";
import styles from './InformationComponent.module.css';

const InformationComponent = () => {
    const { information } = landingPageText;

    // Function to handle redirects
    const handleRedirect = (url: string) => {
        window.open(url, "_blank");
    };

    const handleScroll = (url: string) => {
        // Extract the base URL and hash fragment (if any)
        const [baseUrl, hash] = url.split('#');

        if (hash) {
            // Scroll to the specific section after navigation
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Function to choose which handler to use
    const handleLinkClick = (link: string) => {
        if (link.includes('#')) {
            // If the link contains a hash, use handleScroll
            handleScroll(link);
        } else {
            // Otherwise, it's an external URL, so use handleRedirect
            handleRedirect(link);
        }
    };

    return (
        <section className={`${styles.container} ${styles.maxWidth}`}>
            {/* Left Column */}
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{information.title}</h2>
                <p className={styles.introduction}>{information.introduction.text}</p>
                <p className={styles.cvOverview}>{information.cvOverview.text}</p>
                <p className={styles.opportunities}>{information.openForOpportunities.text}</p>
                <div className={styles.linksSection}>
                    {information.openForOpportunities.links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleLinkClick(link.url)}
                            className="group flex items-center space-x-1"
                        >
                            <span
                                className={`group-hover:translate-x-1 transition-smooth transition-all duration-300 ease-out material-icons ${styles.ctaLinkIcon}`}
                            >
                                east
                            </span>

                            <span className={styles.ctaLinkText}>
                                {link.text}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Column */}
            <div className={styles.imageContainer}>
                <img
                    src="/me/group.JPG" // Replace with your image
                    alt="Magnus Giverin"
                    className={styles.profileImage}
                />
                <span className={styles.caption}>{"- Photo from my summer internship at Telenor in 2024"}</span>
            </div>
            {/* Links Section */}
        </section>
    );
};

export default InformationComponent;
