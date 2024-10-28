import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { LuAlignJustify, LuX } from "react-icons/lu";
import Overlay from './Overlay';

const Navbar = ({ visible, sendOverLayStatus }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false); // State to control navbar visibility

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

  return (
    <>
      <nav className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden} ${overlayVisible && styles.overlay} flex items-center justify-between`}>
        <span>MAGNUS GIVERIN</span>

        <div className={`${styles.buttons} ${navbarVisible ? styles.visible : styles.hidden}`}>
          <button
            className="border-white border-2 flex items-center justify-center p-2 my-2 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
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
