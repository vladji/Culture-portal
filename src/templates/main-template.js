import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"
import DayAuthor from "../components/DayAuthor/DayAuthor"

const Main = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <About content={data.about.frontmatter.content}/>
      <DayAuthor content={data.dayAuthor.nodes}/>
    </Layout>
  )
}

export default Main

export const query = graphql`
  query($lang: String!) {
    about: markdownRemark(frontmatter: { lang: { eq: $lang }, topic: { eq: "about" } }) {
      frontmatter {
        content
      }
    }
    dayAuthor: allMarkdownRemark(filter: { frontmatter: { type: { eq: "director" }, lang: { eq: $lang } } }) {
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
`