import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";

const Rss = () => {
  const { siteUrl } = useSiteMetadata()
  const href = `${siteUrl}/rss.xml`
  return (
    <link rel="alternate" type="application/rss+xml" title="RSS feed" href={href}></link>
  )
}

export default Rss