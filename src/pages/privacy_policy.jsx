import React from "react";
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import Main from "../components/main"
import * as style from "./privacy_policy.module.css"

const PrivacyPolicy = ({ data }) => {
  const html = data.allContentfulPrivacyPolicy.edges[0].node.description.childMarkdownRemark.html
  return (
    <Layout>
      <Main>
        <section className={style.section} dangerouslySetInnerHTML={{__html: html}} />
      </Main>
    </Layout>
  )
}

export default PrivacyPolicy

export const aboutmeQuery = graphql`
  query{
    allContentfulPrivacyPolicy {
      edges {
        node {
          title
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