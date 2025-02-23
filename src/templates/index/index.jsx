import React from "react"
import Layout from "../../components/layout"
import MyProfile from "../../components/myprofile"
import Main from "../../components/main"
import ArticlePreviewList from "../../components/article-preview-list"
import Headline from "../../components/headline"
import Paginator from "../../components/paginator"
import SearchForm from "../../components/sarch-form"
import Seo from "../../meta/seo"
import Rss from "../../meta/rss"

const Index = ({ pageContext }) => {
  const { 
    site, 
    contentfulIndex,
    posts, 
    numPages,
  } = pageContext

  const { titleInTop } = site.siteMetadata
  const topImage = contentfulIndex.topImage
  const description = contentfulIndex.description

 const postInNode = []
  posts.forEach(
    post => {
      postInNode.push(post.node)
    }
  )

  return (
    <>
      <Layout>
        <MyProfile title={titleInTop} topImage={topImage} description={description} />
        <Main>
          <SearchForm />
          <section>
            <Headline str="最近の投稿" />
            <ArticlePreviewList posts={postInNode} />
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
