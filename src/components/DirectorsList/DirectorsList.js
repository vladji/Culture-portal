import React from "react"
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
const DirectorsList = ({ data }) => {
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
    </Layout>
  )
}

export default DirectorsList

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
