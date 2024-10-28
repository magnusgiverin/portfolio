import { useState } from 'react';
import styles from './Navbar.module.css';
import { LuAlignJustify, LuX } from "react-icons/lu";
import Overlay from './Overlay';

const Navbar = ({ visible, sendOverLayStatus }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    // Update state and send the new status
    setOverlayVisible(prev => {
      const newVisible = !prev; // Determine the new overlay state
      sendOverLayStatus(newVisible); // Send the new state up to the parent
      return newVisible; // Return the new state to update the state
    });
  };

  return (
    <>
      <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden} ${overlayVisible && styles.overlay} flex items-center justify-between`}>
        <span>MAGNUS GIVERIN</span>

        <div className={`${styles.buttons} ${visible ? styles.visible : styles.hidden}`}>
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
