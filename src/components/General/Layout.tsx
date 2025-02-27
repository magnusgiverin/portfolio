// components/Layout.js

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar visible={undefined} sendOverLayStatus={undefined} />
      <main>{children}</main>
    </>
  );
};

export default Layout;