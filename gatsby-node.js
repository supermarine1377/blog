const path = require(`path`)
const { PostsPagePath, PostPagePath } = require(`./src/util/page-path.js`)
const { numberOfPostsPerPage } = require('./src/config')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    query MyQuery {
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
      allContentfulPost(sort: {slug: DESC}) {
        totalCount
        edges {
          node {
            id
            slug
            slugString
            title
            featuredImage {
              gatsbyImage(width: 504)
              title
              description
              url
            }
            description
            createdAt
            updatedAt
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

  const site = result.data.site
  const contentfulIndex = result.data.contentfulIndex
  const posts = result.data.allContentfulPost.edges
  const numPosts = result.data.allContentfulPost.totalCount
  const postsPerPage = 6

  const numPages = Math.ceil(numPosts / postsPerPage)

  // Create the homepage `/`
  createPage({
    path: "/",
    component: path.resolve('src/templates/index.jsx'),  // We will move index.jsx to templates folder
    context: {
      site,
      contentfulIndex,
      posts: posts.slice(0, postsPerPage),
      numPosts: numPosts,
      numPages: numPages,
    }
  })

  // Create paginated blog listing `/posts/{page}`
  Array.from({ length: numPages }).forEach((_, i) => {
    if (i) {
      const page = i + 1
      createPage({
        path: PostsPagePath(page),
        component: path.resolve('src/templates/page.jsx'),
        context: {
          site,
          contentfulIndex,
          posts: posts.slice(i * postsPerPage, i * postsPerPage + postsPerPage),
          currentPage: page,
          numPosts: numPosts,
          numPages: numPages,
        }
      })
    }
  })

  // Create individual blog posts `/blog/post/{slug}`
  posts.forEach(node => {
    const post = node.node
    createPage({
      path: PostPagePath(post),
      component: path.resolve(`src/templates/post.jsx`),
      context: {
        post,
        site,
        contentfulIndex,
      }
    })
  })

  createRedirect({
    fromPath: "/posts/1",
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true
  })
}
