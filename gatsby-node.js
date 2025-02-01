const path = require(`path`)
const { PostsPagePath, PostPagePath } = require(`./src/util/page-path.js`)

const query = `
  query MyQuery {
    site {
      siteMetadata {
        title
        titleInTop
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
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const queryResult = await graphql(query)

  if (queryResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  createIndexPage(queryResult, createPage)
  createPostsPage(queryResult, createPage)
  createRedirects(queryResult, createRedirect)
}

const createIndexPage = (queryResult, createPage) => {
  const site = queryResult.data.site
  const contentfulIndex = queryResult.data.contentfulIndex
  const posts = queryResult.data.allContentfulPost.edges
  const numPosts = queryResult.data.allContentfulPost.totalCount
  const postsPerPage = 6
  const numPages = Math.ceil(numPosts / postsPerPage)

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

}

const createPostsPage = (queryResult, createPage) => {
  const site = queryResult.data.site
  const contentfulIndex = queryResult.data.contentfulIndex
  const posts = queryResult.data.allContentfulPost.edges
  const numPosts = queryResult.data.allContentfulPost.totalCount
  const postsPerPage = 6
  const numPages = Math.ceil(numPosts / postsPerPage)

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
}

const createRedirects = (queryResult, createRedirect) => {
  createRedirect({
    fromPath: "/posts/1",
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true
  })
  
  const posts = queryResult.data.allContentfulPost.edges
  posts.forEach(node => {
    const post = node.node
    if (post.slugString) {
      createRedirect({
        fromPath: `/post/${post.slug}/`,
        toPath: `/post/${post.slugString}/`,
        redirectInBrowser: true,
        isPermanent: true
      })

      createRedirect({
        fromPath: `/post/${post.slug}`,
        toPath: `/post/${post.slugString}/`,
        redirectInBrowser: true,
        isPermanent: true
      })
    }
  })
}