import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./about.css"

const About = () => {
  const query = useStaticQuery(graphql`
  query MainAbout {
    about: markdownRemark(
      frontmatter: { topic: { eq: "about" } }
    ) {
      frontmatter {
        content
      }
    }
  }
`);

  return (
    <section className="about">
      <div className="content-wrapper">
        <h2>Portal's description</h2>
        <p>{query.about.frontmatter.content}</p>
      </div>
    </section>
  )
}

export default About