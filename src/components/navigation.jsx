import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'

const Navigation = (siteData) => {
  const title = siteData.siteData.siteMetadata.title

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <span className={styles.navigationItem}>
          {title}
        </span>
      </Link>
      <Link to="/" activeClassName="active" className={styles.home}>
        Home
      </Link>
    </nav>
  )
}

export default Navigation