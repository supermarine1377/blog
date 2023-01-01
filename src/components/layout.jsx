import React from "react";
import Navigation from "./navigation";
import './variables.css'
import './global.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout