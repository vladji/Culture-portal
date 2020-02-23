import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"
import DayAuthor from "../components/DayAuthor/DayAuthor"

const Main = ({ location }) => {
  const query = useStaticQuery(graphql`
  {
    about: markdownRemark(frontmatter: { topic: { eq: "about" }, lang: {eq: "be"} }) {
      frontmatter {
        content
      }
    }
    dayAuthor: allMarkdownRemark(filter: {frontmatter: {type: {eq: "director"}, lang: {eq: "be"}}}) {
      nodes {
        frontmatter {
          city
          directorsLifeYears
          title
          titleText
          imagepath
          imageName
        }
      }
    }
  }
`);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <About content={query.about.frontmatter.content}/>
      <DayAuthor content={query.dayAuthor.nodes}/>
    </Layout>
  )
}

export default Main
