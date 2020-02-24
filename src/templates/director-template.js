import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map/Map"
import AppImage from "../components/AppImage/AppImage"
import Timeline from "../components/Timeline/timeline"
import YoutubeModal from "../components/YoutubeModal/youtubeModal"


const SecondPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} lang={frontmatter.lang} />
      <section className="row align-items-center">
        <div className="col-sm-5 col-md-3 py-2">
          <AppImage src={frontmatter.imagepath} />
        </div>
        <div className="col-sm-7 col-md-9 d-flex flex-column align-self-center py-2">
            <h1>{frontmatter.title}</h1>
            <h4>{frontmatter.directorsLifeYears}</h4>
            <h4> {frontmatter.city}</h4>
            <p className="text-justify">{frontmatter.titleText}</p>
            <p className="text-justify">{frontmatter.directorsInfo}</p>
        </div>
      </section>
      <div className="row">
        <section className="col-md-6">
          <h2>Основные моменты жизни:</h2>
            <Timeline data={frontmatter.timeline}/>
        </section>
        <section className="col-md-6">
          <h2>Список работ:</h2>
          <Timeline data={frontmatter.listOfWorks.map(el=>({date: el.year, description:  el.film}))}/>
        </section>
      </div>
      {frontmatter.geolocation && frontmatter.geolocation.length ? (
        <section>
          <h2 className="text-center">Место основной деятельности</h2>
          <div className="row flex-wrap justify-content-center">
          {frontmatter.geolocation.map((el, id) => (
            <div key={id} className="col-md-6 p-3 d-flex flex-column align-items-center">
              {el.description ? <h4>{el.description}</h4> : null}
              {el.latitude && el.longitude ? (
                  <Map
                    geolocation={[
                      {
                        latitude: el.latitude,
                        longitude: el.longitude,
                        id,
                      },
                    ]}
                  />
              ) : null}
            </div>
          ))}
          </div>
        </section>
      ) : null}
      <section className="container align-items-center d-flex flex-column">
        <h2>Документальное видео</h2>
        <YoutubeModal videoId={frontmatter.youtube}/>
      </section>
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
