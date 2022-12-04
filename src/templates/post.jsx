import React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import Headline from "../components/headline"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./post.module.css"
import toFormattedJst from "../util/jst"

const Post = (ctx) => {
  const post = ctx.pageContext.post
  return (
    <Layout>
      <Main>
        <article>
          <header className={styles.imageWrapper}>
            <GatsbyImage 
              image={post.featuredImage.gatsbyImage} 
              title={post.featuredImage.title}
              alt={post.featuredImage.title}
            />
          </header>
          <section className={styles.body}>
            <Headline str={post.title} />
            <p>{toFormattedJst(post.createdAt)}</p>
            <div            
              dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}}
            />
          </section>
        </article>
      </Main>
    </Layout>
  )
}

export const Head = (ctx) => {
  const siteTitle = ctx.pageContext.siteTitle
  const postTitle = ctx.pageContext.post.title
  const title = `${postTitle} | ${siteTitle}`
  const description = ctx.pageContext.post.description
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}

export default Post