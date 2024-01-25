import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Main from "../components/main"
import ArticlePreviewList from "../components/article-preview-list"
import Headline from "../components/headline"
import Seo from "../meta/seo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Rss from "../meta/rss"

const RecomendedPost = ({ data }) => {
  const posts = data.allContentfulRecommendedPosts.edges[0].node.recommendPosts

  return (
    <Layout>
      <Main>
        <section>
          <Headline str="おすすめの記事" />
          <p>このサイトの管理人のいがらしが書いたおすすめの記事一覧です。</p>
          <p>バリュー投資家の視点での銘柄分析や、アメリカ長期金利や社債利回りなどの金利を考慮した市場分析に関する記事が中心です。</p>
          <ArticlePreviewList posts={posts} />
        </section>
      </Main>
    </Layout>
  )
}

export default RecomendedPost

export const Head = ({ data }) => {
  const { title, siteUrl, twitterAccount } = useSiteMetadata()
  const imageUrl = data.contentfulIndex.topImage.url
  const description = data.contentfulIndex.description

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

export const recommendedPostsQuery = graphql`
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
    allContentfulRecommendedPosts {
      edges {
        node {
          recommendPosts {
            id
            slug
            title
            featuredImage {
              id
              title
              gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`