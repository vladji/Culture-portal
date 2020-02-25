import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { getFields } from "../utils/fields"


const Worklog = ({ data, location, pageContext }) => {
  const {lang} = pageContext;
  const source = data.about.frontmatter.fields;
  console.log(data);
  const works = data.worklogData.frontmatter.works;
  return (
    <Layout location={location}>
      <SEO title="Worklog" />
      <section>
        <h1 className="text-center">{getFields('worklogHeader', source, lang)}</h1>
        <table className="table">
          <thead className="thead-default">
          <tr>
            <th>{ }</th>
            <th>{getFields('dateTableHeader', source, lang)}</th>
            <th>{getFields('developerTableHeader', source, lang)}</th>
            <th>{getFields('infoTableHeader', source, lang)}</th>
            <th>{getFields('timeSpentTableHeader', source, lang)}</th>
          </tr>
          </thead>
          <tbody>
          {works.map((el,index)=>(
            <tr>
              <th scope="row">{index}</th>
              <td>{el.date}</td>
              <td>{el.developer}</td>
              <td>{el.info}</td>
              <td>{el.timeSpent}</td>
            </tr>
            )
          )}

          </tbody>
        </table>
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
  }
`
