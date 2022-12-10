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
          <a href="https://investment.blogmura.com/americatoushi/ranking/in?p_cid=11158132" target="_blank">
            {/* <img src="ezgif-3-c04f2b8e93.jpg" 
              width="88" height="31" border="0" alt="にほんブログ村 投資ブログ 米国投資へ" 
            /> */}
            <StaticImage src="../images/banner.jpg" width={88} height={31} />
          </a>
          <a href="https://investment.blogmura.com/americatoushi/ranking/in?p_cid=11158132" target="_blank">
            にほんブログ村
          </a>
        </div>
      </div>
    </header>
  )
}

export default MyProfile
