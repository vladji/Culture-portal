import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map/Map"
import AppImage from "../components/AppImage/AppImage"
import Timeline from "../components/Timeline/timeline"
import YoutubeModal from "../components/YoutubeModal/youtubeModal"
import Gallery from "../components/Gallery/gallery2"
import { getFields } from "../utils/fields"


const SecondPage = ({ data, location, pageContext }) => {
  const {lang} = pageContext;
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const source = data.about.frontmatter.fields;
  return (
    <Layout location={location}>
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
          <h2>{getFields('timelineHeader', source, lang)}</h2>
          <Timeline data={frontmatter.timeline} />
        </section>
        <section className="col-md-6">
          <h2>{getFields('worksLogHeader', source, lang)}</h2>
          <Timeline data={frontmatter.listOfWorks.map(el => ({ date: el.year, description: el.film }))} />
        </section>
      </div>
      {frontmatter.geolocation && frontmatter.geolocation.length ? (
        <section>
          <h2 className="text-center">{getFields('geolocationHeader', source, lang)}</h2>
          <div className="row flex-wrap justify-content-center">
            {frontmatter.geolocation.map((el, id) => (
              <div key={id} className="col-md-6 p-3 d-flex flex-column align-items-center justify-content-between">
                {el.description ? <h4 className="text-center">{el.description}</h4> : null}
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
        <h2>{getFields('videoHeader', source, lang)}</h2>
        <YoutubeModal videoId={frontmatter.youtube} />
      </section>
      <section className="container align-items-center d-flex flex-column">
        <h2>{getFields('galleryHeader', source, lang)}</h2>
        <Gallery authorGallery={frontmatter.gallery}/>
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
        gallery {
          src
          alt
        }
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "directors" } }
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
