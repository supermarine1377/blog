import React from "react";
import Navigation from "./navigation";
import './variables.css'
import './global.css'
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout