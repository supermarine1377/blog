import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Main from "../../components/main"
import Headline from "../../components/headline"
import ArticlePreviewList from "../../components/article-preview-list"
import Seo from "../../meta/seo"
import useSiteMetadata from "../../hooks/use-site-metadata"
import Rss from "../../meta/rss"

const StockAnalysisForInvestors = ({ data }) => {
  const posts = data.allContentfulStockAnalysisForInvestors
    .edges[0].node.posts

  return (
    <Layout>
      <Main>
        <section>
          <Headline str="銘柄分析" />
          <p>このサイトの管理人のいがらしが、バリュー投資家の観点から米国株と日本株について考察した記事の一覧です。</p>
          <p>企業の事業や財務内容を勘案し、株主価値を計算する内容が中心です。</p>
          <ArticlePreviewList posts={posts} />
        </section>
      </Main>
    </Layout>
  )
}

export default StockAnalysisForInvestors

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
    allContentfulStockAnalysisForInvestors {
      edges {
        node {
          posts {
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