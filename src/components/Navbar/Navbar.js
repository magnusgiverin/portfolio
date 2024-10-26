import styles from './Navbar.module.css';
import { LuAlignJustify } from "react-icons/lu";

const Navbar = ({ visible }) => {
  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden} flex items-center justify-between`}>
      <span>MAGNUS GIVERIN</span>

      <div className={`${styles.buttons} ${visible ? styles.visible : styles.hidden}`}>
        <button
          className="border-white border-2 px-2 text-md my-2 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200"
          onClick={() => console.log("clicked")}
        >
          Click Me
        </button>
        <button
          className="border-white border-2 flex items-center justify-center p-2 my-2 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200"
          onClick={() => console.log("clicked")}
        >
          <LuAlignJustify className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
