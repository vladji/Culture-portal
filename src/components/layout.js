import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation/navigation"
import Container from "react-bootstrap/Container"

const getLang = ({ pathname }) => {
  const pathArr = pathname.split('/')
  const currentLang = pathArr.length - 1;
  return pathArr[currentLang]
}

const Layout = ({ children, location }) => {
  return (
    <>
      <header>
        <Navigation lang={getLang(location)} location={location} />
      </header>
      <Container fluid={true}>
        <main>{children}</main>
      </Container>
      <footer>
        <div className="content-wrapper footer-content">
          © Songbirds Team {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
