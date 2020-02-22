import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/about"
import DayAuthor from "../../components/DayAuthor/DayAuthor"

const Main = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <DayAuthor />
    </Layout>
  )
}

export default Main
