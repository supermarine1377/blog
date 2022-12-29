import React from "react";
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import Main from "../components/main"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Seo from "../meta/seo"
import Rss from "../meta/rss"

import * as styles from './aboutme.module.css'

const AboutMe = ({ data }) => {
  const node = data.allContentfulAboutme.edges[0].node
  const image = node.image
  const descriptionHTML = node.description.childMarkdownRemark.html

  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <GatsbyImage
            image={image.gatsbyImage}
          />
          <p>このブログの運営者のいがらしです。猫が好きです。</p>
        </div>
      </header>
      <Main>
        <section
          dangerouslySetInnerHTML={{__html: descriptionHTML}}
        />
        <section>
          <h1>ご連絡</h1>
          <p>ご連絡いただく際は、TwitterのDMにてお願いいたします。</p>
          <div className={styles.linksWrapper}>
            <a href="https://twitter.com/us_investing137" target="_blank" rel="noopener noreferrer" aria-label="公式Twitterアカウントへ">
              <StaticImage
                src="../images/twitter.png"
                height={26}
                alt={"Twitterのロゴ"}
              />
            </a>
          </div>
        </section>
      </Main>
    </Layout>
  )
}

export default AboutMe
 
export const Head = ({ data }) => {
  const node = data.allContentfulAboutme.edges[0].node
  const title = node.title
  const description = node.metaDescription
  const siteUrl = data.site.siteMetadata.siteUrl
  const imageUrl = node.image.url
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

export const aboutmeQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        twitterAccount
      }
    }
    allContentfulAboutme {
      edges {
        node {
          title
          image {
            title
            description
            gatsbyImage(width: 504)
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