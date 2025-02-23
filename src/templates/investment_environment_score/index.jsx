import React from "react"
import Layout from "../../components/layout"
import Main from "../../components/main"
import toFormattedJst from "../../util/jst"
import Seo from "../../meta/seo" // Import Seo
import "./style.css"
import useSiteMetadata from "../../hooks/use-site-metadata"

const InvestmentEnvironmentScore = ({ pageContext }) => {
  const { score, html } = pageContext;
  const date = new Date()

  // Replace placeholders in the HTML with dynamic values
  const updatedHtml = html.replace("#REPLACE_WITH_SCORE#", score);
  const finalHtml = updatedHtml.replace("#REPLACE_WITH_DATE#", toFormattedJst(date));

  return (
    <Layout>
      <Main>
        <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
      </Main>
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const { frontmatter } = pageContext;
  const { title, description } = frontmatter;
  const { siteUrl, twitter } = useSiteMetadata();
  return (
    <>
      {title && description && (
        <Seo
          meta={{
            title: title,
            description: description,
            siteUrl: siteUrl,
            twitter: twitter,
          }}
        />
      )}
    </>
  );
};

export default InvestmentEnvironmentScore