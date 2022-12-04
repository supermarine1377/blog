import React from "react"
import { Link } from "gatsby"
import * as styles from "./paginator.module.css"
const { numberOfPostsPerPage } = require('../config')
const { PostsPagePath } = require("../util/page-path")

const Paginator = ({ numPosts, currentPage }) => {
  const numPages = Math.ceil(numPosts / numberOfPostsPerPage)
  const pageArr = Array.from(Array(numPages).keys())

  return (
    <div className={styles.container}>
      {pageArr.map(page=> {
        return (
          <PageLink page = {page + 1} key = {page} isBold = {currentPage == page + 1} />
        )
      })}
    </div>
  )
}

const PageLink = ( {page, isBold} ) => {
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
        <Link to={PostsPagePath(page)}>
          {page}
        </Link>
      )
    }
    </>
  )
  
}

export default Paginator