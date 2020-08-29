import React, { Fragment } from "react";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const Layout = ({
  children,
  navItems,
  footerItems,
  footer = true,
  navigation = true,
}) => {
  return (
    <Fragment>
      {navigation && <Navbar {...navItems} />}
      {children}
      {footer && <Footer {...footerItems} />}
    </Fragment>
  );
};

export default Layout;
