import React from "react";

const Rss = (baseUrl) => {
  const href = `${baseUrl.baseUrl}/rss.xml`
  return (
    <link rel="alternate" type="application/rss+xml" title="RSS feed" href={href}></link>
  )

export default Rss