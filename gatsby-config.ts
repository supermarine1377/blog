import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const title = "いがらしの株式・債券投資ノート – 初心者から学べる資産運用術"
const titleInTop = "いがらしの株式・債券投資ノート"
const description = "米国株や米国長期債券、日本株を中心に投資しています。このブログでは、米国株に投資するにあたっての考え方を発信します。"
const siteUrl = "https://ukatanomitama.com"
const twitterAccount = "@us_investing13"
const contactPageUrl = "https://forms.gle/VjMu24MQbumwdTfm7"

const config: GatsbyConfig = {
  siteMetadata: {
    title: title,
    titleInTop: titleInTop,
    description: description,
    siteUrl: siteUrl,
    twitterAccount: twitterAccount,
    contactPageUrl: contactPageUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_API_KEY,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/android-chrome-512x512.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "description",
        path: "src/templates/investment_environment_score/md",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 680,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_brank",
              rel: "nofollow noopener",
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 560,
              height: 315
            }
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: 'https://ukatanomitama.com',
        sitemap: 'https://ukatanomitama.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ukatanomitama.com`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => {
              return allContentfulPost.edges.map(edge => {
                const title = edge.node.title
                const description = edge.node.description
                const date = edge.node.createdAt
                const slug = edge.node.slug
                const url = `${site.siteMetadata.siteUrl}/post/${slug}`
                const id = edge.node.id
                const html = edge.node.body.childMarkdownRemark.html
                return Object.assign({}, {
                  title: title,
                  description: description,
                  date: date,
                  url: url,
                  guid: id,
                  custom_elements: [{ "content:encoded": html }],
                })
              })
            },
            query: `
              {
                allContentfulPost {
                  edges {
                    node {
                      id
                      slug
                      title
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
            `,
            output: "/rss.xml",
            title: title,
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://ukatanomitama.com",
          },
        ],
      },
    },
  ],
};

export default config;
