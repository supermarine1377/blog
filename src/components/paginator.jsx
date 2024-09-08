import React from "react"
import { Link } from "gatsby"
import * as styles from "./paginator.module.css"

const Paginator = ({ numPages, currentPage }) => {
  const pageArr = Array.from(Array(numPages).keys())

  return (
    <div className={styles.container}>
      {pageArr.map(page=> {
        return (
          <PageLink page = {page + 1} key = {page} isBold = {currentPage === page + 1} />
        )
      })}
    </div>
  )
}

const PageLink = ( {page, isBold} ) => {
  const { PostsPagePath } = require("../util/page-path")
  let to
  if (page === 1) {
    to = "/"
  } else {
    to = PostsPagePath(page)
  }
  
  
  return (
    <>
    {
      isBold && (
        <span className={styles.bold} >
          {page}
        </span>
      )
    }
    {
      !isBold && (
        <Link to={to}>
          {page}
        </Link>
      )
    }
    </>
  )
  
}

export default Paginator