import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './article-preview.module.css'
import dayjs from 'dayjs'
const { PostPagePath } = require(`../util/page-path`)
// import PostPagePath from '../util/page-path'

const ArticlePreview = (Post) => {
  const post = Post.post
  const date = new Date(post.createdAt)
  const jst = dayjs(date).add(9, 'h')
  const formattedDate = dayjs(jst).format("YYYY年MM月DD日")
  const path = PostPagePath(post.slug)
  return (
    <Link to={path} className={styles.link} key={post.id}>
      <header>
        <GatsbyImage 
          alt={post.featuredImage.title} 
          image={post.featuredImage.gatsbyImage} 
        />
      </header>
      <section>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.meta}>{formattedDate}</p>
      </section>
    </Link>
  )
}

export default ArticlePreview