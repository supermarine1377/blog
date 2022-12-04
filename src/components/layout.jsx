import React from "react";
import Navigation from "./navigation";
import { useStaticQuery, graphql } from "gatsby"
import './variables.css'
import './global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteData = data.site
  return (
    <>
      <Navigation siteData={siteData} />
      {children}
    </>
  )
}

export default Layout