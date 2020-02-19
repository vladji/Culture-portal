import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Привет ребята, это Олег</h1>
      {allMarkdownRemark.nodes.map((el, idx) => (
        <p key={idx}>
          {`Я режиссер - ${el.frontmatter.title}. Годы жизни: ${el.frontmatter.directorsLifeYears}`}
        </p>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          directorsLifeYears
        }
      }
    }
  }
`
