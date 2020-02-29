import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { getFields } from "../utils/fields"
import Fade from 'react-reveal/Fade'
import TeamWorkLog from "../components/Worklog/worklog"

const Worklog = ({ data, location, pageContext }) => {
  const {lang} = pageContext;
  const source = data.about.frontmatter.fields;
  const workLog = data.worklogData.frontmatter;
  const pageTitle = data.navigation.frontmatter.navigations

  const getLabel = (title) => {
    return pageTitle.find(el => el.name === title).navigation[lang]
  }
  return (
    <Layout location={location}>
      <SEO title={getLabel('worklog')} />
      <section>
      <Fade>
        <h1 className="page-title">{getFields('worklogHeader', source, lang)}</h1>
      </Fade>
        <TeamWorkLog workLog={workLog} source={source} lang={lang}/>
      </section>
    </Layout>
  )
}

export default Worklog

export const query = graphql`
  query($lang: String!) {
    worklogData: markdownRemark(
      frontmatter: { type: { eq: "worklog" }, lang: { eq: $lang } }
    ) {
      frontmatter {
        works {
          date
          developer
          info
          timeSpent
          }
        problems {
          problem
          solution    
        }
        selfEvaluation {
          data
          ok    
        }
        selfEvaluationSum
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "worklog" } }
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
