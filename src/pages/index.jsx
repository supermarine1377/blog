import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Headline from "../components/headline"
import Paginator from "../components/paginator"
import Seo from "../meta/seo"
import Rss from "../meta/rss"

const Index = ({ data }) => {
  const title = data.site.siteMetadata.title
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  const posts = data.allContentfulPost.nodes
  const totalCount = data.allContentfulPost.totalCount
  return (
    <>
      <Layout>
        <MyProfile title={title} topImage={topImage} description={description} />
        <Main>
          <section>
            <Headline str="最近の投稿" />
            <ArticlePreviewList posts={posts} />
          </section>
          <Paginator currentPage={1} numPosts={totalCount} />
        </Main>
      </Layout>
    </>
  )
}

export const Head = ({ data }) => {
  const title = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const imageUrl = data.contentfulIndex.topImage.url
  const description = data.contentfulIndex.description
  const twitterAccount = data.site.siteMetadata.twitterAccount

  return (
    <>
      <Rss baseUrl={siteUrl} />
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

export const topQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitterAccount
      }
    }
    contentfulIndex {
      id
      title
      description
      topImage {
        title
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, height: 200)
        url
      }
    }
    allContentfulPost(limit: 6, sort: {createdAt: DESC}) {
      totalCount
      nodes {
        id
        slug
        title
        featuredImage {
          id
          title
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        createdAt
        updatedAt
      }
    }
  }
`

export default Index