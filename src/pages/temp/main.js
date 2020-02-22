import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/about"
import DayAuthor from "../../components/DayAuthor/DayAuthor"

const getLang = () => {
  if (window.localStorage.getItem('store-lang')) {
    return window.localStorage.getItem('store-lang');
  }
  return 'en';
}

const Main = () => {
  const lang = getLang();

  return (
    <Layout lang={lang}>
      <SEO title="Home" />
      <About />
      <DayAuthor />
    </Layout>
  )
}

export default Main
