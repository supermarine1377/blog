import React from "react"
import Layout from "../components/layout"
import { graphql} from 'gatsby'
import MyProfile from "../components/myprofile"
import ArticlePreviewList from "../components/article-preview-list"

const Index = ({data}) => {
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  const posts = data.allContentfulPost.nodes
  return (
    <Layout>
      <MyProfile topImage={topImage} description={description} />
      <main style={{padding: "4vw 0"}}>
        <ArticlePreviewList posts={posts} />
      </main>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
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
        body {
          raw
        }
      }
    }
  }
`
