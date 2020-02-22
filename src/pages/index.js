import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"


const LinkItem = ({ url, caption }) => (
  <a href="url" onClick={(e) => {
    e.preventDefault()
    navigate(url);
  }}>{caption}</a>
)
const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Список режисеров</h1>
      {allMarkdownRemark.nodes.map((el, idx) => (
        <div key={idx}>
          <p >
            {`Я режиссер - ${el.frontmatter.title}. Годы жизни: ${el.frontmatter.directorsLifeYears}`}
          </p>
          <p>
            <LinkItem url={`/${el.frontmatter.slug}/${el.frontmatter.lang}/`} caption={`Ссылка`} />
          </p>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "director"}, lang: {eq: "ru"}}}) {
    nodes {
      frontmatter {
        slug
        lang
        title
        directorsLifeYears
      }
    }
  }
}

`
