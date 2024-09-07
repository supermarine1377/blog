import React from "react"
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Headline from "../components/headline"
import Paginator from "../components/paginator"
import SearchForm from "../components/sarch-form"
import Seo from "../meta/seo"
import Rss from "../meta/rss"
import useSiteMetadata from "../hooks/use-site-metadata"

const Index = ({ pageContext }) => {
  const { 
    site, 
    contentfulIndex,
    posts, 
    numPages,
  } = pageContext

  const { title } = site.siteMetadata
  const topImage = contentfulIndex.topImage
  const description = contentfulIndex.description

  return (
    <>
      <Layout>
        <MyProfile title={title} topImage={topImage} description={description} />
        <Main>
          <SearchForm />
          <section>
            <Headline str="最近の投稿" />
            <ArticlePreviewList posts={posts} />
          </section>
          <Paginator currentPage={1} numPages={numPages} />
        </Main>
      </Layout>
    </>
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

export default Index
