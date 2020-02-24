import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DirectorsList from "../../components/DirectorsList/DirectorsList"

const Filmmakers = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <DirectorsList />
    </Layout>
  )
}

export default Filmmakers