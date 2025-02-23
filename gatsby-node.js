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
  createPostPages(queryResult, createPage)

  createRedirects(queryResult, createRedirect)
  await createInvestmentEnvironmentScorePage(createPage, graphql)
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
    component: path.resolve('src/templates/index/index.jsx'),  // We will move index.jsx to templates folder
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

  // Create individual blog posts `/blog/post/{slug}`
  posts.forEach(node => {
    const post = node.node
    createPage({
      path: PostPagePath(post),
      component: path.resolve(`src/templates/post/index.jsx`),
      context: {
        post,
        site,
        contentfulIndex,
      }
    })
  })
}

const createPostPages = (queryResult, createPage) => {
  const site = queryResult.data.site
  const contentfulIndex = queryResult.data.contentfulIndex
  const posts = queryResult.data.allContentfulPost.edges
  const numPosts = queryResult.data.allContentfulPost.totalCount
  const postsPerPage = 6
  const numPages = Math.ceil(numPosts / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    if (i) {
      const page = i + 1
      createPage({
        path: PostsPagePath(page),
        component: path.resolve('src/templates/page/index.jsx'),
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

const createInvestmentEnvironmentScorePage = async (createPage, graphql) => {
  try {
    const response = await fetch('https://ukatanomitama.com/.netlify/functions/investment_environment_score');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const score = data.investment_environment_score;

    // Query for the Markdown file
    const markdownResult = await graphql(`
      {
        markdownRemark(
          fileAbsolutePath: {regex: "/(investment_environment_score/)/"}
        ) {
          html
          frontmatter {
            title
            description
          }
        }
      }
    `);

    if (markdownResult.errors) {
      throw markdownResult.errors;
    }

    const { html, frontmatter } = markdownResult.data.markdownRemark;

    createPage({
      path: "/investment-environment-score",
      component: path.resolve("src/templates/investment_environment_score/index.jsx"),
      context: {
        score: score,
        html: html,
        frontmatter: frontmatter,
      },
    });

  } catch (error) {
    console.error('Error fetching investment environment score or Markdown:', error);
  }
};