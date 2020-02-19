import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Map from "../../components/Map/Map"

const minsk = [
  {
    id: "1",
    latitude: 53.906177,
    longitude: 27.554801,
  },
]

const london = [
  {
    id: "2",
    latitude: 51.50722,
    longitude: -0.1275,
  },
]

const miami = [
  {
    id: "3",
    latitude: 25.761681,
    longitude: -80.191788,
  },
]

const myMap = () => (
  <Layout>
    <SEO title="Page map" />
    <h1>Hi from the MAP PAGE</h1>
    <div className="container">
      <div className="row ">
        <div className="col" style={{ width: 300, height: 300 }}>
          <Map geolocation={minsk} />
        </div>
        <div className="col" style={{ width: 300, height: 300 }}>
          <Map geolocation={london} />
        </div>
        <div className="col" style={{ width: 300, height: 300 }}>
          <Map geolocation={miami} />
        </div>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)

export default myMap
