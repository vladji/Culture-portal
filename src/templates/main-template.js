import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DayAuthor from "../components/DayAuthor/DayAuthor"
import { graphql } from "gatsby"
import { getFields } from "../utils/fields"

const Main = ({ data, location, pageContext }) => {
  const authorData = data.dayAuthor.nodes;
  const source = data.about.frontmatter.fields;
  const { lang: currentLang } = pageContext

  const header = getFields("portalDescriptionLabel", source, currentLang)
  const content = getFields("portalDescriptionData", source, currentLang)
  const author = getFields("authorOfTheDay", source, currentLang);
  const labelMore = getFields("labelMore", source, currentLang)
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <section>
        <div>
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </section>
      <section>
        <h2>{author}</h2>
        <DayAuthor authorsList ={authorData} labelMore={labelMore} lang={pageContext.lang}/>
      </section>
    </Layout>
  )
}

export default Main

export const query = graphql`
  query($lang: String!) {
    dayAuthor: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "director" }, lang: { eq: $lang } } }
    ) {
      nodes {
        frontmatter {
          city
          directorsLifeYears
          title
          titleText
          imagepath
          slug
        }
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "main" } }
    ) {
      frontmatter {
        fields {
          fieldName
          fieldData {
            ru
            be
            en
          }
        }
      }
    }
  }
`
