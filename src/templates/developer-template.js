import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import TeamList from "../components/TeamList/teamList"
import { shuffleArray } from "../utils/other"
import { getFields } from "../utils/fields"
import LettersParallax from "../components/parallax/letters-parallax/letters-parallax"
import { ParallaxProvider } from 'react-parallax'


const OurTeamPage = ({ data, location, pageContext }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const {lang} = pageContext;
  const source = data.about.frontmatter.fields;
  return (
    <Layout location={location}>
      // <h1 className="text-center">{getFields('mainHeader', source, lang)}</h1>
      <LettersParallax letters={['O', 'U', 'R', ' ', 'T', 'E', 'A', 'M']} />
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
