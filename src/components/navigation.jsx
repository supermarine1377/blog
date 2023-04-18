import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from "../hooks/use-site-metadata";
import * as styles from './navigation.module.css'

const Navigation = () => {
  const { title } =  useSiteMetadata()

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <span className={styles.navigationItem}>
          {title}
        </span>
      </Link>
      <div className={styles.linksWrapper}>
        <Link to="/aboutme" activeClassName="active">
          Aboutme
        </Link>
        <Link to="/recommends" activeClassName="active">
          Recommends
        </Link>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navigation