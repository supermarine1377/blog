import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './myprofile.module.css'
import { StaticImage } from "gatsby-plugin-image"

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
          <a href="https://investment.blogmura.com/americatoushi/ranking/in?p_cid=11158132" target="_blank" rel="noopener noreferrer" aria-label="にほんブログ村へ">
            <StaticImage 
              src="../images/banner.jpg"
              width={88}
              height={31} 
              alt={"にほんブログ村のロゴ"}
            />
          </a>
          <a href="https://investment.blogmura.com/americatoushi/ranking/in?p_cid=11158132" target="_blank" rel="noopener noreferrer" aria-label="にほんブログ村へ">
            にほんブログ村
          </a>
        </div>
        <div className={styles.sns}>
          <a href="https://twitter.com/us_investing137" target="_blank" rel="noopener noreferrer" aria-label="公式Twitterアカウントへ">
            <StaticImage
              src="../images/twitter.png"
              height={26}
              alt={"Twitterのロゴ"}
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default MyProfile
