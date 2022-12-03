import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"

const Page = ({ data }) => {
  console.log(data)
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  const posts = data.allContentfulPost.nodes
  return (
    <Layout>
      <MyProfile topImage={topImage} description={description} />
      <Main>
        <section>
          <ArticlePreviewList posts={posts} />
        </section>
      </Main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    contentfulIndex {
      id
      title
      description
      topImage {
        title
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, height: 200)
      }
    }
    allContentfulPost(limit: $limit, skip: $skip, sort: {createdAt: DESC}) {
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

export default Page