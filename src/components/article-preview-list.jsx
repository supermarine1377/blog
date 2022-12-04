import React from 'react'
import ArticlePreview from './article-preview'
import * as styles from './article-preview-list.module.css'
// import Tags from './tags'

const ArticlePreviewList = ({ posts }) => {
  if (!posts) {
    return null
  }
  if (!Array.isArray(posts)) {
    return null
  } 

  return (
    <div className={styles.container}>
      <div className={styles.articleList}>
        {posts.map((post) => {        
          return (
            <ArticlePreview post={post} key={post.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ArticlePreviewList