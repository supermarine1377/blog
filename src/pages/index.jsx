import React from "react"
import Layout from "../components/layout"
import { graphql} from 'gatsby'
import MyProfile from "../components/myprofile"

const Index = ({data}) => {
  const topImage = data.contentfulIndex.topImage
  const description = data.contentfulIndex.description
  return (
    <Layout>
      <MyProfile topImage={topImage} description={description} />
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
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180, height: 400)
      }
    }
  }
`
