import React from "react"

import SearchDirector from "../components/SearchDirector/searchDirector"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { getFields } from "../utils/fields"
import Fade from 'react-reveal/Fade'


const SearchTemplate = ({ location, data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  const sourceFields = data.about.frontmatter.fields;
  const { lang } = pageContext
  const pageTitle = data.navigation.frontmatter.navigations

  const getLabel = (title) => {
    return pageTitle.find(el => el.name === title).navigation[lang]
  }

  const transform = arr =>
    arr.map(el => ({
      slug: el.frontmatter.slug,
      name: el.frontmatter.title,
      city: el.frontmatter.city,
      titleText: el.frontmatter.titleText,
      pathname: el.frontmatter.imagepath,
      bday: el.frontmatter.directorsLifeYears,
    }))

  return (
    <Layout location={location}>
      <SEO title={getLabel('filmmakers')} />
      <div className="container-fluid">
        <Fade>
          <h1 className="page-title">
            {getFields('searchTitle', sourceFields, lang)}
          </h1>
        </Fade>
        <SearchDirector authors={transform(nodes)} lang={pageContext.lang} sourceFields={sourceFields} />
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
    navigation: markdownRemark(
      frontmatter: { type: { eq: "navigation" } }
    ) {
      frontmatter {
        navigations {
          name
          navigation {
            ru
            be
            en
          }
        }
      }
  	}
  }
`
