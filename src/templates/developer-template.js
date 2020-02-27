import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import TeamList from "../components/TeamList/teamList"
import { shuffleArray } from "../utils/other"
import { getFields } from "../utils/fields"

const OurTeamPage = ({ data, location, pageContext }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const { lang } = pageContext;
  const source = data.about.frontmatter.fields;
  return (
    <Layout location={location}>
      <h1 className="page-title">{getFields('mainHeader', source, lang)}</h1>
      <TeamList team={shuffleArray(edges)} source={source} lang={lang} />
    </Layout>
  )
}

export default OurTeamPage

export const query = graphql`
  query ($lang : String!){
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "card" }, lang: { eq: $lang } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            github
            photo
            role
          }
        }
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "developers" } }
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
