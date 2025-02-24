import React from "react";
import { graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import Main from "../components/main"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Seo from "../meta/seo"
import Rss from "../meta/rss"
import useSiteMetadata from "../hooks/use-site-metadata";
import toFormattedJst from "../util/jst"

import * as styles from './aboutme.module.css'

const AboutMe = ({ data }) => {
  const node = data.allContentfulAboutme.edges[0].node
  const image = node.image
  const updatedAt = toFormattedJst(node.updatedAt)
  const descriptionHTML = node.description.childMarkdownRemark.html

  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <GatsbyImage
            image={image.gatsbyImage}
            alt={image.description}
          />
          <p>このブログの運営者のいがらしのポートフォリオ</p>
        </div>
      </header>
      <Main>
        <section className={styles.sec}
          dangerouslySetInnerHTML={{__html: descriptionHTML}}
        />
        <section className={styles.contacts}>
          <h1>ご連絡</h1>
          <p>ご連絡いただく際は、メール、またはTwitterにてお願いいたします。</p>
          <div className={styles.linksWrapper}>
            {/* TODO define mailadress and twitter account in gatsby-config.js and use them */}
            <a href="mailto:ukatanomitama@gmail.com" target="_brank" rel="nofollow noopener">ukatanomitama@gmail.com</a>
            <a href="https://twitter.com/us_investing137" target="_blank" rel="noopener noreferrer" aria-label="公式Twitterアカウントへ">
              <StaticImage
                src="../images/twitter.png"
                height={26}
                alt={"Twitterのロゴ"}
              />
            </a>
          </div>
          <p>ご連絡いただいた際に頂いた情報は、<Link to="/privacy_policy">プライバシーポリシー</Link>に従い、厳重に管理致します。</p>
        </section>
        <p>最終更新日: {updatedAt}</p>
      </Main>
    </Layout>
  )
}

export default AboutMe
 
export const Head = ({ data }) => {
  const node = data.allContentfulAboutme.edges[0].node
  const title = node.title
  const description = node.metaDescription
  const imageUrl = node.image.url

  const { siteUrl, twitterAccount } = useSiteMetadata()

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

export const aboutmeQuery = graphql`
  query {
    allContentfulAboutme {
      edges {
        node {
          title
          updatedAt
          image {
            title
            description
            gatsbyImage(height: 500, layout: FIXED)
            url
          }
          metaDescription
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`