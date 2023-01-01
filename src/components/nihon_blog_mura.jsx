import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const NihonBlogMura = () => {
  return (
    <a href="https://investment.blogmura.com/americatoushi/ranking/in?p_cid=11158132" target="_blank" rel="noopener noreferrer" aria-label="にほんブログ村へ">
      <StaticImage 
        src="../images/banner.jpg"
        width={88}
        height={31} 
        alt={"にほんブログ村のロゴ"}
      />
    </a>
  )
}

export default NihonBlogMura