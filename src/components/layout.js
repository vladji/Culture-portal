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
        <Navigation lang={getLang(location)} location={location}/>
      </header>
      <Container fluid={true}>
        <main>{children}</main>
        <footer>
          <div className="text-center p-2">
            © Songbirds Team {new Date().getFullYear()}
          </div>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
