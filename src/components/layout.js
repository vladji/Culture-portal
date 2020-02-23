import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation/navigation"
import Container from "react-bootstrap/Container"

const getLang = () => {
  if (window.localStorage.getItem('store-lang')) {
    return window.localStorage.getItem('store-lang');
  }
  return 'en';
}

const Layout = ({ children }) => {
  const lang = getLang();

  return (
    <>
      <header>
        <Navigation langStore={lang} />
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
