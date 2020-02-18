import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map/Map"

const SecondPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="container">
        <h2>
          <img src={frontmatter.imagepath} alt={frontmatter.title} />
        </h2>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.directorsLifeYears}</h2>
        <p>{frontmatter.titleText}</p>
        <p>Я родился в городе {frontmatter.city}</p>
        <p>{frontmatter.directorsInfo}</p>
        <h3>Основные моменты жизни:</h3>
        <ul>
          {frontmatter.timeline.map(el => (
            <li key={el.description}>
              <b>{el.date} </b>
              <span>{el.description}</span>
            </li>
          ))}
        </ul>
        <h3>Список работ:</h3>
        <ul>
          {frontmatter.listOfWorks.map(el => (
            <li key={el.description}>
              <b>{el.year} </b>
              <span>{el.film}</span>
            </li>
          ))}
        </ul>
        {frontmatter.geolocation && frontmatter.geolocation.length ? (
          <div>
            <h3>Тут я ходил бродил:</h3>
            {frontmatter.geolocation.map((el, id) => (
              <div key={id}>
                {el.description ? <p>{el.description}</p> : null}
                {el.latitude && el.longitude ? (
                  <div style={{ width: 500 }}>
                    <Map
                      geolocation={[{
                        latitude: el.latitude,
                        longitude: el.longitude,
                        id,
                      }]}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query($slug: String!, $lang: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }) {
      frontmatter {
        title
        lang
        slug
        imagepath
        type
        city
        titleText
        directorsLifeYears
        directorsInfo
        youtube
        filmography
        timeline {
          date
          description
        }
        listOfWorks {
          film
          id
          year
        }
        geolocation {
          description
          id
          latitude
          longitude
        }
      }
    }
  }
`
