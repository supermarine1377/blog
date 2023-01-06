import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const NinkiBlogRanking = () => {
  return (
    <a href="https://blog.with2.net/link/?id=2096540&tag=56" target="_brank" rel="noopener noreferrer" aria-label="「#投資」人気ブログランキング">
      <StaticImage
        src="../images/logo_ninki.png"
        width={149}
        height={30}
        alt={"人気ブログランキングのロゴ"}
      />
    </a>
  )
}

export default NinkiBlogRanking