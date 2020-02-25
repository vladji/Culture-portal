import React from "react"

import SearchDirector from "../components/SearchDirector/searchDirector"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { getFields } from "../utils/fields"

const SearchTemplate = ({ location, data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  const sourceFields = data.about.frontmatter.fields;
  const { lang } = pageContext

  const transform = arr =>
    arr.map(el => ({
      slug: el.frontmatter.slug,
      name: el.frontmatter.title,
      city: el.frontmatter.city,
      titleText: el.frontmatter.titleText,
      pathname: el.frontmatter.imagepath,
      bday: el.frontmatter.directorsLifeYears,
    }))
  console.log(data.about)
  return (
    <Layout location={location}>
      <div className="container-fluid">
        <section className="authors-list">
          <h2 className="text-center">
            {getFields('searchTitle', sourceFields, lang)}
          </h2>
          <SearchDirector authors={transform(nodes)} lang={pageContext.lang} sourceFields={sourceFields}/>
        </section>
      </div>
    </Layout>
  )
}

export default SearchTemplate

export const query = graphql`
  query($lang: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "director" }, lang: { eq: $lang } } }
    ) {
      nodes {
        frontmatter {
          city
          directorsLifeYears
          title
          titleText
          imagepath
          slug
        }
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "search" } }
    ) {
      frontmatter {
        fields {
          fieldName
          fieldData {
            ru
            be
            en
          }
        }
      }
    }
  }
`
