import React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import Headline from "../components/headline"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./post.module.css"
import toFormattedJst from "../util/jst"
import Seo from "../meta/seo"
import Rss from "../meta/rss"
import NihonBlogMura from "../components/nihon_blog_mura"
import NinkiBlogRanking from "../components/ninki_blog_ranking"

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
            <p className={styles.date}>作成日: {toFormattedJst(post.createdAt)}</p>
            <p className={styles.date}>更新日: {toFormattedJst(post.updatedAt)}</p>
            <div className={styles.links}>
              <NihonBlogMura />
              <NinkiBlogRanking />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
            />
            <div className={styles.links}>
              <NihonBlogMura />
              <NinkiBlogRanking />
            </div>
          </section>
        </article>
      </Main>
    </Layout>
  )
}

export const Head = (ctx) => {
  const siteTitle = ctx.pageContext.site.siteMetadata.title
  const siteBaseUrl = ctx.pageContext.site.siteMetadata.siteUrl

  const postTitle = ctx.pageContext.post.title
  const slug = ctx.pageContext.post.slug

  const title = `${postTitle} | ${siteTitle}`
  const postUrl = `${siteBaseUrl}/post/${slug}`

  const description = ctx.pageContext.post.description
  const imageUrl = ctx.pageContext.post.featuredImage.url
  const twitterAccount = ctx.pageContext.site.siteMetadata.twitterAccount

  return (
    <>
      <Rss />
      <Seo
        meta={{
          title: title,
          description: description,
          siteUrl: postUrl,
          imageUrl: imageUrl,
          twitterAccount: twitterAccount
        }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8654869064923371"
        crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style={{display: "block", textAlign: "center"}}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8654869064923371"
        data-ad-slot="5540978973"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </>
  )
}

export default Post