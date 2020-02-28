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
import WorksList from '../components/WorksList/WorksList'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const SecondPage = ({ data, location, pageContext }) => {
  const { lang } = pageContext;
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const source = data.about.frontmatter.fields;
  return (
    <Layout location={location}>
      <SEO title={frontmatter.title} lang={frontmatter.lang} />
      <section className="row align-items-center">
        <div className="col-lg-4 offset-lg-1 py-2 mb-2">
          <AppImage src={frontmatter.imagepath} />
        </div>
        <Fade bottom cascade delay={1300}>
          <div className="col-lg-6 d-flex flex-column align-self-center py-2">
            <h1>{frontmatter.title}</h1>
            <h5>{frontmatter.directorsLifeYears}</h5>
            <h5> {frontmatter.city}</h5>
            <p className="text-justify">{frontmatter.titleText}</p>
            <p className="text-justify">{frontmatter.directorsInfo}</p>
          </div>
        </Fade>
      </section>
      <div className="row">
        <section className="col-lg-6 offset-xl-1">
          <h4>{getFields('timelineHeader', source, lang)}</h4>
          <Timeline data={frontmatter.timeline} />
        </section>
        <section className="col-lg-5 col-xl-4">
          <h4>{getFields('worksLogHeader', source, lang)}</h4>
          <WorksList data={frontmatter.listOfWorks.map(el => ({ date: el.year, description: el.film }))}
            yearHeader={getFields('workListYear', source, lang)}
            filmHeader={getFields('workListFilm', source, lang)}
          />
        </section>
      </div>
      {frontmatter.geolocation && frontmatter.geolocation.length ? (
        <section>
          <Reveal effect="fadeInUp">
            <h4 className="text-center">{getFields('geolocationHeader', source, lang)}</h4>
          </Reveal>
          <div className="row flex-wrap justify-content-center align-items-center flex-column">
            {frontmatter.geolocation.map((el, id) => (
              <div key={id} className="col-9 p-3 d-flex flex-column align-items-center justify-content-between mb-5">
                {el.description ? <p className="text-center">{el.description}</p> : null}
                {el.latitude && el.longitude ? (
                  <Map
                    geolocation={[
                      {
                        latitude: el.latitude,
                        longitude: el.longitude,
                        id: el.id,
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
        <Reveal effect="fadeInUp">
          <h2>{getFields('videoHeader', source, lang)}</h2>
        </Reveal>
        <YoutubeModal videoId={frontmatter.youtube} />
      </section>
      <section className="container align-items-center d-flex flex-column">
        <Reveal effect="fadeInUp">
          <h2>{getFields('galleryHeader', source, lang)}</h2>
        </Reveal>
        <Gallery authorGallery={frontmatter.gallery} />
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
