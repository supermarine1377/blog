import React from "react";
import * as styles from "./footer.module.css"
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () =>  {
  const { contactPageUrl } = useSiteMetadata()
  return (
    <footer className={styles.footer}>
      © 2025 いがらし <a target="blank" rel="noopener noreferrer" href={contactPageUrl} className={styles.link}>お問い合わせ</a>
    </footer>
  )
}

export default Footer
