import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { LuAlignJustify, LuX } from "react-icons/lu";
import Overlay from './Overlay';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({ visible, sendOverLayStatus }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false); // State to control navbar visibility
  const router = useRouter();

  // Effect to manage navbar visibility based on the prop
  useEffect(() => {
    if (visible === undefined) {
      const timer = setTimeout(() => {
        setNavbarVisible(true); // Set navbar to visible after 500ms
      }, 300); // Adjust the delay as needed

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    } else {
      setNavbarVisible(visible); // Directly set navbarVisible if visible prop is provided
    }
  }, [visible]);

  const toggleOverlay = () => {
    // Update state and send the new status
    setOverlayVisible(prev => {
      const newVisible = !prev; // Determine the new overlay state
      sendOverLayStatus && sendOverLayStatus(newVisible); // Send the new state up to the parent
      return newVisible; // Return the new state to update the state
    });
  };

  useEffect(() => {
    setOverlayVisible(false);
  }, [router]);

  const isNotHome = router.pathname !== '/';

  // Generate a user-friendly name for the current route
  const currentRoute = router.pathname === '/' ? 'Home' : router.pathname.split('/').slice(-1)[0].replace(/-/g, ' ');

  return (
    <>
      <nav className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden} ${overlayVisible && styles.overlay} flex items-center justify-between`}>

        {/* Back to Home Link */}
        {isNotHome && visible ? (
          <div className={styles.ctaLinkWrapper}>
            <Link
              className="group"
              href={"/"}
            >
              <div className={styles.ctaLinkWrapper}>
                <span
                  className={`material-icons ${styles.ctaLinkIcon} ${styles.backIcon}`}
                >
                  west
                </span>

                <span className={styles.ctaLinkText}>
                  Back to Home
                </span>
              </div>
            </Link>
            <span className={`${styles.currentLocation}`}>
              <span className={styles.currentLocationBar}></span> {/* White bar */}
              Current Location: {currentRoute}
            </span>
          </div>
        ) : (
          <span>MAGNUS GIVERIN</span>
        )}


        <div className="flex items-center gap-4">
          <button
            className="border-white border-2 flex items-center justify-center p-2 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            onClick={toggleOverlay}
          >
            {overlayVisible ? <LuX className="text-xl" /> : <LuAlignJustify className="text-xl" />}
          </button>
        </div>
      </nav>

      <Overlay visible={overlayVisible} />
    </>
  );
};

export default Navbar;