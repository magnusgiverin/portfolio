// components/Layout.js
import Navbar from './Navbar'; // Import the Navbar component

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;