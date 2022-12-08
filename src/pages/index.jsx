import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Headline from "../components/headline"
import Paginator from "../components/paginator"

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
  const description = data.contentfulIndex.description

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8654869064923371"
     crossorigin="anonymous"></script>
    </>
  )
}

export const topQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    contentfulIndex {
      id
      title
      description
      topImage {
        title
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, height: 200)
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

