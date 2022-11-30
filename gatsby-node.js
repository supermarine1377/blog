const path = require(`path`)
// const { paginate } = require(`gatsby-awesome-pagination`)
const { PostPagePath } = require(`./src/util/page-path.jsx`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const posts = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            title
            featuredImage {
              gatsbyImage(width: 504)
              title
              description
            }
            description
            slug
            createdAt
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  posts.data.allContentfulPost.edges.forEach(
    node => {
      const post = node.node
      createPage({
        path: PostPagePath(post.slug),
        component: postTemplate,
        context: {
          post: post
        }
      })
    }
  )
}