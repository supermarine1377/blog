const path = require(`path`)
const { PostsPagePath, PostPagePath } = require(`./src/util/page-path.js`)
const { numberOfPostsPerPage } = require('./src/config')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      contentfulIndex {
        id
        title
        description
        topImage {
          title
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, height: 200)
        }
      }
      allContentfulPost {
        totalCount
        edges {
          node {
            id
            slug
            title
            featuredImage {
              gatsbyImage(width: 504)
              title
              description
            }
            description
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postsPerPage = numberOfPostsPerPage

  const siteTitle = result.data.site.siteMetadata.title

  const posts = result.data.allContentfulPost.edges
  const numPosts = result.data.allContentfulPost.totalCount
  const numPages = Math.ceil(numPosts / postsPerPage)
  // create /posts/{page}
  Array.from({ length: numPages }).forEach((_, i) => {
    const page = i + 1
    createPage({
      path: PostsPagePath(page),
      component: path.resolve('src/templates/page.jsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        siteTitle: siteTitle
      }
    })
  })

  // create /blog/post/{slug}
  posts.forEach(
    node => {
      const post = node.node
      createPage({
        path: PostPagePath(post.slug),
        component: path.resolve(`src/templates/post.jsx`),
        context: {
          post: post,
          siteTitle: siteTitle
        }
      })
    }
  )
  
  const { createRedirect } = actions
  createRedirect({
    fromPath: PostsPagePath(1),
    toPath: "/",
    statusCode: 301,
    isPermanent: true,
    exactPath: true,
    redirectInBrowser: true,
  });
}