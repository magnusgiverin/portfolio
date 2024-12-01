import { useRouter } from 'next/router';
import styles from './CtaLink.module.css';

const CtaLink = ({ index = undefined, navigate, text, onClick = undefined }) => {
    const router = useRouter();

    // Function to handle redirects and scrolling on other pages
    const handleRedirect = (url: string) => {
        // Extract the base URL and hash fragment (if any)
        const [baseUrl, hash] = url.split('#');

        if (baseUrl === window.location.pathname) {
            // If the URL is the same page, scroll to the section
            if (hash) {
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // If the URL is a different page, navigate to it
            router.push(baseUrl).then(() => {
                if (hash) {
                    // Scroll to the specific section after navigation
                    const targetElement = document.getElementById(hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
    };

    // Function to handle scrolling to an element on the current page
    const handleScroll = (url: string) => {
        // Extract the hash fragment from the URL
        const [_, hash] = url.split('#');

        if (hash) {
            // Scroll to the specific section
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Function to choose which handler to use
    const handleLinkClick = (link: string) => {
        const currentUrl = router.pathname.split('#')[0]; // Get the current URL without hash

        if (link.includes('#') && link) {
            // If the link contains a hash, check if it's on the same page or another page
            if (currentUrl === link) {
                // Scroll to the section if it's on the same page
                handleScroll(link);
            } else {
                // If it's a different page, use handleRedirect
                handleRedirect(link);
            }
        } else {
            // If it's an external URL or document, handle the redirect
            handleRedirect(link);
        }
    };

    // Determine which icon to show based on the type of navigation
    const getIcon = () => {
        if (navigate.includes("#")) {
            const currentUrl = router.pathname.split('#')[0]; // Get the current URL without hash
            const targetUrl = navigate.split('#')[0];

            if (currentUrl === targetUrl) {
                return "scrollIcon"; // Scroll to a section on the same page
            } else {
                return "redirectIcon"; // Navigate to a different page
            }
        } else {
            return "externalIcon"; // Open a new document (external link)
        }
    };

    return (
        <button
            key={index}
            onClick={() => onClick ? onClick(navigate) : handleLinkClick(navigate)}
            className="group"
        >
            <div className={styles.ctaLinkWrapper}>
                <span
                    className={`material-icons ${styles.ctaLinkIcon} ${getIcon() === "scrollIcon" ? styles.scrollIcon : getIcon() === "redirectIcon" ? styles.redirectIcon : styles.externalIcon}`}
                >
                    {getIcon() === "scrollIcon" ? "south_east" : getIcon() === "redirectIcon" ? "east" : "north_east"}
                </span>

                <span className={styles.ctaLinkText}>
                    {text}
                </span>
            </div>
        </button>
    );
};

export default CtaLink;
