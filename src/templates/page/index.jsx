import React from "react"
import Layout from "../../components/layout"
import Main from "../../components/main"
import ArticlePreviewList from "../../components/article-preview-list"
import Paginator from "../../components/paginator"
import Seo from "../../meta/seo"
import Rss from "../../meta/rss"

const Page = ({ pageContext }) => {
  const { 
    posts, 
    currentPage,
    numPages,
  } = pageContext
  const postInNode = []
  posts.forEach(
    post => {
      postInNode.push(post.node)
    }
  )

  return (
    <Layout>
      <Main>
        <section>
          <ArticlePreviewList posts={postInNode} />
        </section>
      <Paginator currentPage={currentPage} numPages={numPages} />
      </Main>
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const { site, contentfulIndex } = pageContext
  const { title, siteUrl, twitterAccount } = site.siteMetadata
  const imageUrl = contentfulIndex.topImage.url
  const description = contentfulIndex.description

  return (
    <>
      <Rss />
      <Seo
        meta={{
          title: title,
          description: description,
          siteUrl: siteUrl,
          imageUrl: imageUrl,
          twitterAccount: twitterAccount,
        }}
      />
    </>
  )
}

export default Page
