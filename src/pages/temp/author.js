import React from "react"

import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { FaGithubSquare } from "react-icons/fa"

const TeamList = ({ team }) => {
  return (
    <ul
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        margin: "5rem 0 0 0",
        padding: "0 5rem",
      }}
    >
      {team.map(teammate => {
        return (
          <li
            id={teammate.node.id}
            style={{
              margin: ".5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={teammate.node.frontmatter.photo}
              alt="developer"
              style={{
                width: "10rem",
                borderRadius: ".1rem",
                margin: ".3rem",
              }}
            />
            <h5>{teammate.node.frontmatter.name}</h5>
            <a
              href={teammate.node.frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare style={{ fontSize: "1.5rem" }} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const OurTeamPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
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
