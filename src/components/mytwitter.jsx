import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const MyTwitter = () => {
  return (
    <a href="https://twitter.com/us_investing137" target="_blank" rel="noopener noreferrer" aria-label="公式Twitterアカウントへ">
      <StaticImage
        src="../images/twitter.png"
        height={26}
        alt={"Twitterのロゴ"}
      />
    </a>
  )
}

export default MyTwitter