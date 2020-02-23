import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"


const LinkItem = ({ url, caption }) => (
  <a href="url" onClick={(e) => {
    e.preventDefault()
    navigate(url);
  }}>{caption}</a>
)

const DirectorsList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
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
  `)

  return (
    <>
      <h1>Список режисеров</h1>
      {allMarkdownRemark.nodes.map((el, idx) => (
        <div key={idx}>
          <p >
            {`Я режиссер - ${el.frontmatter.title}. Годы жизни: ${el.frontmatter.directorsLifeYears}`}
          </p>
          <p>
            <LinkItem url={`/${el.frontmatter.slug}/${el.frontmatter.lang}`} caption={`Ссылка`} />
          </p>
        </div>
      ))}
    </>
  )
}

export default DirectorsList
