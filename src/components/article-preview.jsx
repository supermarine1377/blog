import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './article-preview-list.module.css'
import dayjs from 'dayjs'

const ArticlePreview = (Post) => {
  const post = Post.post
  const date = new Date(post.createdAt)
  const jst = dayjs(date).add(9, 'h')
  const formattedDate = dayjs(jst).format("YYYY年MM月DD日")
  return (
    <Link to={`/blog/${post.slug}`} className={styles.link} key={post.id}>
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