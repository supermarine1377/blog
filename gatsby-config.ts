import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: '米国株投資について語る',
    description: '米国株や米国長期債券を中心に投資しています。このブログでは、米国株に投資するにあたっての考え方を発信します。',
    siteUrl: 'https://utakanomitama.netlify.app',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_API_KEY,
      "spaceId": process.env.CONTENTFUL_SPACE_ID,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-transformer-remark',
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
            rel: "nofollow noopener"
          }
        }
      ],
    }, 
  }, {
    resolve: 'gatsby-plugin-sitemap'
  }, {
    resolve: 'gatsby-plugin-robots-txt'
  }, {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        process.env.GA_MEASUREMENT_ID
      ],
      pluginConfig: {
        head: true
      }
    }
  }]
};

export default config;
