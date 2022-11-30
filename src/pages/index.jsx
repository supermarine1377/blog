import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import MyProfile from "../components/myprofile"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Headline from "../components/headline"

const Index = ({data}) => {
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  const posts = data.allContentfulPost.nodes
  return (
    <Layout>
      <MyProfile topImage={topImage} description={description} />
      <Main>
        <section>
          <Headline str="最近の投稿" />
          <ArticlePreviewList posts={posts} />
        </section>
      </Main>
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
