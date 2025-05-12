import React from "react";
import landingPageText from "../../resources/text/landingPageText";
import styles from './InformationComponent.module.css';
import CtaLink from "../General/CtaLink";

const InformationComponent = () => {
    const { information } = landingPageText;

    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.maxWidth}`}>
            {/* Left Column */}
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{information.title}</h2>
                <p className={styles.introduction}>{information.introduction.text}</p>
                <p className={styles.cvOverview}>{information.cvOverview.text}</p>
                <p className={styles.opportunities}>{information.openForOpportunities.text}</p>
                <div className={styles.linksSection}>
                    {information.openForOpportunities.links.map((link, index) => (
                        <CtaLink index={index} navigate={link.url} text={link.text}/>
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
            </div>
        </section>
    );
};

export default InformationComponent;
