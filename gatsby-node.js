const path = require(`path`)
const { PostsPagePath, PostPagePath } = require(`./src/util/page-path.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  const result = await graphql(`
    {
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

  const postsPerPage = 6

  const posts = result.data.allContentfulPost.edges
  const numPosts = result.data.allContentfulPost.totalCount
  const numPages = Math.ceil(numPosts / postsPerPage)
  // create /{page}
  Array.from({ length: numPages }).forEach((_, i) => {
    const page = i + 1
    createPage({
      path: PostsPagePath(page),
      component: path.resolve('src/templates/page.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

  // create /blog/post/{slug}
  posts.forEach(
    node => {
      const post = node.node
      createPage({
        path: PostPagePath(post.slug),
        component: path.resolve(`src/templates/post.js`),
        context: {
          post: post
        }
      })
    }
  )

  createRedirect({
    fromPath: PostsPagePath(1),
    toPath: "/",
    statusCode: 301,
    isPermanent: false,
    exactPath: true,
    redirectInBrowser: true,
  });
}