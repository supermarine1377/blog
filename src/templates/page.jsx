import React from "react"
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Paginator from "../components/paginator"
import Seo from "../meta/seo"
import Rss from "../meta/rss"

const Page = ({ pageContext }) => {
  const { 
    site, 
    contentfulIndex,
    posts, 
    currentPage,
    numPages,
  } = pageContext
  const { title } = site.siteMetadata
  const topImage = contentfulIndex.numPosts
  const description = contentfulIndex.description

  return (
    <Layout>
      <MyProfile title={title} topImage={topImage} description={description} />
      <Main>
        <section>
          <ArticlePreviewList posts={posts} />
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
