import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Paginator from "../components/paginator"
import Seo from "../meta/seo"

const Page = ({ data, pageContext }) => {
  const title = data.site.siteMetadata.title
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  const posts = data.allContentfulPost.nodes
  const totalCount = data.allContentfulPost.totalCount
  const currentPage = pageContext.currentPage
  return (
    <Layout>
      <MyProfile title={title} topImage={topImage} description={description} />
      <Main>
        <section>
          <ArticlePreviewList posts={posts} />
        </section>
        <Paginator currentPage={currentPage} numPosts={totalCount} />
      </Main>
    </Layout>
  )
}

export const Head = ({ data, pageContext }) => {
  const title = pageContext.site.siteMetadata.title
  const description = data.contentfulIndex.description
  const siteUrl = `${data.site.siteMetadata.siteUrl}/${pageContext.currentPage}`
  const imageUrl = data.contentfulIndex.topImage.url
  return (
    <Seo 
      meta={{
        title: title,
        description: description,
        siteUrl: siteUrl,
        imageUrl: imageUrl,
      }} 
    />
  )
}

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
    allContentfulPost(limit: $limit, skip: $skip, sort: {createdAt: DESC}) {
      totalCount
      nodes {
        id
        slug
        title
        description
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

export default Page