import React from "react";
import * as styles from './headline.module.css'

const Headline = (str) => {
  const head = str.str
  return <h1 className={styles.headline}>{head}</h1>
}

export default Headline