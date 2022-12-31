import React from "react"
import { StaticQuery } from "gatsby";

// definition
// const meta = {
//   title: string,
//   description: string,
//   siteUrl: string,
//   imageUrl: string,
//   twitterAccount: string
// }

const Seo = ({ meta }) => {
  return (
    <>
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
      {
        meta.title && <title>{meta.title}</title>
      }
      {
        meta.description && <meta name="description" content={meta.description} />
      }
      {
        meta.siteUrl && <meta property="og:url" content={meta.siteUrl} />
      }
      {
        meta.title && <meta property="og:title" content={meta.title} />
      }
      {
        meta.description && <meta property="og:description" content={meta.description} />
      }
      {
        meta.title && <meta property="og:site_name" content={meta.title} />
      }
      {
        meta.imageUrl && <meta property="og:image" content={meta.imageUrl} />
      }
      {
        meta.twitterAccount && <meta name="twitter:site" content={`${meta.twitterAccount}`} />
      }
    </>
  )
}

export default Seo