import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import About from "../../components/About/About"
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