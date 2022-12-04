import React from "react";
import * as styles from './main.module.css'

const Main = ( {children} ) => {
  return (
    <main className={styles.body}>
      {children}
    </main>
  )
}

export default Main