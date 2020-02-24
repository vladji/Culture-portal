import React from "react"

import Layout from "../../components/Layout"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
import TeamList from "../../components/TeamList/teamList"

import "./author.css"

const OurTeamPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      {/* <SEO lang={edges.node.id} /> */}
      <h2 style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
        Meet Our Team
      </h2>
      <TeamList team={edges} />
    </Layout>
  )
}

export default OurTeamPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "card" }, lang: { eq: "be" } } }
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
