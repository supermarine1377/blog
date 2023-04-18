import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './myprofile.module.css'
import MyTwitter from "./mytwitter"
import NinkiBlogRanking from "./ninki_blog_ranking"
import NihonBlogMura from "./nihon_blog_mura"

const MyProfile = ({ title, topImage, description }) => {
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
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.links}>
          <NihonBlogMura />
          <NinkiBlogRanking />
          <MyTwitter />
        </div>
      </div>
    </header>
  )
}

export default MyProfile
