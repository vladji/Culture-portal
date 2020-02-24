import React from "react"

import Layout from "../../components/layout"
import { graphql } from "gatsby"
import TeamList from "../../components/TeamList/teamList"

import "./author.css"

const OurTeamPage = ({ data, location }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout location={location}>
      <h2>Meet Our Team</h2>
      <TeamList team={edges} />
    </Layout>
  )
}

export default OurTeamPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "card" }, lang: { eq: "ru" } } }
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
  }
`
