import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './myprofile.module.css'
import { useStaticQuery, graphql } from "gatsby"

const MyProfile = ({ topImage, description }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  return (
    <header className={styles.myprofile}>
      { topImage && (
        <GatsbyImage 
          className={styles.image}
          alt={topImage.title} 
          image={topImage.gatsbyImage} 
        /> 
      )}
      <div className={styles.details}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <p>
          {description}
        </p>
      </div>
    </header>
  )
}

export default MyProfile
