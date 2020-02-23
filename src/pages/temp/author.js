import React from "react"

import Layout from "../../components/Layout"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
import { FaGithubSquare } from "react-icons/fa"

import "./author.css"

const TeamList = ({ team }) => {
  return (
    <ul className="cards">
      {team.map(teammate => {
        return (
          <li className="card" id={teammate.node.id}>
            <div
              className="developer-image"
              src={teammate.node.frontmatter.photo}
              alt="developer"
              style={{
                backgroundImage: `url(${teammate.node.frontmatter.photo})`,
              }}
            ></div>
            <h5 style={{ marginTop: "1rem" }}>
              {teammate.node.frontmatter.name}
            </h5>
            <a
              href={teammate.node.frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="github" />
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
