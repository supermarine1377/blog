import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './article-preview.module.css'
import toFormattedJst from '../util/jst'
const { PostPagePath } = require("../util/page-path")

const ArticlePreview = (Post) => {
  const post = Post.post
  const path = PostPagePath(post.slug)
  return (
    <Link to={path} className={styles.link} key={post.id}>
      <header>
        <GatsbyImage 
          alt={post.featuredImage.title} 
          image={post.featuredImage.gatsbyImage} 
        />
      </header>
      <section className={styles.body}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.meta}>{toFormattedJst(post.createdAt)}</p>
      </section>
    </Link>
  )
}

export default ArticlePreview